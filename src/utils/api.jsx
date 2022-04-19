import axios from 'axios'

const newsApi = axios.create({
    baseURL: 'https://shrelington-news.herokuapp.com/api'
})

export const getArticles = () => {
    return newsApi.get('/articles').then(({data}) => {
        console.log('data:', data)
        return data
    })
}

export const getCurrentArticle = (article_id) => {
    return newsApi.get('/articles', {
        params: {
            article_id
        }
    }).then(({data}) => {
        return data
    })
}