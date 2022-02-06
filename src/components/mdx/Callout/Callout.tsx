import { BackgroundProps, Box, Center, HStack, VStack } from '@chakra-ui/react'
import React from 'react'

type Props = {
    emoji: string
    heading: string
    children: React.ReactNode
    color?: BackgroundProps['bg']
}

export const Callout = ({
    children,
    emoji,
    heading,
    color = 'pink.500',
}: Props) => {
    return (
        <Center justifyContent="left">
            <VStack bg={color} borderRadius="md" maxW="100%" m={10}>
                <HStack
                    bg="blackAlpha.300"
                    justify="left"
                    w="full"
                    borderTopRadius="lg"
                    spacing={5}
                >
                    <Box
                        bg="blackAlpha.300"
                        p="0.5rem"
                        as="span"
                        fontSize="xl"
                        fontWeight="bold"
                    >
                        {emoji}
                    </Box>
                    <Box as="span" fontSize="xl" fontWeight="bold">
                        {heading}
                    </Box>
                </HStack>
                <Box maxW="100%" p="1rem" pt="0.5rem" as="span" fontSize="lg">
                    {children}
                </Box>
            </VStack>
        </Center>
    )
}
