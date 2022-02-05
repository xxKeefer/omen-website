import { extendTheme } from '@chakra-ui/react'

const OmenChakraTheme = extendTheme({
    initialColorMode: 'dark',
    useSystemColorMode: false,
    fonts: {
        heading: 'Poppins, sans-serif',
        body: 'Poppins, sans-serif',
        pre: 'Share Tech Mono, monospace',
        code: 'Share Tech Mono, monospace',
    },
    styles: {
        global: {
            body: {
                bg: 'gray.900',
                color: 'white',
            },
            'themed-mdx': {
                color: 'white',
            },
            'h1, h2, h3, h4, h5, h6': {
                paddingTop: '2rem',
                paddingBottom: '1rem',
            },
            'h1, h2, h3': {
                color: 'pink.500',
            },
            'h4, h5, h6': {
                color: 'teal.300',
            },
            li: {
                marginLeft: '1rem',
            },
            blockquote: {
                marginLeft: '1rem',
                paddingLeft: '1rem',
                borderLeft: '0.5rem solid',
                borderColor: 'pink.500',
                bg: 'gray.600',
            },
            hr: {
                paddingTop: '1rem',
                marginBottom: '1rem',
            },
            pre: {
                padding: '1rem',
            },
            code: {
                bg: 'teal.200',
                color: 'teal.800',
                borderRadius: '0.2rem',
                paddingInline: '0.25rem',
            },
            'ul, ol': {
                paddingLeft: '1rem',
                paddingBlock: '0.5rem',
            },
            a: {
                color: 'pink.500',
            },
        },
    },
})

export default OmenChakraTheme
