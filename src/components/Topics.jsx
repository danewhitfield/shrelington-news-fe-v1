import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../Topics.css'
import { getTopics } from '../utils/api';
import LoadingSpinner from './LoadingSpinner'

const Topics = ({setCurrentTopic}) => {
  const [topics, setTopics] = useState([]);
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    getTopics().then(topicsResults => {
      setTopics(topicsResults)
      setIsLoading(false)
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

            {isLoading && <LoadingSpinner />}
    </div>
  )
}

export default Topics