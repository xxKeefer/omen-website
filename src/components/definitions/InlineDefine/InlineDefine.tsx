import { Text, Tooltip } from '@chakra-ui/react'
import { GLOSSARY, Glossary } from '@constants/index'
import React from 'react'

type Props = { term: Glossary }

export const InlineDefine = ({ term }: Props) => {
    return (
        <Tooltip label={GLOSSARY[term]}>
            <Text
                as="span"
                color="pink.500"
                fontWeight="bold"
                textDecoration="underline"
            >
                {term}
            </Text>
        </Tooltip>
    )
}
