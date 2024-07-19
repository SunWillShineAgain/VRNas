import React from 'react'
import Button from '../Button/Button'
import Tag from '../Tag/Tag'
import ArrowNextIcon from '../../assets/Icons/ArrowNextIcon'

const ArticleListItem = ({ item }) => {
	return (
		<div className='article__list-item'>
			<div className='article__list-item-image'>
				<img src={item.image} alt='' />
			</div>
			<div className='article__list-item-body'>
				<Tag text={item.tag} />
				<div className='article__list-item-title'>
					<a onClick={e => e.preventDefault()} href='#'>
						{item.title}
					</a>
				</div>
			</div>
			<a href='#' className='arrow-link' onClick={e => e.preventDefault()}>
				<ArrowNextIcon />
			</a>
		</div>
	)
}

export default ArticleListItem
