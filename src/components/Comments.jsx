import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../Comments.css'
import DeleteComment from './DeleteComment'
import PostComment from './PostComment'
import stockUserAvatar from '../images/placeholder.jpg'

const Comments = ({params, user}) => {
  const [comments, setComments] = useState([])

    // COMMENTS
  useEffect(() => {
    fetch(`https://shrelington-news.herokuapp.com/api/articles/${params.article_id}/comments`)
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
                            <div><Link to='/users/profile'><img className='comment-avatar' src={comment.author === user.username ? user.avatar_url : stockUserAvatar} alt="user avatar" /></Link></div>
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

            <PostComment user={user} setComments={setComments} params={params}/>

        </ul>
    </div>
  )
}

export default Comments