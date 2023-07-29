import { IArticles } from "../../../shared/types/IArticles"

export async function postArticleServer(newPost: IArticles) {
    await fetch('/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(newPost)
    })
        .catch(err => console.log(err))
}