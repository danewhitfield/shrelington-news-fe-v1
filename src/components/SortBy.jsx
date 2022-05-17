import React from 'react'
import {BsPersonFill} from 'react-icons/bs'
import {MdCategory} from 'react-icons/md'
import {AiFillHeart} from 'react-icons/ai'
import {FaComment} from 'react-icons/fa'
import { Link } from 'react-router-dom'

const SortBy = ({articles, sortBy}) => {

    if(sortBy === 'comment_count') {
        articles.sort((a, b) => b.comment_count - a.comment_count)
    } else if (sortBy === 'votes') {
        articles.sort((a, b) => b.votes - a.votes)
    } else if (sortBy === 'created_at') {
        articles.sort((a, b) => b.created_at - a.created_at)
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

export default SortBy