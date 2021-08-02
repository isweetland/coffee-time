import { ThemeExtension, ThemeOverride } from '@chakra-ui/react'
import AddMenuButton from './components/AddMenuButton'

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
        font: '#ccb9b1',
        dark: {
            100: '#212123',
            200: '#1e1e20',
            300: '#1a1a1c',
            400: '#171719',
            500: '#141415',
        },
    },
    shadows: {
        outline: 'none',
    },
    fonts: {},
    styles: {
        global: {
            body: {
                color: 'font',
            },
            button: {
                _focus: {
                    // background: "gray.200"
                },
            },
        },
    },
    components: {
        AddMenuButton,
    },
}

export default themeObject
