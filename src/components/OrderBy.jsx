import React from 'react'
import { Link } from 'react-router-dom'
import {BsPersonFill} from 'react-icons/bs'
import {MdCategory} from 'react-icons/md'
import {AiFillHeart} from 'react-icons/ai'
import {FaComment} from 'react-icons/fa'

const OrderBy = ({orderBy, articles, sortBy}) => {

  if(orderBy === 'ASC' && sortBy === 'comment_count') {
    articles.sort((a, b) => a.comment_count - b.comment_count)
  } else if (orderBy === 'DESC' && sortBy === 'comment_count') {
    articles.sort((a, b) => b.comment_count - a.comment_count)
  }

  if(orderBy === 'ASC' && sortBy === 'votes') {
    articles.sort((a, b) => a.votes - b.votes)
  } else if (orderBy === 'DESC' && sortBy === 'votes') {
    articles.sort((a, b) => b.votes - a.votes)
  }

  return (
    <div className='articles-container'>
                {articles.map(article => {
                        return (
                            <ul key={article.article_id} className='articles-list'>
                              <li className='articles-li' key={article.article_id}>
                                  <button className='article-btn'>
                                      <Link to={`/articles/${article.article_id}`}>
                                          <h3 value='title'>{article.title}</h3>
                                          <p><BsPersonFill/> {article.author}</p>
                                          <p><MdCategory/> {article.topic}</p>
                                          <p><AiFillHeart/> {article.votes}</p>
                                          <p><FaComment/> {article.comment_count}</p>
                                      </Link>
                                  </button>
                              </li>
                            </ul>
                        )}
                )}
            </div>
  )
}

export default OrderBy