interface SectionList extends Array<{
    text:string,
    link:string
}> {}

export interface SideBarList extends Array<{
    sectionTitle: string,
    list: SectionList
}> {}