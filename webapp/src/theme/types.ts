import { ComponentStyleConfig, StyleObjectOrFn } from '@chakra-ui/react'

type KeyType = string | number | symbol

export type ConstrainedComponentStyleConfig<
    V extends KeyType = KeyType,
    S extends KeyType = KeyType
> = ComponentStyleConfig & { variants?: Record<V, StyleObjectOrFn>; sizes?: Record<S, StyleObjectOrFn> }
