<script setup lang="ts">
import MainSidebar from '@/components/MainSidebar.vue'
import MainHeader from '@/components/MainHeader.vue'
import ColorModeSelector from '@/components/ColorModeSelector.vue'
import { useStorage } from '@vueuse/core'

const mainNavExpanded = useStorage('mainNavExpanded', true)

</script>

<template>
  <div class="h-screen bg-gray-50 text-gray-800 text-sm flex">
    <MainSidebar v-model:expanded="mainNavExpanded" />

    <main class="flex-auto flex flex-col overflow-hidden">
      <MainHeader v-model:expanded="mainNavExpanded" />

      <div class="p-4 bg-white rounded-tl-xl flex-auto border-l border-t border-gray-300">
        Page Content
        <ColorModeSelector large />
      </div>
    </main>
  </div>
</template>
