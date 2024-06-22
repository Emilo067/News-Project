type Categories = "regional" |
    "technology"
    | "lifestyle"
    | "business"
    | "general"
    | "programming"
    | "science"
    | "entertainment"
    | "world"
    | "sports"
    | "finance"
    | "academia"
    | "politics"
    | "health"
    | "opinion"
    | "food"
    | "game"

export type NewsType = {
    id: string,
    title: string,
    description: string,
    url: string,
    author: string,
    image: string,
    language: string,
    category: Categories[],
    published: "2019-08-04 14:22:08 +0000"
}


export type BaseResponseType = {
    news: NewsType[]
    page: number
    status: string
}