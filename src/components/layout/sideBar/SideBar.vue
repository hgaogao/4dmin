<script lang="ts" setup>
import SideBarMenu from './SideBarMenu.vue'
import { useGlobalSettingStore } from '@/stores/modules/globalSettings'
const globalSettingStore = useGlobalSettingStore()
</script>

<script lang="ts">
export default {
  name: 'SideBar',
  components: { SideBarMenu },
}
</script>

<template>
  <div class="side-bar-wrap" :class="globalSettingStore.isShowMenu ? 'w-16' : 'w-60'">
    <div class="side-bar__logo flex items-center justify-center overflow-hidden h-[60px]">
      <img class="wh-10 mx-2 block" src="@/assets/images/logo.svg" alt="logo">
      <h1 v-if="!globalSettingStore.isShowMenu" class="title text-4xl">
        4dmin
      </h1>
    </div>
    <div class="side-bar__menu h-[calc(100vh-60px)]">
      <SideBarMenu />
    </div>
  </div>
</template>

<style>
/* 缩放动画 */
.side-bar-wrap {
  transition: width 0.3s;
}
</style>
