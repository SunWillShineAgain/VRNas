import React from 'react'
import './FAQList.scss'
import FAQListItem from './FAQListItem'

const FAQList = ({ data }) => {
	return (
		<div className='faq__list'>
			{data.map((item, i) => {
				return <FAQListItem key={i} item={item} />
			})}
		</div>
	)
}

export default FAQList
