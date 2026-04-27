import { ref, computed, onUnmounted, type ComputedRef } from "vue";
import { vec2, type Vector2 } from "@/maths/vector2";

type ComputedValue = {
  transform: string;
  position: "absolute";
  zIndex: number;
}

type DraggableReturnParam = {
  styleObject: ComputedRef<ComputedValue>,
  startDrag(event: MouseEvent): void,
};

type DraggableParams = {
  draggable?: boolean,
  startPosition?: Vector2
};

export default function useDraggable(props: DraggableParams): DraggableReturnParam {
  const position = ref<Vector2>(props.startPosition ?? vec2(0, 0));
  const offset = vec2(0, 0);

  const styleObject = computed<ComputedValue>(() => ({
    top: '0px',
    left: '0px',
    transform: `translate3d(${position.value.x}px, ${position.value.y}px, 0)`,
    position: 'absolute' as const,
    zIndex: 100,
  }));

  function startDrag(event: MouseEvent) {
    if (props.draggable === false) return;

    offset.x = event.clientX - position.value.x;
    offset.y = event.clientY - position.value.y;

    window.addEventListener('mousemove', onDrag);
    window.addEventListener('mouseup', stopDrag);
  }

  function onDrag(event: MouseEvent) {
    position.value.x = event.clientX - offset.x;
    position.value.y = event.clientY - offset.y;
  }

  function stopDrag() {
    window.removeEventListener('mousemove', onDrag);
    window.removeEventListener('mouseup', stopDrag);
  }

  onUnmounted(() => {
    stopDrag();
  });

  return {
    startDrag,
    styleObject,
  }
}
