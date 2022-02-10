export const GLOSSARY = {
    active: 'Something that is created by a character and remains active for X turns.',
    advantage:
        'A word or phrase that highlights a detail about the scene with a player can use for a reroll or a +2 to a roll ',
    assumed: 'Common sense',
    character_detail: 'Narrative permission pertaining to a Character',
    concept:
        'A rule that a scene must follow without requiring a roll. These can be created or removed by a DC',
    dc: 'A dice roll to determine success or failure',
    detail: "A narrative permission that allows player's to do things they otherwise wouldn't",
    directive: 'Type of mission',
    flip: 'Flip X omen tokens to the dark side.',
    refresh: 'Flip X omen tokens to the light side.',
    enemy_detail: 'Narrative permission pertaining to an Enemy',
    premise: 'Assumed Concept',
    priority:
        'A character or enemies position in which the turn will play out.',
    range: 'The distance in which a character or enemy can do something',
    verisimilitude: 'the appearance of being true or real.',
    zone_detail: 'Narrative permission pertaining to a Zone',
    zone: 'A tile on the map',
} as const

export type Glossary = keyof typeof GLOSSARY

type PropType<TObj, TProp extends keyof TObj> = TObj[TProp]

export type Definition = PropType<typeof GLOSSARY, Glossary>
