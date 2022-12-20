<script lang="ts" setup>
import { nextTick, onMounted, onUnmounted, ref } from 'vue'
import { useScrollBar } from '@/composables/scrollBar'
import { useGlobalSettingStore } from '@/stores/modules/globalSettings'
const globalSettingStore = useGlobalSettingStore()

const isCollapse = ref(false)

const { scrollContainer } = useScrollBar()

const handleOpen = (key: string, keyPath: string[]) => {
  // console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  // console.log(key, keyPath)
}
</script>

<script lang="ts">
export default {
  name: 'SideBarMenu',
}
</script>

<template>
  <div ref="scrollContainer" class="menu-scroll h-full overflow-auto relative ">
    <el-menu
      default-active="2"
      :collapse="globalSettingStore.isShowMenu"
      :collapse-transition="false"
      class="h-full"
      @open="handleOpen"
      @close="handleClose"
    >
      <el-sub-menu index="1">
        <template #title>
          <el-icon><div i-carbon:3d-cursor /></el-icon>
          <span>Navigator One</span>
        </template>
        <el-menu-item-group>
          <template #title>
            <span>Group One</span>
          </template>
          <el-menu-item index="1-1">
            item one
          </el-menu-item>
          <el-menu-item index="1-2">
            item two
          </el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="Group Two">
          <el-menu-item index="1-3">
            item three
          </el-menu-item>
        </el-menu-item-group>
        <el-sub-menu index="1-4">
          <template #title>
            <span>item four</span>
          </template>
          <el-menu-item index="1-4-1">
            item one
          </el-menu-item>
        </el-sub-menu>
      </el-sub-menu>
      <el-menu-item index="2">
        <el-icon><div i-carbon:3d-cursor /></el-icon>
        <template #title>
          Navigator Two
        </template>
      </el-menu-item>
      <el-menu-item index="3" disabled>
        <el-icon><div i-carbon:3d-cursor /></el-icon>
        <template #title>
          Navigator Three
        </template>
      </el-menu-item>
      <el-menu-item index="4">
        <el-icon><div i-carbon:3d-cursor /></el-icon>
        <template #title>
          Navigator Four
        </template>
      </el-menu-item>
    </el-menu>
  </div>
</template>
