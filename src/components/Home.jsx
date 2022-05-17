import React from 'react'
import '../Home.css'
import LoadingSpinner from './LoadingSpinner'

function Home({user, articles, isLoading}) {

  const homeArticles = articles.filter((article, i) => i < 7 && article)

  const firstname = /^\w+/gm
  return (
    <div className='home-container'>
      <h1 className='home-welcome-user'><span className="wave-emoji">👋</span> <br /> Welcome back {user.name.match(firstname)}</h1>
      <h2 className='home-subtitle'>Check out some of these suggested Articles</h2>

      <div className="articles-container">
        <ul className='home-articles-list'>
          {homeArticles.map(article => {
            return (
              <li key={article.title} className='articles-li'>
                <h3>{article.title}</h3>
              </li>
            )
          })}
        </ul>
      </div>

      {isLoading && <LoadingSpinner />}
    </div>
  )
}

export default Home