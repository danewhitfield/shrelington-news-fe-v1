import React from 'react'
import { useState, useEffect } from 'react'

function Articles() {
    const [articles, setArticles] = useState([])

    useEffect(() => {
        fetch('https://shrelington-news.herokuapp.com/api/articles').then((res) => res.json()).then((res) => {
            setArticles(res)
        })
    }, [])

  if(articles) return (
    <div className="articles">
        <h1 className='articles-title'>Articles</h1>
            <div className='articles-container'>
                {articles.map(article => {
                    return (
                        <ul className='articles-list'>
                            <li className='articles-li' key={article.article_id}>
                                <h3>{article.title}</h3>
                                <p>{article.author}</p>
                                <p>{article.topic}</p>
                                <p>{article.votes}</p>
                                <p>{article.comment_count}</p>
                            </li>
                        </ul>
                    )
                })}
            </div>
    </div>
  )
}

export default Articles