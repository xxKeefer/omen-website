import {
    Box,
    Code,
    Divider,
    Heading,
    Link,
    ListItem,
    OrderedList,
    Table,
    TableCaption,
    Tbody,
    Td,
    Text,
    Tfoot,
    Th,
    Thead,
    Tr,
    UnorderedList,
} from '@chakra-ui/react'
import { InlineDefine } from '@components/definitions/InlineDefine/InlineDefine'
import { Callout } from '@components/mdx'

const OmenMDXStyle = {
    h1: (props) => <Heading as="h1" fontSize="5xl" {...props} />,
    h2: (props) => <Heading as="h2" fontSize="4xl" {...props} />,
    h3: (props) => <Heading as="h3" fontSize="2xl" {...props} />,
    h4: (props) => <Heading as="h4" fontSize="xl" {...props} />,
    h5: (props) => <Heading as="h5" fontSize="lg" {...props} />,
    h6: (props) => <Heading as="h6" fontSize="md" {...props} />,
    p: (props) => (
        <Text as="p" fontSize="lg" paddingBlock="0.5rem" {...props} />
    ),
    a: (props) => <Link as="a" fontSize="lg" color="teal.300" {...props} />,
    pre: (props) => <Text as="pre" fontSize="lg" {...props} />,
    code: (props) => <Code as="code" bg="teal.200" fontSize="lg" {...props} />,
    ul: (props) => <UnorderedList as="ul" {...props} />,
    ol: (props) => <OrderedList as="ol" {...props} />,
    li: (props) => <ListItem as="li" {...props} />,
    hr: (props) => <Divider as="hr" {...props} />,
    blockquote: (props) => <Text as="blockquote" {...props} />,
    table: (props) => (
        <Table as="table" borderColor="teal.300" mt="1rem" mb={1} {...props} />
    ),
    thead: (props) => <Thead as="thead" borderColor="teal.300" {...props} />,
    tbody: (props) => <Tbody as="tbody" borderColor="teal.300" {...props} />,
    tr: (props) => <Tr as="tr" borderColor="teal.300" {...props} />,
    td: (props) => <Td as="td" borderColor="teal.300" {...props} />,
    th: (props) => (
        <Th as="th" borderColor="teal.300" color="pink.500" {...props} />
    ),
    tfoot: (props) => <Tfoot as="tfoot" borderColor="teal.300" {...props} />,
    Callout: (props) => <Callout {...props} />,
    InlineDefine: (props) => <InlineDefine {...props} />,
}

export default OmenMDXStyle

export const MDXWrapper = (props) => (
    <Box pl="2rem" pr="2rem" width="100%" className="themed-mdx" {...props} />
)
