import { ref, computed, onUnmounted, type ComputedRef, type Ref } from "vue";
import { vec2, type Vector2 } from "@/maths/vector2";

type StyleValue = Record<string, string | number>;

type DraggableReturnParam = {
  elRef: Ref<HTMLElement | null>;
  styleObject: ComputedRef<StyleValue>;
  placeholderStyle: ComputedRef<StyleValue>;
  isDragging: Ref<boolean>;
  hasBeenDragged: Ref<boolean>;
  startDrag(event: MouseEvent): void;
};

type DraggableParams = {
  draggable?: boolean;
  startPosition?: Vector2;
};

export default function useDraggable(props: DraggableParams): DraggableReturnParam {
  const elRef = ref<HTMLElement | null>(null);
  const isDragging = ref(false);
  const hasBeenDragged = ref(false);

  const fixedPos = ref<Vector2>(props.startPosition ?? vec2(0, 0));
  const naturalSize = ref({ width: 0, height: 0 });

  const offset = vec2(0, 0);

  const styleObject = computed<StyleValue>(() => {
    if (!hasBeenDragged.value) return {};
    return {
      position: "fixed",
      left: "0px",
      top: "0px",
      width: `${naturalSize.value.width}px`,
      transform: `translate3d(${fixedPos.value.x}px, ${fixedPos.value.y}px, 0)`,
      zIndex: 100,
    };
  });

  const placeholderStyle = computed<StyleValue>(() => ({
    width: `${naturalSize.value.width}px`,
    height: `${naturalSize.value.height}px`,
    flexShrink: "0",
  }));

  function startDrag(event: MouseEvent) {
    if (props.draggable === false) return;
    event.preventDefault();

    const el = elRef.value;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    naturalSize.value = { width: rect.width, height: rect.height };

    if (!hasBeenDragged.value) {
      fixedPos.value = vec2(rect.left, rect.top);
    }

    offset.x = event.clientX - fixedPos.value.x;
    offset.y = event.clientY - fixedPos.value.y;

    isDragging.value = true;
    hasBeenDragged.value = true;

    window.addEventListener("mousemove", onDrag);
    window.addEventListener("mouseup", stopDrag);
  }

  function onDrag(event: MouseEvent) {
    fixedPos.value = vec2(
      event.clientX - offset.x,
      event.clientY - offset.y,
    );
  }

  function stopDrag() {
    isDragging.value = false;
    window.removeEventListener("mousemove", onDrag);
    window.removeEventListener("mouseup", stopDrag);
  }

  onUnmounted(stopDrag);

  return { elRef, styleObject, placeholderStyle, isDragging, hasBeenDragged, startDrag };
}
