import '@fontsource/lobster'
import '@fontsource/poppins'
import '@fontsource/share-tech-mono'
import '@fontsource/libre-barcode-39-text'

import { ChakraProvider } from '@chakra-ui/react'
import OmenChakraTheme from '@components/style/OmenChakraTheme'

function MyApp({ Component, pageProps }) {
    return (
        <ChakraProvider theme={OmenChakraTheme}>
            <Component {...pageProps} />
        </ChakraProvider>
    )
}
export default MyApp
