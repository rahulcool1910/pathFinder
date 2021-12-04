export enum stateType {
    reset = "reset",
    onClicked = "onClicked",
    start_search="start_search",
    search_success="start_search",
    search_error="start_search"
}


export interface Links {
    npm: string;
}

export interface Author {
    name: string;
    email: string;
    url: string;
    username: string;
}

export interface Publisher {
    username: string;
    email: string;
}

export interface Maintainer {
    username: string;
    email: string;
}

export interface Package {
    name: string;
    scope: string;
    version: string;
    description: string;
    date: Date;
    links: Links;
    author: Author;
    publisher: Publisher;
    maintainers: Maintainer[];
}

export interface Detail {
    quality: number;
    popularity: number;
    maintenance: number;
}

export interface Score {
    final: number;
    detail: Detail;
}

export interface Flags {
    unstable: boolean;
}

export interface Object {
    package: Package;
    score: Score;
    searchScore: number;
    flags: Flags;
}

export interface RootObject {
    objects: Object[];
    total: number;
    time: string;
}



