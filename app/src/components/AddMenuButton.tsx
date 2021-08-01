import { AddIcon, ExternalLinkIcon } from '@chakra-ui/icons'
import {
    Center,
    ComponentWithAs,
    IconButton,
    Menu,
    MenuButton,
    MenuItem,
    MenuItemProps,
    MenuList,
    useBoolean,
    useStyleConfig,
} from '@chakra-ui/react'
import React from 'react'

export type Variants = 'mobile' | 'browser'

const AddMenuButton = ({ variant }: { variant?: Variants }) => {
    const styles = useStyleConfig('AddMenuButton', { variant })
    return (
        <Menu>
            {({ isOpen }) => (
                <>
                    <MenuButton
                        as={IconButton}
                        aria-label={isOpen ? 'Close Create Menu' : 'Open Create Menu'}
                        icon={
                            <AddIcon
                                color="black"
                                transform={`rotate(${isOpen ? '45' : '0'}deg)`}
                                transition="transform 0.3s ease-in"
                            />
                        }
                        sx={{ ...styles }}
                    />
                    <MenuList bg="brand.300" borderColor="brand.100" borderRadius={50}>
                        <_MenuItem label="New Log" />
                        <_MenuItem label="New Bean" />
                        <_MenuItem label="New Method" />
                    </MenuList>
                </>
            )}
        </Menu>
    )
}

const _MenuItem: ComponentWithAs<'button', MenuItemProps & { label?: string }> = ({ label, ...props }) => (
    <MenuItem
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

export default AddMenuButton
