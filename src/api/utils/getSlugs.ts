import { sync } from 'glob'

export const getSlugs = (path: string): string[] => {
    const paths = sync(`${path}/*.mdx`)

    return paths.map((path) => {
        const parts = path.split('/')
        const fileName = parts[parts.length - 1]
        const [slug, _ext] = fileName.split('.')
        return slug
    })
}
