import React from 'react'

const PricingListItem = ({ item }) => {
	return (
		<div className='pricing__list-item'>
			<div className='pricing__list-item-icon'>
				<img src='icons/pricing.png' alt='' />
			</div>
			<div className='pricing__list-item-text'>
				<div className='pricing__list-item-title'>{item.title}</div>
				<div className='pricing__list-item-descr'>{item.text}</div>
			</div>
		</div>
	)
}

export default PricingListItem
