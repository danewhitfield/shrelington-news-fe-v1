import React from 'react'
import { useState, useEffect } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import SingleArticle from './SingleArticle'

function Articles({currentArticle, setCurrentArticle}) {
    const [articles, setArticles] = useState([])

    useEffect(() => {
        fetch('https://shrelington-news.herokuapp.com/api/articles')
            .then((res) => res.json())
            .then((res) => {
                setArticles(res)
            })
    }, [])

    const handleClick = (article_id) => {
        setCurrentArticle(article_id)
    }

  if(articles) return (
    <div className="articles">
        <h1 className='articles-title'>Articles</h1>
            <div className='articles-container'>
                {articles.map(article => {
                    return (
                        <div>
                            <ul className='articles-list'>
                                        <li className='articles-li' key={article.article_id}>
                                            <button className='article-btn' onMouseOver={() => handleClick(article.article_id)} >
                                                <Link to={`/articles/${currentArticle}`}>
                                                    <h3 key={article.title} value='title'>{article.title}</h3>
                                                    <p value='author'>{article.author}</p>
                                                    <p value='topic'>{article.topic}</p>
                                                    <p value='votes'>{article.votes}</p>
                                                    <p value='comment_count'>{article.comment_count}</p>
                                                </Link>
                                            </button>
                                        </li>
                            </ul>
                        </div>
                    )
                })}
            </div>
    </div>
  )
}

export default Articles