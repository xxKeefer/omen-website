import { getLoreFromSlug, getParams, LoreMeta, Section } from '@api/index'
import { HStack } from '@chakra-ui/react'
import { BillBoard } from '@components/images/BillBoard'
import { MainLayout } from '@components/layout'
import OmenMDXStyle, { MDXWrapper } from '@components/style/OmenMDXStyle'
import { PATHS } from '@constants/paths'
import type { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'

interface MDXLore {
    source: MDXRemoteSerializeResult<Record<string, unknown>>
    meta: LoreMeta
}

type LorePageProps = {
    lore: MDXLore
}

export default function LorePage({ lore }: LorePageProps) {
    return (
        <>
            <Head>
                <title>{lore.meta.title}</title>
            </Head>
            <HStack align="stretch">
                <MainLayout>
                    <MDXWrapper>
                        <MDXRemote
                            {...lore.source}
                            components={{ BillBoard, ...OmenMDXStyle }}
                        />
                    </MDXWrapper>
                </MainLayout>
            </HStack>
        </>
    )
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const { slug, section } = params as Section
    const fullSlug = `${section}/${slug}`
    const { content, meta } = getLoreFromSlug(fullSlug)
    const mdxSource = await serialize(content)

    return { props: { lore: { source: mdxSource, meta } } }
}

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = getParams(PATHS.LORE).map((route) => {
        return { params: route }
    })

    return {
        paths,
        fallback: false,
    }
}
