<template>
  <el-container
    class="h100"
    v-loading="isShowLoading"
    :element-loading-text="loadingText"
  >
    <el-aside width="200px"><i class="el-icon-platform-eleme"></i></el-aside>
    <el-container>
      <el-header>Header</el-header>
      <el-main><router-view /></el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts">
import { defineComponent, computed, watch } from 'vue'
import { useStore } from './store'
import { ElMessage } from 'element-plus'

export default defineComponent({
  name: 'App',

  setup() {
    const store = useStore()

    watch(
      () => store.state.widget.message,
      (config) => {
        config.show && ElMessage(config)
      },
      {
        deep: true
      }
    )

    return {
      isShowLoading: computed(() => store.state.widget.loading.show),
      loadingText: computed(() => store.state.widget.loading.text),
    }
  }
})
</script>

<style lang="scss" module="mod">
@import './assets/styles/vars.scss';
</style>
