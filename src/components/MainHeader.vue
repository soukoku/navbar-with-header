<script setup lang="ts">
import ColorModeSelector from './ColorModeSelector.vue'

const expanded = defineModel<boolean>('expanded', { required: true })
</script>
<template>
  <div>
    <ColorModeSelector />
  </div>
</template>