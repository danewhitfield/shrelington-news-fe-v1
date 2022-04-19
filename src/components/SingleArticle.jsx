import React, { useEffect, useState } from 'react'
import {AiFillHeart} from 'react-icons/ai'
import {FaComment} from 'react-icons/fa'
import '../SingleArticle.css'
import Comments from './Comments'

const SingleArticle = ({currentArticle, article, user}) => {
  const [optomisticVotes, setOptomisticVotes] = useState(0)
  const [cls, setCls] = useState('heart-icon')
  const [isComments, setIsComments] = useState(false)
  const [comments, setComments] = useState([])
  const article_id = article.article.article_id

  // const [currentArticle, setCurrentArticle] = useState(1);
  // const [article, setArticle] = useState({});

  // useEffect(() => {
  //   getCurrentArticle(article_id).then(res => {
  //     setArticle(res)
  //   })
  //   // fetch(
  //   //   `https://shrelington-news.herokuapp.com/api/articles/${currentArticle}`
  //   // )
  //   //   .then((res) => res.json())
  //   //   .then((res) => {
  //   //     setArticle(res);
  //   //   });
  // }, [currentArticle]);

  // VOTES
  const incVoteCount = () => {
    setOptomisticVotes(currVotes => currVotes + 1)
    article.article.votes += 1
    setCls('heart-icon-clicked')
    fetch(`https://shrelington-news.herokuapp.com/api/articles/${article_id}`, {
      method: 'PATCH',
      body: JSON.stringify({inc_votes: 1}),
      headers: {'Content-Type': 'application/json'}
    })
  }

  // COMMENTS
  useEffect(() => {
    fetch(`https://shrelington-news.herokuapp.com/api/articles/${article_id}/comments`)
      .then(res => res.json())
      .then(res => {
        setComments(res.comments)
      })
  }, [])

  const addComment = () => {
    setIsComments(true)
  }

  if (article) return (
    <div className='article-container'>
        <div className="article-card">
          <div className="article-desc">
            <h1 className='article-title'>{article.article.title}</h1>
            <p className='article-body'>{article.article.body}</p>
          </div>
          <div className="article-info">
            <button className='vote-btn' onClick={incVoteCount} disabled={optomisticVotes > 0}>
              <p className={cls}><AiFillHeart className='heart-icon'/><span className="article-link">{article.article.votes}</span></p>
            </button>
            <p>|</p>
            <button className='comments-btn' onClick={addComment}>
              <p className='article-comment_count'><FaComment className='comment-icon'/><span className="article-link">{article.article.comment_count}</span></p>
            </button>
            <p>|</p>
            <p className='article-topic info-box'>Topic: <span className="article-link">{article.article.topic}</span></p>
          </div>
        </div>

        {isComments && (
          <Comments setComments={setComments} comments={comments} article_id={article_id} user={user} />
        )}
    </div>
  )
}

export default SingleArticle