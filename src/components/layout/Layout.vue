<script lang="ts" setup>
import { ref, watch } from 'vue'
import { useThrottleFn, useWindowSize } from '@vueuse/core'
import NSDrawer from '../NSDrawer.vue'
import MainContainer from './MainContainer.vue'
import SideBar from './sideBar/SideBar.vue'
import TopHeader from './TopHeader.vue'
import { useGlobalSettingStore } from '@/stores/modules/globalSettings'
const { width } = useWindowSize()
const globalSettingStore = useGlobalSettingStore()
watch(
  width,
  (newVal) => {
    if (newVal < 768)
      globalSettingStore.isShowMenu = true

    else
      globalSettingStore.isShowMenu = false
  },
  { immediate: true },
)
</script>

<script lang="ts">
export default {
  name: 'Layout',
  components: { SideBar, TopHeader, MainContainer, NSDrawer },
}
</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-aside class="h-100vh w-auto">
        <template v-if="width < 768">
          <NSDrawer v-model:show="globalSettingStore.isShowMenu">
            <SideBar />
          </NSDrawer>
        </template>
        <template v-else>
          <SideBar />
        </template>
      </el-aside>
      <el-container>
        <el-header class="s-line">
          <TopHeader />
        </el-header>
        <el-main class="h-[calc(100vh-60px)] overflow-hidden p0">
          <MainContainer />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
