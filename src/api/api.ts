import fs from 'fs'
import { sync } from 'glob'
import matter from 'gray-matter'
import path from 'path'

export const POSTS_PATH = path.join(process.cwd(), 'markdown/blog')
export const RULES_PATH = path.join(process.cwd(), 'markdown/rulebook')

export const getSlugs = (path: string): string[] => {
    const paths = sync(`${path}/*.mdx`)

    return paths.map((path) => {
        const parts = path.split('/')
        const fileName = parts[parts.length - 1]
        const [slug, _ext] = fileName.split('.')
        return slug
    })
}

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

export const getAllRules = () => {
    const rules = getSlugs(RULES_PATH)
        .map((slug) => getRuleFromSlug(slug))
        .sort(sortBySectionAndRank)
        .reverse()
    return rules
}

const sortBySectionAndRank = (a: Rule, b: Rule) => {
    if (a.meta.section === b.meta.section) {
        if (a.meta.rank > b.meta.rank) return 1
        if (a.meta.rank < b.meta.rank) return -1
        return 0
    }
    if (a.meta.section > b.meta.section) return 1
    if (a.meta.section < b.meta.section) return -1
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

interface Rule {
    content: string
    meta: RuleMeta
}

export interface RuleMeta {
    excerpt: string
    slug: string
    title: string
    chapter: string
    tags: string[]
    section: number
    rank: number
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

export const getRuleFromSlug = (slug: string): Rule => {
    const rulePath = path.join(RULES_PATH, `${slug}.mdx`)
    const source = fs.readFileSync(rulePath)
    const { content, data } = matter(source)

    return {
        content,
        meta: {
            slug,
            excerpt: data.excerpt ?? '',
            title: data.title ?? slug,
            chapter: data.chapter ?? '',
            tags: (data.tags ?? []).sort(),
            rank: data.rank ?? 0,
            section: data.section ?? 0,
        },
    }
}
