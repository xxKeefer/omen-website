import { PATHS } from '@constants/index'
import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'

import { getParams } from './utils/getParams'

export const getAllLore = () => {
    const rules = getParams(PATHS.LORE).map((params) =>
        getLoreFromSlug(params.slug),
    )
    return rules
}

interface Lore {
    content: string
    meta: LoreMeta
}

export interface LoreMeta {
    excerpt: string
    slug: string
    title: string
    chapter: string
    tags: string[]
    section: number
    rank: number
}

export const getLoreFromSlug = (slug: string): Lore => {
    const lorePath = path.join(PATHS.LORE, `${slug}.mdx`)

    const source = fs.readFileSync(lorePath)
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
