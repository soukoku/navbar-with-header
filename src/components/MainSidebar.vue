<script setup lang="ts">
import BarMenuButton from './BarMenuButton.vue'

const expanded = defineModel<boolean>('expanded', { required: true })
</script>
<template>
  <div
    class="py-2 px-2 absolute md:static flex-none h-full overflow-y-auto overflow-x-hidden inset-y-0 left-0 z-20 bg-gray-50 shadow-lg md:shadow-none"
    :class="[expanded ? 'w-64' : 'hidden md:flex flex-col md:w-14']">

    <div class="flex items-center" :class="[expanded ? '' : 'justify-center']">
      <BarMenuButton @click="expanded = !expanded" />

    </div>
  </div>
</template>