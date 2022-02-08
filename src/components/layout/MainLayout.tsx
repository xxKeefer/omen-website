import { Box, HStack, VStack } from '@chakra-ui/react'
import { TabbedMenu } from '@components/nav'
import React from 'react'

type Props = {
    children: React.ReactNode
}

export const MainLayout = ({ children }: Props) => {
    return (
        <Box>
            <HStack align="stretch" w="100vw" minH="100vh" spacing={0} ov>
                <TabbedMenu />
                <VStack w="80%" maxH="100vh" overflowY="scroll">
                    {children}
                </VStack>
            </HStack>
        </Box>
    )
}
