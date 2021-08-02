import { ConstrainedComponentStyleConfig } from '../types'

export type MenuButtonVariants = 'mobile' | 'browser'

const MenuButton: ConstrainedComponentStyleConfig<MenuButtonVariants> = {
    baseStyle: {
        borderRadius: 100,
        bg: 'brand.100',
        _active: { bg: 'accent' },
        width: '40px',
        height: '40px',
        p: 7,
    },
    variants: {
        mobile: {
            _hover: { bg: '' },
        },
        browser: {
            _hover: { bg: 'accent' },
        },
    },
    defaultProps: {
        variant: 'browser',
    },
}

export default MenuButton
