import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'

import { getParams } from './utils/getParams'

export const RULES_PATH = path.join(process.cwd(), 'markdown/rulebook')

export const getAllRules = () => {
    console.log({ slugs: getParams(RULES_PATH) })

    const rules = getParams(RULES_PATH)
        .map((params) => getRuleFromSlug(params.slug))
        .sort(sortBySectionAndRank)
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
