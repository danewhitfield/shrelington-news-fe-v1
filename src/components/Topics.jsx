import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../Topics.css'

const Topics = ({currentTopic, setCurrentTopic}) => {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    fetch("https://shrelington-news.herokuapp.com/api/topics")
      .then((res) => res.json())
      .then((res) => {
        setTopics(res);
      });
  }, []);

    const handleClick = (slug) => {
        setCurrentTopic(slug)
    }

  return (
    <div>
        <h1 className='topic-title'>Topics</h1>
        <div className="topic-container">
            <div className='topic-list'>
                {topics.map(topic => {
                    return (
                        <button className='topics-btn' onClick={() => handleClick(topic.slug)}>
                            <Link to={`/topics/${topic.slug}`}>
                                <div className='topics'>
                                    <h3>Topic: {topic.slug}</h3>
                                    <h5>{topic.description}</h5>
                                </div>
                            </Link>
                        </button>
                    )
                })}
            </div>
        </div>
    </div>
  )
}

export default Topics