import React from 'react'
import './PricingList.scss'
import PricingListItem from './PricingListItem'

const PricingList = ({ data }) => {
	return (
		<div className='pricing__list'>
			{data.map((item, i) => {
				return <PricingListItem key={i} item={item} />
			})}
		</div>
	)
}

export default PricingList
