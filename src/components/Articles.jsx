import React, { useState } from 'react'
import Dropdowns from './Dropdowns'
import OrderBy from './OrderBy'
import SortBy from './SortBy'

function Articles({articles}) {
    const [orderBy, setOrderBy] = useState('descending')
    const [sortBy, setSortBy] = useState('comment_count')

    const handleOrderBy = (e) => {
        const value = e.target.value
        setOrderBy(value)
    }

    const handleSortBy = (e) => {
        const value = e.target.value
        setSortBy(value)
    }

  if(articles) return (
    <div className="articles">
        <h1 className='articles-title'>Articles</h1>
        <Dropdowns handleOrderBy={handleOrderBy} handleSortBy={handleSortBy} />
        <OrderBy handleOrderBy={handleOrderBy} setOrderBy={setOrderBy} orderBy={orderBy} sortBy={sortBy} articles={articles} />
        <SortBy handleSortBy={handleSortBy} sortBy={sortBy} articles={articles} />
    </div>
  )
}

export default Articles