import { useColorMode } from '@vueuse/core'
import { computed } from 'vue'

const { system, store } = useColorMode()

system.value // 'dark' | 'light'
store.value // 'dark' | 'light' | 'auto'

export const appColorMode = computed(() => (store.value === 'auto' ? system.value : store.value))
export function setAppColorMode(mode: 'dark' | 'light' | 'auto') {
  store.value = mode
}
