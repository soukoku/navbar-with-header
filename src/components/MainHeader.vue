<script setup lang="ts">
import ColorModeSelector from './ColorModeSelector.vue'

const expanded = defineModel<boolean>('expanded', { required: true })
</script>
<template>
  <div class="px-3 h-12 flex items-center justify-between">
    <div class="flex items-center">

    </div>
    <ColorModeSelector />
  </div>
</template>