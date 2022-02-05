import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'

import { getSlugs } from './utils/getSlugs'

export const POSTS_PATH = path.join(process.cwd(), 'markdown/blog')

export const getAllPosts = () => {
    const posts = getSlugs(POSTS_PATH)
        .map((slug) => getPostFromSlug(slug))
        .sort((a, b) => {
            if (a.meta.date > b.meta.date) return 1
            if (a.meta.date < b.meta.date) return -1
            return 0
        })
        .reverse()
    return posts
}

interface Post {
    content: string
    meta: PostMeta
}

export interface PostMeta {
    excerpt: string
    slug: string
    title: string
    tags: string[]
    date: string
}

export const getPostFromSlug = (slug: string): Post => {
    const postPath = path.join(POSTS_PATH, `${slug}.mdx`)
    const source = fs.readFileSync(postPath)
    const { content, data } = matter(source)

    return {
        content,
        meta: {
            slug,
            excerpt: data.excerpt ?? '',
            title: data.title ?? slug,
            tags: (data.tags ?? []).sort(),
            date: (data.date ?? new Date()).toString(),
        },
    }
}
