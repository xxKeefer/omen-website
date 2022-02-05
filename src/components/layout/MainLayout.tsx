import {
    Box,
    Button,
    Flex,
    Heading,
    HStack,
    Spacer,
    VStack,
} from '@chakra-ui/react'
import React from 'react'

type Props = {
    children: React.ReactNode
}

export const MainLayout = ({ children }: Props) => {
    return (
        <Box>
            <Flex bg="gray.800" align="center">
                <Box ml="3rem">
                    <Heading size="4xl" fontFamily="Lobster">
                        Omen
                    </Heading>
                </Box>
            </Flex>

            <HStack align="stretch" width="full" minH="100vh">
                <Box flex={1} bg="pink.900">
                    SIDE PANEL
                </Box>
                <Box w="85%">{children}</Box>
            </HStack>
        </Box>
    )
}
