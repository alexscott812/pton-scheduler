import { extendTheme } from "@chakra-ui/react";
import { mode } from '@chakra-ui/theme-tools';

const theme = extendTheme({
  styles: {
    global: (props: any) => ({
      body: {
        bg: mode('gray.50', 'gray.900')(props),
        textTransform: 'lowercase'
      }
    }),
  },
  components: {
    Modal: {
      baseStyle: (props: any) => ({
        dialog: {
          bg: mode('white', 'gray.800')(props)
        }
      })
    },
    Menu: {
      baseStyle: (props: any) => ({
        list: {
          bg: mode('white', 'gray.800')(props)
        }
      })
    },
    Text: {
      variants: {
        secondary: (props: any) => ({
          color: mode('gray.600', 'whiteAlpha.700')(props),
          fontWeight: 'normal'
        }),
        tertiary: (props: any) => ({
          color: mode('gray.600', 'whiteAlpha.700')(props),
          fontWeight: 'light',
          fontSize: 'xs'
        }),
        'subtle-bold': (props: any) => ({
          color: mode('gray.500', 'whiteAlpha.600')(props),
          fontWeight: 'semibold',
          textTransform: 'uppercase'
        })
      }
    },
    Textarea: {
      baseStyle: {
        borderRadius: 'md'
      },
      defaultProps: {
        variant: 'filled'
      }
    },
    Input: {
      baseStyle: {
        borderRadius: 'md'
      },
      defaultProps: {
        variant: 'filled'
      }
    }
  }
});

export default theme;
