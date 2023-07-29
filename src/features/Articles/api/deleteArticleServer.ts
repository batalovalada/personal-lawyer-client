export async function deleteArticleServer(postId: number) {
    await fetch(`/posts?id=${postId}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        }
    })
        .catch(err => console.log(err))
}