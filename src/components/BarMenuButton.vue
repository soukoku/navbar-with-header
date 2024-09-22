<script setup lang="ts">
import { Bars3Icon } from '@heroicons/vue/20/solid'

const props = withDefaults(defineProps<{ title?: string }>(), { title: 'Toggle main navigation' })
</script>
<template>
  <button
    class="flex items-center justify-center rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
    :title="props.title">
    <Bars3Icon class="h-5 w-5 flex-none" aria-hidden="true" />
    <span class="sr-only">{{ title }}</span>
  </button>
</template>