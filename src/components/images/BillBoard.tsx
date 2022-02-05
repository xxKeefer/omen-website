import { Center } from '@chakra-ui/react'
import Image from 'next/image'

type Props = {
    src: string
    alt: string
    width: string
    height: string
}

export const BillBoard = ({ src, alt, width, height }: Props) => (
    <Center width="100%" p="0.5rem">
        <Image src={src} alt={alt} width={width} height={height} />
    </Center>
)
