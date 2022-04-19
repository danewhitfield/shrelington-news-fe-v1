import React from 'react'
import {BsPersonFill} from 'react-icons/bs'
import {MdCategory} from 'react-icons/md'
import {AiFillHeart} from 'react-icons/ai'
import {FaComment} from 'react-icons/fa'
import { useState, useEffect } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import SingleArticle from './SingleArticle'
import { getArticles } from '../utils/api'

function Articles({currentArticle, setCurrentArticle}) {
    const [sort_by, setSort_by] = useState()
    const [articles, setArticles] = useState([]);
    const [err, setErr] = useState(null);

    useEffect(() => {
    getArticles().then(res => {
        setArticles(res)
    })
  }, []);

    const handleClick = (article_id) => {
        setCurrentArticle(article_id)
    }

    const handleSortBy = (e) => {
        const value = e.target.value
        setSort_by(value)
    }

    if(err) return <p>ERROR!!!!</p>
  if(articles) return (
    <div className="articles">
        <h1 className='articles-title'>Articles</h1>
            <div className='articles-container'>
                {/* IMPLEMENT THESE DROP DOWNS FOR FILTERING */}
                {/* <div className="drop-downs">
                    <select onChange={(e) => handleSortBy(e)} name="sort_by" id="sort_by">
                        <option value="votes">Votes</option>
                        <option value="votes">Votes</option>
                        <option value="votes">Votes</option>
                    </select>
                </div> */}
                {/* COME BACK TO IMPLEMENT SORT FUNCTIONALITY HERE */}
                {articles.map(article => {
                    return (
                        <div>
                            <ul className='articles-list'>
                                        <li className='articles-li' key={article.article_id}>
                                            <button className='article-btn' onMouseOver={() => handleClick(article.article_id)} >
                                                <Link to={`/articles/${currentArticle}`}>
                                                    <h3 key={article.title} value='title'>{article.title}</h3>
                                                    <p><BsPersonFill/> {article.author}</p>
                                                    <p><MdCategory/> {article.topic}</p>
                                                    <p><AiFillHeart/> {article.votes}</p>
                                                    <p><FaComment/> {article.comment_count}</p>
                                                </Link>
                                            </button>
                                        </li>
                            </ul>
                        </div>
                    )
                })}
            </div>
    </div>
  )
}

export default Articles