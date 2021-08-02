import { Variants as AddMenuButtonVariants } from '../../components/AddMenuButton'
import { ConstrainedComponentStyleConfig } from '../types'

const AddMenuButton: ConstrainedComponentStyleConfig<AddMenuButtonVariants> = {
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

export default AddMenuButton
