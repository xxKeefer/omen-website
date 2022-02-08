import {
    Accordion,
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Box,
    Heading,
    ListItem,
    OrderedList,
} from '@chakra-ui/react'
import { NavHeading, NavigationMenu, NavLink } from '@interfaces/index'
import Link from 'next/link'
import React from 'react'

type Props = {
    menu: NavigationMenu
    path: string
}

export const SideNav = ({ menu, path }: Props) => {
    return (
        <Accordion allowMultiple>
            {menu.map((item) => {
                return (
                    <AccordionItem border="none" key={item.label}>
                        <AccordionButton pb="0" pt="0">
                            <Box flex="1" textAlign="left">
                                <Heading p="0.5rem" size="md">
                                    {item.label}
                                </Heading>
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                        <AccordionPanel textAlign="left">
                            {'links' in item && (
                                <OrderedList>
                                    {item.links
                                        .sort((a, b) =>
                                            a.rank > b.rank ? 1 : -1,
                                        )
                                        .map(renderLinks(path))}
                                </OrderedList>
                            )}
                            {'headings' in item &&
                                item.headings
                                    .sort((a, b) => (a.rank > b.rank ? 1 : -1))
                                    .map(renderHeadings(path))}
                        </AccordionPanel>
                    </AccordionItem>
                )
            })}
        </Accordion>
    )
}

const renderLinks = (path: string) => (link: NavLink) => {
    return (
        <ListItem key={link.label}>
            <Link
                href={{
                    pathname: path,
                    query: {
                        section: link.section,
                        slug: link.slug,
                    },
                }}
            >
                <a>{link.label}</a>
            </Link>
        </ListItem>
    )
}

const renderHeadings = (path: string) => (heading: NavHeading) => {
    return (
        <Accordion key={heading.label} defaultIndex={[0]} allowMultiple>
            <AccordionItem>
                <AccordionButton>
                    <Box flex="1" textAlign="left">
                        <Heading size="md">{heading.label}</Heading>
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
                <AccordionPanel pb={4}>
                    {'links' in heading &&
                        heading.links
                            .sort((a, b) => (a.rank > b.rank ? 1 : -1))
                            .map(renderLinks(path))}
                </AccordionPanel>
            </AccordionItem>
        </Accordion>
    )
}
