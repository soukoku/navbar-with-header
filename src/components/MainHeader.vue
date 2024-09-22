<script setup lang="ts">
import ColorModeSelector from './ColorModeSelector.vue'
import BarMenuButton from './BarMenuButton.vue'

const expanded = defineModel<boolean>('expanded', { required: true })
</script>
<template>
  <div class="px-2 h-12 flex items-center justify-between">
    <div class="flex items-center">
      <BarMenuButton @click="expanded = !expanded" class="md:hidden" />

    </div>
    <ColorModeSelector hide-system />
  </div>
</template>