<script setup lang="ts">
const isActivated = ref(false);
const pressed = ref("");
const input: Ref<null | HTMLInputElement> = ref(null);
const histories: Ref<Array<string>> = ref([]);

watchEffect(() => {
  if (isActivated.value) {
    nextTick(() => {
      input.value?.focus();
    });
  }
})

function executeCommand() {
  if (pressed.value != "") {
    histories.value.push(pressed.value);
    pressed.value = "";
  }
}

onMounted(() => {
  // TODO : Refactor this
  document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
      isActivated.value = false;
      document.body.focus();
      return;
    }

    if (event.key === "Enter" && isActivated.value) {
      event.preventDefault();
      executeCommand();
    }

    if (event.key == ":" && !isActivated.value) {
      isActivated.value = true;
      event.preventDefault();
      return;
    }
  });
  input.value?.addEventListener("focusout", () => {
      isActivated.value = false;
      document.body.focus();
  })
})


</script>

<template>
  <PopoutVue :is-open="isActivated">
    <div class="absolute bottom-0 left-0 flex flex-col">
      <ul>
        <li v-for="(history, idx) in histories" :key="idx">{{ history }}</li>
      </ul>
      <div class="flex">
        <span>:</span>
        <input v-model="pressed" type="text" class="text-white bg-transparent border-none outline-none" ref="input">
      </div>
    </div>
  </PopoutVue>
</template>
