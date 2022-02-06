import {
    Box,
    Button,
    Flex,
    Heading,
    HStack,
    Spacer,
    VStack,
} from '@chakra-ui/react'
import { SideNav } from '@components/nav'
import React from 'react'

type Props = {
    routes: string[]
    children: React.ReactNode
}

export const MainLayout = ({ children, routes }: Props) => {
    return (
        <Box>
            <HStack align="stretch" width="full" minH="100vh" spacing={0}>
                <SideNav />
                <VStack w="80%">
                    <Flex bg="gray.800" align="start" w="full">
                        <Box ml="3rem">
                            <Heading size="4xl" fontFamily="Lobster">
                                Omen
                            </Heading>
                        </Box>
                    </Flex>
                    {children}
                </VStack>
            </HStack>
        </Box>
    )
}
