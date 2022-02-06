import { Box, HStack, VStack } from '@chakra-ui/react'
import { SideNav } from '@components/nav'
import React from 'react'

type Props = {
    children: React.ReactNode
}

export const MainLayout = ({ children }: Props) => {
    return (
        <Box>
            <HStack align="stretch" width="full" minH="100vh" spacing={0}>
                <SideNav />
                <VStack w="85%">{children}</VStack>
            </HStack>
        </Box>
    )
}
