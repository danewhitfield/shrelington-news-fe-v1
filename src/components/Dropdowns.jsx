import React from 'react'

const Dropdowns = ({handleOrderBy, handleSortBy, handleFilterTopics}) => {
  return (
    <div className="dropdowns">
            <div>
                <p className='filter-titles'>Order By</p>
                <select name="order-by" id="filter" onChange={e => {handleOrderBy(e)}}>
                    <option value="DESC">Descending</option>
                    <option value="ASC">Ascending</option>
                </select>
            </div>
            <div>
                <p className='filter-titles'>Sort By</p>
                <select name="sort-by" id="filter" onChange={e => {handleSortBy(e)}}>
                    <option value="none">~None</option>
                    <option value="comment_count">Comment Count</option>
                    <option value="created_at">Date</option>
                    <option value="votes">Votes</option>
                </select>
            </div>
            <div>
                <p className='filter-titles'>Filter Topics</p>
                <select name="filter-topics" id="filter" onChange={e => {handleFilterTopics(e)}}>
                    <option className='filter-option' value="all">All</option>
                    <option className='filter-option' value="cooking">Cooking</option>
                    <option className='filter-option' value="football">Football</option>
                    <option className='filter-option' value="coding">Coding</option>
                </select>
            </div>
        </div>
  )
}

export default Dropdowns