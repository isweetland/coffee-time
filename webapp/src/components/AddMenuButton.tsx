import { AddIcon } from '@chakra-ui/icons'
import {
    Center,
    ComponentWithAs,
    IconButton,
    Link,
    Menu,
    MenuButton,
    MenuItem,
    MenuItemProps,
    MenuList,
    useStyleConfig,
} from '@chakra-ui/react'
import React from 'react'
import { useHistory } from 'react-router-dom'
import { MenuButtonVariants } from '../theme/components/MenuButton'

const AddMenuButton = ({ variant }: { variant?: MenuButtonVariants }) => {
    const styles = useStyleConfig('MenuButton', { variant })
    const history = useHistory()

    const linkToNewBrew = () => {
        history.push('/new-brew')
    }

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
                        <CustomMenuItem label="New Brew" onClick={linkToNewBrew} />
                        <CustomMenuItem label="New Method" />
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
            <Center w="100%" fontWeight="bold" as={Link}>
                {label}
            </Center>
        )}
    </MenuItem>
)

export default AddMenuButton
