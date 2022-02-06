import { Text, Tooltip } from '@chakra-ui/react'
import { GLOSSARY, Glossary } from '@constants/index'
import React from 'react'

type Props = { term: Glossary; capitalize?: boolean; uppercase?: boolean }

export const InlineDefine = ({ term, capitalize, uppercase }: Props) => {
    const display = () => {
        if (capitalize) {
            return term.charAt(0).toUpperCase() + term.slice(1)
        }
        if (uppercase) {
            return term.toUpperCase()
        }
        return term
    }
    return (
        <Tooltip
            label={GLOSSARY[term]}
            placement="bottom-start"
            hasArrow
            bg="cyan.700"
            color="white"
        >
            <Text
                as="span"
                color="pink.500"
                fontWeight="bold"
                textDecoration="underline"
            >
                {display()}
            </Text>
        </Tooltip>
    )
}
