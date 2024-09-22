<script setup lang="ts">
import MainSidebar from '@/components/MainSidebar.vue'
import MainHeader from '@/components/MainHeader.vue'
import ColorModeSelector from '@/components/ColorModeSelector.vue'
import { useStorage } from '@vueuse/core'

const sidebarExpanded = useStorage('sidebarExpanded', true)

</script>

<template>
  <div class="h-screen bg-gray-50 text-gray-800 text-sm flex">
    <MainSidebar v-model:expanded="sidebarExpanded" />

    <main class="flex flex-col h-full">
      <MainHeader v-model:expanded="sidebarExpanded" />

      <div class="p-4">
        Page Content
        <ColorModeSelector large />
      </div>
    </main>
  </div>
</template>
