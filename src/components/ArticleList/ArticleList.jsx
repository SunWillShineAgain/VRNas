import React from 'react'
import './ArticleList.scss'
import ArticleListItem from './ArticleListItem'

const ArticleList = ({ data }) => {
	return (
		<div className='article__list-wrap'>
			<div className='article__list'>
				{data.map((item, i) => {
					return <ArticleListItem key={i} item={item} />
				})}
			</div>
		</div>
	)
}

export default ArticleList
