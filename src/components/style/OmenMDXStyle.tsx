import {
    Code,
    Divider,
    Heading,
    Link,
    ListItem,
    OrderedList,
    Text,
    UnorderedList,
} from '@chakra-ui/react'

const OmenMDXStyle = {
    h1: (props) => <Heading as="h1" fontSize="7xl" {...props} />,
    h2: (props) => <Heading as="h2" fontSize="6xl" {...props} />,
    h3: (props) => <Heading as="h3" fontSize="5xl" {...props} />,
    h4: (props) => <Heading as="h4" fontSize="3xl" {...props} />,
    h5: (props) => <Heading as="h5" fontSize="x-large" {...props} />,
    h6: (props) => <Heading as="h6" fontSize="larger" {...props} />,
    p: (props) => <Text as="p" fontSize="xl" {...props} />,
    a: (props) => <Link as="a" fontSize="xl" {...props} />,
    pre: (props) => <Text as="pre" fontSize="xl" {...props} />,
    code: (props) => <Code as="code" bg="teal.200" fontSize="xl" {...props} />,
    ul: (props) => <UnorderedList as="ul" {...props} />,
    ol: (props) => <OrderedList as="ol" {...props} />,
    li: (props) => <ListItem as="li" {...props} />,
    hr: (props) => <Divider as="hr" {...props} />,
    blockquote: (props) => <Text as="blockquote" {...props} />,
}

export default OmenMDXStyle

export const MDXWrapper = (props) => <div className="themed-mdx" {...props} />
