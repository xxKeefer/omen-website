export type NavHeading = {
    label: string
    rank: number
    links?: NavLink[]
    headings?: NavHeading[]
}

export type NavLink = {
    section: string
    slug: string
    label: string
    rank: number
}

type NavigationMenu = (NavHeading | NavLink)[]

export const navigation: NavigationMenu = [
    {
        label: 'Introduction',
        rank: 0,
        links: [
            {
                section: 'introduction',
                slug: 'test2',
                label: 'Building Equipment',
                rank: 1,
            },
            {
                section: 'introduction',
                slug: 'index',
                label: 'Welcome to Omen',
                rank: 0,
            },
        ],
    },
    {
        label: 'Nested',
        rank: 1,
        links: [
            {
                section: 'nested',
                slug: 'test',
                label: 'MDX test file',
                rank: 0,
            },
        ],
    },
]
