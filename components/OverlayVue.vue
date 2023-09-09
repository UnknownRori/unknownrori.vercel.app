<template>
  <Teleport to="body">
    <Transition name="fade">
      <slot />
    </Transition>
  </Teleport>
</template>
