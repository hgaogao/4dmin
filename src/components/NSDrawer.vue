<script lang="ts" setup>
import { ref } from 'vue'

defineProps<{
  show: boolean
}>()

const isShow = ref(true)
</script>

<script lang="ts">
export default {
  name: 'NSDrawer',
}
</script>

<template>
  <Transition>
    <div v-if="!show" class="fixed top-0 left-0 bgc z-2000">
      <slot />
    </div>
  </Transition>

  <div v-if="!show" class="bg-black opacity-80 dark:opacity-50  fixed top-0 left-0 wh-full z-1900" @click="$emit('update:show', !show)" />
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  left: -100%;
}
.v-enter-to,
.v-leave-from {
  left: 0;
}
</style>
