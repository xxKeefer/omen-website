import { sync } from 'glob'

export type Section = {
    slug: string
    section: string
}

export const getParams = (path: string): Section[] => {
    const paths = sync(`${path}/**/*.mdx`)

    const params = paths.map((path) => {
        const rawRoute = path.split('markdown/')[1]
        const parts = rawRoute.split('/')
        const fileName = parts[parts.length - 1]
        const [slug, _ext] = fileName.split('.')
        const section = parts
            .slice(1)
            .filter((part) => part.indexOf('.mdx') === -1)
            .join('/')

        return {
            slug,
            section,
        }
    })

    return params
}
