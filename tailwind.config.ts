import type { Config } from 'tailwindcss'
import { createThemes } from 'tw-colors'
import colors from 'tailwindcss/colors'

const baseColors = ['gray', 'red', 'yellow', 'green', 'blue', 'indigo', 'purple', 'pink']

const shadeMapping = {
  '50': '900',
  '100': '800',
  '200': '700',
  '300': '600',
  '400': '500',
  '500': '400',
  '600': '300',
  '700': '200',
  '800': '100',
  '900': '50'
}

const generateThemeObject = (colors: any, mapping: any, invert = false) => {
  const theme: any = {}
  baseColors.forEach((color) => {
    theme[color] = {}
    Object.entries(mapping).forEach(([key, value]: any) => {
      const shadeKey = invert ? value : key
      theme[color][key] = colors[color][shadeKey]
    })
  })
  return theme
}

const lightTheme = generateThemeObject(colors, shadeMapping)
const darkTheme = generateThemeObject(colors, shadeMapping, true)

const themes = {
  light: {
    ...lightTheme,
    white: '#ffffff'
  },
  dark: {
    ...darkTheme,
    white: colors.gray['950'],
    black: colors.gray['50']
  }
}
// /** @type {import('tailwindcss').Config} */
const config: Config = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,vue,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      },
      height: {
        // screen: ['100vh' /*fallback for old browser*/, '100dvh']
        screen: '100dvh'
      }
    }
  },
  plugins: [createThemes(themes)]
}

export default config
