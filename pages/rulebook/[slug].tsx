import { getRuleFromSlug, getSlugs, RuleMeta, RULES_PATH } from '@api/api'
import { BillBoard } from '@components/images/BillBoard'
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
            <h1>{post.meta.title}</h1>
            <MDXWrapper>
                <MDXRemote
                    {...post.source}
                    components={{ BillBoard, ...OmenMDXStyle }}
                />
            </MDXWrapper>
        </>
    )
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const { slug } = params as { slug: string }
    const { content, meta } = getRuleFromSlug(slug)
    const mdxSource = await serialize(content)

    return { props: { post: { source: mdxSource, meta } } }
}

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = getSlugs(RULES_PATH).map((slug) => ({ params: { slug } }))

    return {
        paths,
        fallback: false,
    }
}
