<script setup lang="ts">
import {
  RadioGroup,
  RadioGroupDescription,
  RadioGroupLabel,
  RadioGroupOption
} from '@headlessui/vue'
import { CheckCircleIcon } from '@heroicons/vue/20/solid'
import { ComputerDesktopIcon, MoonIcon, SunIcon } from '@heroicons/vue/24/outline'
import { useColorMode } from '@vueuse/core'
import { computed } from 'vue'

const props = defineProps<{ large?: boolean, hideSystem?: boolean }>()

const selectedTheme = useColorMode({ emitAuto: true })

const themeList = computed(() => {
  const list = [
    { id: 'light', title: 'Light', icon: SunIcon, description: 'Use light color' },
    { id: 'dark', title: 'Dark', icon: MoonIcon, description: 'Use dark color' }]
  if (!props.hideSystem) {
    list.unshift({ id: 'auto', title: 'System', icon: ComputerDesktopIcon, description: 'Use system color' })
  }
  return list
})

</script>
<template>
  <RadioGroup v-model="selectedTheme" class="select-none">
    <RadioGroupLabel class="text-base font-semibold leading-6 text-gray-900" :class="props.large ? '' : 'sr-only'">
      Select
      the application theme
    </RadioGroupLabel>

    <div v-if="props.large" class="grid grid-cols-1 mt-4 gap-y-6 sm:grid-cols-3 sm:gap-x-4">
      <RadioGroupOption as="template" v-for="theme in themeList" :key="theme.id" :value="theme.id"
        v-slot="{ active, checked }">
        <div :class="[
          active ? 'border-blue-600 ring-2 ring-blue-600' : 'border-gray-300',
          'relative flex cursor-pointer rounded-lg border bg-white p-4 shadow-sm focus:outline-none'
        ]">
          <span class="flex flex-1">
            <span class="flex flex-col">
              <RadioGroupLabel as="span" class="flex items-center space-x-1 text-sm font-medium text-gray-900">
                <component :is="theme.icon" class="flex-none w-5 h-5" aria-hidden="true" />
                <span>
                  {{ theme.title }}
                </span>
              </RadioGroupLabel>
              <RadioGroupDescription as="span" class="flex items-center mt-1 text-gray-500 text-sm2">
                {{ theme.description }}
              </RadioGroupDescription>
            </span>
          </span>
          <CheckCircleIcon :class="[!checked ? 'invisible' : '', 'h-5 w-5 text-blue-600 flex-none']"
            aria-hidden="true" />
          <span :class="[
            active ? 'border' : 'border-2',
            checked ? 'border-blue-600' : 'border-transparent',
            'pointer-events-none absolute -inset-px rounded-lg'
          ]" aria-hidden="true" />
        </div>
      </RadioGroupOption>
    </div>
    <div v-else class="isolate inline-flex rounded-md shadow-sm cursor-pointer">
      <RadioGroupOption as="template" v-for="(theme, idx) in themeList" :key="theme.id" :value="theme.id"
        v-slot="{ active, checked }">
        <div :class="[
          active ? 'border-blue-600 ring-2 ring-blue-600' : 'border-gray-300',
          checked ? 'bg-blue-600 text-blue-50 hover:bg-blue-700' : 'text-gray-900 bg-white hover:bg-gray-100',
          'relative inline-flex items-center px-3 py-2 text-sm font-semibold ring-1 ring-inset ring-gray-300 focus:z-10',
          idx === 0 ? 'rounded-l-md' : '-ml-px',
          idx === themeList.length - 1 ? '-ml-px rounded-r-md' : '',
        ]" :title="theme.description">
          <span class="flex flex-1">
            <span class="flex flex-col">
              <RadioGroupLabel as="span" class="flex items-center space-x-1">
                <component :is="theme.icon" class="flex-none w-5 h-5" aria-hidden="true" />
                <span class="sr-only">
                  {{ theme.title }}
                </span>
              </RadioGroupLabel>
            </span>
          </span>
        </div>
      </RadioGroupOption>
    </div>
  </RadioGroup>
</template>