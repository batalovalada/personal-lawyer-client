import { useMemo } from "react";

export const useSortedPosts = (posts, sort) => {
    const sortedPosts = useMemo(() => {
        if (sort) {
            return sort !== 'date'
                ? [...posts].sort((a, b) => a[sort].localeCompare(b[sort]))
                : [...posts].sort((a, b) => dateSort(a[sort], b[sort]))
        }
        return posts
    }, [sort, posts])

    return sortedPosts;
}

export const usePosts = (posts, sort, query) => {
    const sortedPosts = useSortedPosts(posts, sort)

    const sortedSearchedPosts = useMemo(() => {
        return sortedPosts.filter(post => post.title.toLowerCase().includes(query.toLowerCase()))
    }, [query, sortedPosts])

    return sortedSearchedPosts;
}


//sort two arrays with date components: [Year, Month, Day, Hours, Minutes]
function dateSort(a, b) {
    let result;
    for (let i = a.length - 1; i >= 0; i--) {
        if (a[i] === b[i] && i !== a.length - 1) continue;
        result = new Intl.Collator().compare(a[i], b[i]);
    }
    return result
}