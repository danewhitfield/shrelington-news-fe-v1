import { TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'

const PostComment = ({user, setComments, article_id}) => {
    const defaultComment = {
    body: "",
    username: user.username,
  }

  const [newComment, setNewComment] = useState(defaultComment)
  const [isError, setIsError] = useState(false)

  const handleChange = (e) => {
    const value = e.target.value
    setNewComment(currComment => {
      const updatedComment = {...currComment}
      updatedComment[e.target.name] = value
      return updatedComment
    });
  }

  const handleClick = (e) => {
    // e.preventDefault();
    const itemBody = {...newComment}
    // delete itemBody['comment_id']
    fetch(`https://shrelington-news.herokuapp.com/api/articles/${article_id}/comments`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(itemBody)
    })

    setComments((currComments) => {
      const addComment = [...currComments, newComment];
      return addComment;
    })
    .catch((err) => {
      setIsError(true)
      setComments(currComments => {
        const newComments = [...currComments]
        newComments.pop()
        return newComments
      })
    })
    setNewComment()
  }

  return (
    <div className='post-comment'>
            <h3 className='post-comment-title'>Post a comment</h3>
            <div className='post-comment-container'>
                <textarea className='post-comment-input' name='body' type="textarea" onChange={(e) => handleChange(e)} />
                {/* <TextField
          id="outlined-textarea post-comment-input"
          label="Post a comment"
          fullWidth={true}
          placeholder="Share your thoughts about this article!"
          onChange={handleChange}
          multiline
        /> */}
                <button className='post-comment-btn' onClick={(e) => handleClick(e)}>POST</button>
            </div>
        { isError && <p className="err-msg">Something went wrong :(</p> }
    </div>
  )
}

export default PostComment