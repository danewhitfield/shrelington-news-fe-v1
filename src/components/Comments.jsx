import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../Comments.css'
import DeleteComment from './DeleteComment'
import PostComment from './PostComment'
import stockUserAvatar from '../images/placeholder.jpg'

const Comments = ({comments, setComments, article_id, user}) => {
    console.log(comments.filter(comment => comment.author === user.username))
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

            <PostComment user={user} setComments={setComments} article_id={article_id}/>

        </ul>
    </div>
  )
}

export default Comments