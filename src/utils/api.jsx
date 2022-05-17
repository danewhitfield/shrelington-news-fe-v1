import axios from 'axios'

const newsApi = axios.create({
    baseURL: 'https://shrelington-news.herokuapp.com/api'
})

export const getArticles = () => {
    return newsApi.get('/articles').then(({data}) => {
        return data
    })
}

export const getArticle = (article_id) => {
    return newsApi.get(`/articles/${article_id}`).then(({data}) => {
        return data
    })
}

export const getUsers = () => {
    return newsApi.get(`/users`).then(({data}) => {
        return data
    })
}

export const getTopics = () => {
    return newsApi.get('/topics').then(({data}) => {
        return data
    })
}

export const getComments = (article_id) => {
    return newsApi.get(`/articles/${article_id}/comments`).then(({data}) => {
        return data
    })
}

export const patchLikes = (article_id) => {
    return newsApi.patch(`/articles/${article_id}`, 
    {inc_votes: 1}, 
    {headers: {'Content-Type': 'application/json'}}).then(({data}) => {
        return data
    })
}