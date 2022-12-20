<script lang="ts" setup>
import { useScrollBar } from '@/composables/scrollBar'
const { scrollContainer } = useScrollBar()
</script>

<script lang="ts">
export default {
  name: 'MainContainer',
}
</script>

<template>
  <div ref="scrollContainer" class="wh-full overflow-hidden p-4">
    <router-view />
  </div>
</template>
