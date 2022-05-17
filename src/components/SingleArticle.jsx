import React, { useEffect, useState } from 'react'
import {AiFillHeart} from 'react-icons/ai'
import {FaComment} from 'react-icons/fa'
import { useParams } from 'react-router-dom'
import '../SingleArticle.css'
import { getArticle, patchLikes } from '../utils/api'
import Comments from './Comments'
import LoadingSpinner from './LoadingSpinner'

const SingleArticle = ({user}) => {
  const [optomisticVotes, setOptomisticVotes] = useState(0)
  const [cls, setCls] = useState('heart-icon')
  const [showComments, setShowComments] = useState(false)
  const [article, setArticle] = useState({})
  const [isLoading, setIsLoading] = useState(false)

  const {article_id} = useParams()

  // VOTES
  const incVoteCount = () => {
    setOptomisticVotes(currVotes => currVotes + 1)
    article.votes += 1
    setCls('heart-icon-clicked')
    patchLikes(article_id)
  }

  // ARTICLE
  useEffect(() => {
    setIsLoading(true)
    getArticle(article_id).then(res => {
      setArticle(res.article)
      setIsLoading(false)
    })
  }, [])

  const addComment = () => {
    setShowComments(true)
  }

  if (article) return (
    <div className='article-container'>
        <div className="article-card">
          <div className="article-desc">
            <h1 className='article-title'>{article.title}</h1>
            <p className='article-body'>{article.body}</p>
          </div>
          <div className="article-info">
            <button className='vote-btn' onClick={incVoteCount} disabled={optomisticVotes > 0}>
              <p className={cls}><AiFillHeart className='heart-icon'/><span className="article-link">{article.votes}</span></p>
            </button>
            <p>|</p>
            <button className='comments-btn' onClick={addComment}>
              <p className='article-comment_count'><FaComment className='comment-icon'/><span className="article-link">{article.comment_count}</span></p>
            </button>
            <p>|</p>
            <p className='article-topic info-box'>Topic: <span className="article-link">{article.topic}</span></p>
          </div>
        </div>

        {showComments && (
          <Comments article_id={article_id} user={user} />
        )}

        {isLoading && <LoadingSpinner />}
    </div>
  )
}

export default SingleArticle