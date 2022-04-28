import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../Comments.css'
import DeleteComment from './DeleteComment'
import PostComment from './PostComment'
import stockUserAvatar from '../images/placeholder.jpg'
import Moment from 'react-moment'

const Comments = ({article_id, user}) => {
  const [comments, setComments] = useState([])

    // COMMENTS
  useEffect(() => {
    fetch(`https://shrelington-news.herokuapp.com/api/articles/${article_id}/comments`)
      .then(res => res.json())
      .then(res => {
          console.log('res:', res)
        setComments(res.comments)
      })
  }, [])

  return (
    <div className='comments-container'>
        <ul className='comments-list'>
        <h2 className='comments-title'>Comments</h2>
            {comments && comments.map(comment => {
                return (
                    <li key={comment.comment_id} className='single-comment'>
                        <div className="comment-body-wrapper">
                            <div className='comment-avatar-time'>
                              <Link to={`/users/${user.username}`}>
                                <img className='comment-avatar' src={comment.author === user.username ? user.avatar_url : stockUserAvatar} alt="user avatar" />
                              </Link>
                              <Moment className='comment-date' format="YYYY/MM/DD HH:mm">
                                {comment.created_at}
                              </Moment>
                            </div>
                            <div>
                                <p className='comment-body'>{comment.body}</p>
                                <p className='comment-author'>{comment.author}</p>
                            </div>
                        </div>
                        {comment.author === user.username && (
                            <div className="delete-comment-wrapper">
                                <DeleteComment setComments={setComments} comments={comments} comment_id={comment.comment_id}/>
                            </div>
                        )}
                    </li>
                )
            })}

            <PostComment user={user} setComments={setComments} article_id={article_id}/>

        </ul>
    </div>
  )
}

export default Comments