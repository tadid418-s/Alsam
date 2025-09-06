import { extendTheme } from '@chakra-ui/react'
import '@fontsource-variable/inter'
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
    heading: 'Inter Variable, Inter, sans-serif',
    body: 'Inter Variable, Inter, sans-serif',
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
  },
}

export const theme = extendTheme(baseTheme, overrides)
