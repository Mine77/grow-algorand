

interface HeroLinkList extends Array<{
    title: string,
    text: string,
    link: string
}> {}

export interface HeroContent {
    title:string,
    description: string,
    list:HeroLinkList
}