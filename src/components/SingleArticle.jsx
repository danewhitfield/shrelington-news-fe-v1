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
            <p className='article-votes info-box'>Votes: {article.article.votes}</p>
            <p>|</p>
            <p className='article-comment_count info-box'>Comments: {article.article.comment_count}</p>
            <p>|</p>
            <p className='article-topic info-box'>Topic: {article.article.topic}</p>
          </div>
        </div>
    </div>
  )
}

export default SingleArticle