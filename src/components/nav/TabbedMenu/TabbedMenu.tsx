import {
    Box,
    Flex,
    Heading,
    Tab,
    TabList,
    TabPanel,
    TabPanels,
    Tabs,
} from '@chakra-ui/react'
import { lore, rules } from '@constants/LinkTrees/index'
import React from 'react'

import { SideNav } from '..'

type Props = {}

export const TabbedMenu = () => {
    return (
        <Tabs
            flex={1}
            bg="gray.800"
            maxH="100vh"
            overflowY="scroll"
            variant="soft-rounded"
            colorScheme="pink"
            align="center"
            isFitted
        >
            <Flex align="center" direction="column">
                <Heading size="4xl" pb="0" fontFamily="Lobster">
                    Omen
                </Heading>
                <Heading size="lg" pt="0" fontFamily="Lobster">
                    The Story Driven RPG
                </Heading>
            </Flex>
            <TabList paddingInline={10} gap={8}>
                <Tab>Rules</Tab>
                <Tab>Lore</Tab>
            </TabList>
            <TabPanels>
                <TabPanel>
                    <SideNav path="/rulebook/[section]/[slug]" menu={rules} />
                </TabPanel>
                <TabPanel>
                    <SideNav path="/lore/[section]/[slug]" menu={lore} />
                </TabPanel>
            </TabPanels>
        </Tabs>
    )
}
