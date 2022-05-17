import React from 'react'
import {BsPersonFill} from 'react-icons/bs'
import {MdCategory} from 'react-icons/md'
import {AiFillHeart} from 'react-icons/ai'
import {FaComment} from 'react-icons/fa'
import '../Topics.css'
import { useParams } from 'react-router-dom'

const SingleTopic = ({articles}) => {
  const {slug} = useParams()
  const filterTopics = articles.filter(article => article.topic === slug)

  return (
    <div className='topics-container'>
        <h1 className='topic-title'>{slug}</h1>
        <ul className='topic-articles-list'>
            {filterTopics.map(article => {
                return ( 
                <li className='articles-li' key={article.article_id}>
                    <h3 key={article.title} value='title'>{article.title}</h3>
                    <p><BsPersonFill/> {article.author}</p>
                    <p><MdCategory/> {article.topic}</p>
                    <p><AiFillHeart/> {article.votes}</p>
                    <p><FaComment/> {article.comment_count}</p>
                </li>
                )
            })}
        </ul>
    </div>
  )
}

export default SingleTopic