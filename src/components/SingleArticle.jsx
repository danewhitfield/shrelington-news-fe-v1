import React, { useEffect, useState } from 'react'
import '../SingleArticle.css'

const SingleArticle = ({currentArticle, article}) => {
  if (article) return (
    <div className='article-container'>
        <div className="article-card">
          <div className="article-desc">
            <h1 className='article-title'>{article.article.title}</h1>
            <p className='article-body'>{article.article.body}</p>
          </div>
          <div className="article-info">
            <p className='article-votes info-box'>Votes: <span className="article-link">{article.article.votes}</span></p>
            <p>|</p>
            <p className='article-comment_count info-box'>Comments: <span className="article-link">{article.article.comment_count}</span></p>
            <p>|</p>
            <p className='article-topic info-box'>Topic: <span className="article-link">{article.article.topic}</span></p>
          </div>
        </div>
    </div>
  )
}

export default SingleArticle