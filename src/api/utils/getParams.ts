import { sync } from 'glob'

export type Section = {
    slug: string
    section: string
}

export const getParams = (path: string): Section[] => {
    const paths = sync(`${path}/**/*.mdx`)

    // console.log({ paths })

    const params = paths.map((path) => {
        const rawRoute = path.split('markdown/')[1]
        const parts = rawRoute.split('/')
        // console.log({ parts })
        const fileName = parts[parts.length - 1]
        const [slug, _ext] = fileName.split('.')
        const section = parts
            .slice(1)
            .filter((part) => part.indexOf('.mdx') === -1)
            .join('/')
        // console.log({ section, length: section.length })
        // console.log({ slug })

        // return section.length > 0 ? slug : page
        return {
            slug,
            section,
        }
    })

    console.log({ params })
    return params
}
