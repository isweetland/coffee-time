import { AddIcon } from '@chakra-ui/icons'
import {
    Center,
    ComponentWithAs,
    IconButton,
    Menu,
    MenuButton,
    MenuItem,
    MenuItemProps,
    MenuList,
    useStyleConfig,
} from '@chakra-ui/react'
import React from 'react'
import { MenuButtonVariants } from '../theme/components/MenuButton'

const AvatarMenuButton = ({ variant }: { variant?: MenuButtonVariants }) => {
    const styles = useStyleConfig('MenuButton', { variant })
    return (
        <Menu strategy="fixed" boundary="scrollParent">
            {({ isOpen }) => (
                <>
                    <MenuButton aria-label={isOpen ? 'Close Avatar Menu' : 'Open Avatar Menu'} sx={{ ...styles }}>
                        <Center color="black">U</Center>
                    </MenuButton>
                    <MenuList bg="brand.300" borderColor="brand.100" borderRadius={50}>
                        <CustomMenuItem label="Account" />
                        <CustomMenuItem label="Logout" />
                    </MenuList>
                </>
            )}
        </Menu>
    )
}

const CustomMenuItem: ComponentWithAs<'button', MenuItemProps & { label?: string }> = ({ label, ...props }) => (
    <MenuItem
        color="darkFont"
        _hover={{ background: '', color: 'accent' }}
        _active={{ background: '' }}
        _focus={{ background: '' }}
        {...props}
    >
        {!!label && (
            <Center w="100%" fontWeight="bold">
                {label}
            </Center>
        )}
    </MenuItem>
)

export default AvatarMenuButton
