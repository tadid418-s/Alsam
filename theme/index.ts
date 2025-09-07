import { extendTheme } from '@chakra-ui/react'
// Use DM Sans everywhere (standard discrete weight imports)
// DM Sans removed; using Google-hosted Merriweather & Outfit via <link> tags in layout
import { theme as baseTheme } from '@saas-ui/react'

import components from './components'
import { fontSizes } from './foundations/typography'

const overrides = {
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  },
  styles: {
    global: (props: any) => ({
      body: {
        color: 'gray.900',
        bg: 'white',
        fontSize: 'lg',
        _dark: {
          color: 'white',
          bg: 'gray.900',
        },
      },
    }),
  },
  fonts: {
    heading:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    body:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    mono:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
  },
  fontSizes,
  components,
  colors: {
    // replace the purple palette with the brand green
    purple: {
      50: '#edf6f0',
      100: '#d6ece0',
      200: '#bfe1cf',
      300: '#a7d6bf',
      400: '#8fcbaa',
      500: '#196534',
      600: '#145028',
      700: '#0f3b1d',
      800: '#0a2813',
      900: '#05150a',
    },
    primary: {
      50: '#e5f3ea',
      100: '#cce7d5',
      200: '#b2dbbf',
      300: '#99cfa9',
      400: '#7fc393',
      500: '#196534',
      600: '#145127',
      700: '#0f3d1b',
      800: '#0a2910',
      900: '#051504',
    },
  },
}

export const theme = extendTheme(baseTheme, overrides)
