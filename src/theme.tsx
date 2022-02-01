import { extendTheme } from "@chakra-ui/react";
import { mode } from '@chakra-ui/theme-tools';

const theme = extendTheme({
  styles: {
    global: (props: any) => ({
      body: {
        bg: mode('gray.50', 'gray.900')(props)
        // bg: mode('gray.50', 'blackAlpha.900')(props)
        // bg: mode('gray.50', 'darkTheme.base')(props)
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
          // color: mode('gray.600', 'gray.400')(props),
          color: mode('gray.600', 'whiteAlpha.700')(props),
          fontWeight: 'normal'
        }),
        tertiary: (props: any) => ({
          // color: mode('gray.600', 'gray.400')(props),
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
    },
    // Skeleton: {
    //   defaultProps: {
    //     // startColor: mode("gray.100", "red.100")(props),
    //     // endColor: mode("gray.400", "red.400")(props)
    //     startColor: 'gray.100',
    //     endColor: 'gray.400'
    //   }
    // }
    // Divider: {
    //   baseStyle: {
    //     opacity: '0.25',
    //     borderWidth: '0'
    //   }
    // }
  }
});

export default theme;
