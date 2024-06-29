export type NavLinkType = {
    id: string
    title: string
}

export type FeatureType = {
    id: string
    icon: string
    title: string
    content: string
}

export type FeedbackType = {
    id: string
    content: string
    name: string
    title: string
    img: string
}

export type StatsType = {
    id: string
    title: string
    value: string
}

export type FooterLinksType = {
    title: string
    links: Array<{name: string, link: string}>
}

export type SocialMediaType = {
    id: string
    icon: string
    link: string
}

export type ClientType = {
    id: string
    logo: string
}