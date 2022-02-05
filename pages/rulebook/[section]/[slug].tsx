import {
    getParams,
    getRuleFromSlug,
    RuleMeta,
    RULES_PATH,
    Section,
} from '@api/index'
import { HStack } from '@chakra-ui/react'
import { BillBoard } from '@components/images/BillBoard'
import { MainLayout, SidePanel } from '@components/layout'
import OmenMDXStyle, { MDXWrapper } from '@components/style/OmenMDXStyle'
import type { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'

interface MDXPost {
    source: MDXRemoteSerializeResult<Record<string, unknown>>
    meta: RuleMeta
}

export default function PostPage({ post }: { post: MDXPost }) {
    return (
        <>
            <Head>
                <title>{post.meta.title}</title>
            </Head>
            <HStack align="stretch">
                <MainLayout>
                    <MDXWrapper>
                        <MDXRemote
                            {...post.source}
                            components={{ BillBoard, ...OmenMDXStyle }}
                        />
                    </MDXWrapper>
                </MainLayout>
            </HStack>
        </>
    )
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    console.log('getStaticProps', params)

    const { slug, section } = params as Section
    const fullSlug = `${section}/${slug}`
    const { content, meta } = getRuleFromSlug(fullSlug)
    const mdxSource = await serialize(content)

    return { props: { post: { source: mdxSource, meta } } }
}

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = getParams(RULES_PATH).map((route) => ({ params: route }))

    return {
        paths,
        fallback: false,
    }
}
