import { PATHS } from '@constants/index'
import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'

import { getParams } from './utils/getParams'

export const getAllRules = () => {
    const rules = getParams(PATHS.RULES).map((params) =>
        getRuleFromSlug(params.slug),
    )
    return rules
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
    const rulePath = path.join(PATHS.RULES, `${slug}.mdx`)

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
