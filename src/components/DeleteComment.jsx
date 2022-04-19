import React from 'react'

const DeleteComment = ({comment_id, comments, setComments}) => {

    const handleDelete = (e) => {
        e.preventDefault()
        setComments(currComments => {
            const currentComment = comments.filter(comment => comment.comment_id === comment_id)
            const updatedComments = [...currComments]
            return updatedComments.filter(comment => comment.comment_id !== currentComment[0].comment_id)
        })
        fetch(`https://shrelington-news.herokuapp.com/api/comments/${comment_id}`, {
            method: 'DELETE',
            headers: {'Content-Type': 'application/json'}
        })
    }

  return (
    <button className='delete-btn' onClick={(e) => handleDelete(e, comment_id, comments)}>remove comment</button>
  )
}

export default DeleteComment