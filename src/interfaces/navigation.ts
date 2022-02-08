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

export type NavigationMenu = (NavHeading | NavLink)[]
