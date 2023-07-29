import { useMemo } from "react";

//required key 'title' in any post
//each key in post object is string
type post = {
    title: string;
    [key: string] : any;
}

export const useSortedPosts = <T extends post>(posts: T[], sort: string): T[] => {
    const sortedPosts: T[] = useMemo((): T[] => {
        if (sort) {
            return sort !== 'date'
                ? [...posts].sort((a: T, b: T): number => a[sort].localeCompare(b[sort])) //text sort
                : [...posts].sort((a: T, b: T): number => dateSort(a[sort], b[sort]))   //sort by date
        }
        return posts
    }, [sort, posts])

    return sortedPosts;
}

export const usePosts = <T extends post>(posts: T[], sort: string, query: string): T[] => {
    const sortedPosts: T[] = useSortedPosts(posts, sort)

    const sortedSearchedPosts: T[] = useMemo((): T[] => {
        return sortedPosts.filter((post: T):boolean => post.title.toLowerCase().includes(query.toLowerCase())) //search post by title
    }, [query, sortedPosts])

    return sortedSearchedPosts;
}


//sort two arrays with date components: [Year, Month, Day, Hours, Minutes]
function dateSort(a: string[], b: string[]): number {
    let result:number = 0;
    for (let i = a.length - 1; i >= 0; i--) {
        if (a[i] === b[i] && i !== a.length - 1) continue;
        result = new Intl.Collator().compare(a[i], b[i]);
    }
    return result
}