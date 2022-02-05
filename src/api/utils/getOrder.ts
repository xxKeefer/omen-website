import { sync } from 'glob'

export const getOrder = (path: string): string[] => {
    const paths = sync(`${path}/**/meta.json`)

    console.log({ paths })

    // return paths.map((path) => {
    //     const parts = path.split('/')
    //     const fileName = parts[parts.length - 1]
    //     const [slug, _ext] = fileName.split('.')
    //     return slug
    // })
    return paths
}
