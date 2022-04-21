import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../Topics.css'
import { getTopics } from '../utils/api';

const Topics = ({setCurrentTopic}) => {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    getTopics().then(topicsResults => {
      setTopics(topicsResults)
    })
  }, []);

  return (
    <div className='topic-container'>
        <h1 className='topic-title'>Topics</h1>
            <ul className='topic-list'>
                {topics.map(topic => {
                    return (
                            <Link className='topics' to={`/topics/${topic.slug}`}>
                                    <h3>Topic: {topic.slug}</h3>
                                    <h5>{topic.description}</h5>
                            </Link>
                    )
                })}
            </ul>
    </div>
  )
}

export default Topics