<template>
  <Transition>
    <slot />
  </Transition>
</template>

<style scoped>
@keyframes BlinkIn {
  0% {
    opacity: 0;
    filter: blur(20px);
    transform: scale(1.2);
  }

  20% {
    opacity: 1;
    filter: blur(5px);
    transform: scale(1);
  }

  40% {
    opacity: 0.8;
    transform: scale(1.05);
  }

  60% {
    opacity: 1;
  }

  100% {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes BlinkOut {
  0% {
    opacity: 1;
    transform: scale(1);
  }

  20% {
    opacity: 0.8;
    transform: scale(1.05);
  }

  40% {
    opacity: 0.9;
    filter: blur(5px);
  }

  60% {
    opacity: 0;
    transform: scale(1.2);
    filter: blur(20px);
  }

  100% {
    opacity: 0;
  }
}

.v-enter-active {
  animation: BlinkIn 0.5s ease-in-out;
}

.v-leave-active {
  animation: BlinkOut 0.5s ease-in-out;
}

.v-enter-to,
.v-leave-from {
  opacity: 1;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
