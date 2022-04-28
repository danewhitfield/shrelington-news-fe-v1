import axios from 'axios'

const newsApi = axios.create({
    baseURL: 'https://shrelington-news.herokuapp.com/api'
})

export const getArticles = () => {
    return newsApi.get('/articles').then(({data}) => {
        return data
    })
}

export const getTopics = () => {
    return newsApi.get('/topics').then(({data}) => {
        return data
    })
}

// export const deleteComment = (comment_id) => {
//     return newsApi.delete(`/comments/${comment_id}`).then(() => {
//         return
//     })
// }