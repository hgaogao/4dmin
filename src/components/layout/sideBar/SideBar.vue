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
  <div class="side-bar-wrap" :class="globalSettingStore.isShowMenu ? 'w-auto' : 'w-60'">
    <div class="side-bar__logo flex items-center justify-start overflow-hidden h-[60px]">
      <img class="wh-10 mx-3 block" src="@/assets/images/logo.svg" alt="logo">
      <h1 class="title text-4xl w-0">
        4Dmin
      </h1>
    </div>
    <div class="side-bar__menu h-[calc(100vh-60px)]">
      <SideBarMenu />
    </div>
  </div>
</template>
