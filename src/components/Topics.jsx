import React, { useEffect, useState } from 'react'
import '../Topics.css'

const Topics = () => {
    const [topics, setTopics] = useState([])
    const [currentTopic, setCurrentTopic] = useState()

    useEffect(() => {
        fetch('https://shrelington-news.herokuapp.com/api/topics').then((res) => res.json()).then((res) => {
            setTopics(res)
        })
    }, [])

  return (
    <div>
        <h1 className='topic-title'>Topics</h1>
        <div className="topic-container">
            <div className='topic-list'>
                {topics.map(topic => {
                    return (
                        <div className='topics'>
                            <h3>Topic: {topic.slug}</h3>
                            <h5>{topic.description}</h5>
                        </div>
                    )
                })}
            </div>
        </div>
    </div>
  )
}

export default Topics