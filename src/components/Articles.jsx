import React, { useState } from 'react'
import Dropdowns from './Dropdowns'
import FilterTopics from './FilterTopics'
import OrderBy from './OrderBy'
import SortBy from './SortBy'

function Articles({articles}) {
    const [orderBy, setOrderBy] = useState('descending')
    const [sortBy, setSortBy] = useState('comment_count')
    const [filterTopics, setFilterTopics] = useState('all')

    const handleOrderBy = (e) => {
        const value = e.target.value
        setOrderBy(value)
    }

    const handleSortBy = (e) => {
        const value = e.target.value
        setSortBy(value)
    }

    const handleFilterTopics = (e) => {
        const value = e.target.value
        setFilterTopics(value)
    }

  if(articles) return (
    <div className="articles">
        <h1 className='articles-title'>Articles</h1>
        <Dropdowns handleOrderBy={handleOrderBy} handleSortBy={handleSortBy} handleFilterTopics={handleFilterTopics} />
        {/* <OrderBy handleOrderBy={handleOrderBy} setOrderBy={setOrderBy} /> */}
        <SortBy handleSortBy={handleSortBy} sortBy={sortBy} articles={articles} />
        <FilterTopics articles={articles} filterTopics={filterTopics}/>
    </div>
  )
}

export default Articles