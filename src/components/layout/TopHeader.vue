<script lang="ts" setup>
import { useDark, useToggle } from '@vueuse/core'
import { useGlobalSettingStore } from '@/stores/modules/globalSettings'
const globalSettingStore = useGlobalSettingStore()

const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>

<script lang="ts">
export default {
  name: 'TopHeader',
}
</script>

<template>
  <div class="wh-full flex items-center">
    <div v-if="globalSettingStore.isShowMenu" class="mr-3 i-carbon:menu" @click="globalSettingStore.isShowMenu = false" />
    <div v-else class="mr-3 i-carbon:overflow-menu-vertical" @click="globalSettingStore.isShowMenu = true" />
    <div>header</div>
    <div class="ml-auto">
      <div class="i-carbon:moon" @click="toggleDark()" />
    </div>
  </div>
</template>
