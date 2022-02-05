import { Box, HStack } from '@chakra-ui/react'
import React from 'react'

type Props = {
    children: React.ReactNode
}

export const MainLayout = ({ children }: Props) => {
    return (
        <HStack align="stretch" width="full" minH="100vh">
            <Box flex={1} bg="pink.900">
                SIDE PANEL
            </Box>
            <Box w="85%">{children}</Box>
        </HStack>
    )
}
