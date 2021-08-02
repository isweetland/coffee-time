import { ThemeConfig, ThemeExtension, ThemeOverride, extendTheme } from '@chakra-ui/react'
import MenuButton from './components/MenuButton'

const themeObject: ThemeOverride | ThemeExtension<ThemeOverride> = {
    colors: {
        brand: {
            100: '#a0583c',
            200: '#904f36',
            300: '#804630',
            400: '#603524',
            500: '#502c1e',
            600: '#402318',
            700: '#3a271f',
            800: '#261a15',
            900: '#130d0a',
        },
        accent: '#c08267',
        dark: {
            100: '#212123',
            200: '#1e1e20',
            300: '#1a1a1c',
            400: '#171719',
            500: '#141415',
        },
        light: {
            100: '#ebe3e0',
            200: '#f0eae8',
            300: '#f5f1ef',
            400: '#faf8f7',
            500: '#ffffff',
        },
        lightFont: '#3d3735',
        darkFont: '#ccb9b1',
    },
    shadows: {
        outline: 'none',
    },
    styles: {
        global: (props) => ({
            body: {
                color: props.colorMode === 'light' ? 'lightFont' : 'darkFont',
            },
            button: {
                _focus: {
                    // background: "gray.200"
                },
            },
        }),
    },
    components: {
        MenuButton,
    },
}

const config: ThemeConfig = {
    initialColorMode: 'light',
    useSystemColorMode: false,
}

const theme = extendTheme({ ...themeObject, config })

export default theme
