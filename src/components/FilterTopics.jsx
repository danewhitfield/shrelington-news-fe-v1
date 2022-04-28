import React from 'react'
import {BsPersonFill} from 'react-icons/bs'
import {MdCategory} from 'react-icons/md'
import {AiFillHeart} from 'react-icons/ai'
import {FaComment} from 'react-icons/fa'
import { Link } from 'react-router-dom'

const FilterTopics = ({articles, filterTopics}) => {
  return (
    <div className='articles-container'>
                {articles.map(article => {
                    if(filterTopics === 'all') {
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
                    )} else if(article.topic === filterTopics) {
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
                        )
                    }
                }
                )}
            </div>
  )
}

export default FilterTopics