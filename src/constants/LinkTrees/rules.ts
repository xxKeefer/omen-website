import { NavigationMenu } from '@interfaces/index'

export const rules: NavigationMenu = [
    {
        label: 'Introduction',
        rank: 0,
        links: [
            // {
            //     section: 'introduction',
            //     slug: 'test',
            //     label: 'Markdown Test',
            //     rank: 1,
            // },
            {
                section: 'introduction',
                slug: 'index',
                label: 'Welcome to Omen',
                rank: 0,
            },
        ],
    },
    {
        label: 'Character Creation',
        rank: 1,
        links: [
            {
                section: 'character-creation',
                slug: 'index',
                label: 'Starting a Character',
                rank: 0,
            },
            {
                section: 'character-creation',
                slug: 'aspects-and-omens',
                label: 'Aspects and Omens',
                rank: 1,
            },
        ],
    },
    {
        label: 'Actions',
        rank: 2,
        links: [
            {
                section: 'actions',
                slug: 'actions',
                label: 'Actions Overview',
                rank: 0,
            },
            {
                section: 'actions',
                slug: 'adapt',
                label: 'Adapt',
                rank: 1,
            },
            {
                section: 'actions',
                slug: 'boon',
                label: 'Boon',
                rank: 2,
            },
            {
                section: 'actions',
                slug: 'encourage',
                label: 'Encourage',
                rank: 3,
            },
            {
                section: 'actions',
                slug: 'explore',
                label: 'Explore',
                rank: 4,
            },
            {
                section: 'actions',
                slug: 'help',
                label: 'Help',
                rank: 5,
            },
            {
                section: 'actions',
                slug: 'interact',
                label: 'Interact',
                rank: 6,
            },
            {
                section: 'actions',
                slug: 'invent',
                label: 'Invent',
                rank: 7,
            },
            {
                section: 'actions',
                slug: 'overcome',
                label: 'Overcome',
                rank: 8,
            },
            {
                section: 'actions',
                slug: 'sense',
                label: 'Sense',
                rank: 9,
            },
        ],
    },
    {
        label: 'Skills',
        rank: 3,
        links: [
            {
                section: 'skills',
                slug: 'definitions',
                label: 'Definitions',
                rank: 0,
            },
        ],
    },
    {
        label: 'Damage and Health',
        rank: 4,
        links: [
            {
                section: 'damage-and-health',
                slug: 'consequences',
                label: 'Consequences',
                rank: 0,
            },
            {
                section: 'damage-and-health',
                slug: 'scars',
                label: 'Scars',
                rank: 1,
            },
            {
                section: 'damage-and-health',
                slug: 'tpk',
                label: 'TPKs',
                rank: 2,
            },
        ],
    },
    {
        label: 'Aspects',
        rank: 5,
        links: [
            {
                section: 'aspects',
                slug: 'terminology',
                label: 'Terminology',
                rank: 0,
            },
            {
                section: 'aspects',
                slug: 'advantages',
                label: 'Advantages',
                rank: 1,
            },
            {
                section: 'aspects',
                slug: 'details',
                label: 'Details',
                rank: 2,
            },
            {
                section: 'aspects',
                slug: 'premises',
                label: 'Premises',
                rank: 3,
            },
        ],
    },
    {
        label: 'Enemies',
        rank: 6,
        links: [
            {
                section: 'enemies',
                slug: 'monsters',
                label: 'Monsters',
                rank: 0,
            },
            {
                section: 'enemies',
                slug: 'example-monster',
                label: 'Example Monster',
                rank: 1,
            },
        ],
    },
    {
        label: 'Zones',
        rank: 7,
        links: [
            {
                section: 'zones',
                slug: 'index',
                label: 'Representing Zones',
                rank: 0,
            },
            {
                section: 'zones',
                slug: 'layouts',
                label: 'Zone Layouts',
                rank: 1,
            },
            {
                section: 'zones',
                slug: 'attributes',
                label: 'Zone Attributes',
                rank: 2,
            },
            {
                section: 'zones',
                slug: 'combat',
                label: 'Zonal Combats',
                rank: 3,
            },
        ],
    },
    {
        label: 'Character Progression',
        rank: 8,
        links: [
            {
                section: 'upgrading-characters',
                slug: 'character-progression',
                label: 'Character Progression',
                rank: 0,
            },
            {
                section: 'upgrading-characters',
                slug: 'building-equipment',
                label: 'Building Equipment',
                rank: 1,
            },
            {
                section: 'upgrading-characters',
                slug: 'upgrade-options',
                label: 'Upgrade Options',
                rank: 2,
            },
        ],
    },
    {
        label: 'Glossary',
        rank: 9,
        links: [
            {
                section: 'glossary',
                slug: 'core',
                label: 'Core',
                rank: 0,
            },
            {
                section: 'glossary',
                slug: 'power',
                label: 'Power',
                rank: 1,
            },
            {
                section: 'glossary',
                slug: 'aspects',
                label: 'Aspects',
                rank: 2,
            },
            {
                section: 'glossary',
                slug: 'omens',
                label: 'Omens',
                rank: 3,
            },
            {
                section: 'glossary',
                slug: 'consequences',
                label: 'Consequences',
                rank: 4,
            },
            {
                section: 'glossary',
                slug: 'actions',
                label: 'Actions',
                rank: 5,
            },
            {
                section: 'glossary',
                slug: 'skills',
                label: 'Skills',
                rank: 6,
            },
            {
                section: 'glossary',
                slug: 'enemies',
                label: 'Enemies',
                rank: 7,
            },
        ],
    },
]
