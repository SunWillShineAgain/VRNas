import React from 'react'
import './PagePricingList.scss'
import Button from '../Button/Button'
import CheckIcon from '../../assets/Icons/CheckIcon'

const PagePricingList = ({ data }) => {
	return (
		<div className='page-pricing-list'>
			{data.map((item, i) => {
				return <PagePricingListItem key={i} item={item} />
			})}
		</div>
	)
}

const PagePricingListItem = ({ item }) => {
	return (
		<div className='page-pricing-list__item'>
			<div className='page-pricing-list__item-name'>{item.name}</div>
			<div className='page-pricing-list__item-price'>
				{`$${item.price}`}
				<span>/ month</span>
			</div>
			<div className='page-pricing-list__item-description'>
				{item.description}
			</div>
			<ul className='page-pricing-list__item-benefits'>
				{item.benefits.map((benefit, i) => {
					return (
						<li key={i} className='page-pricing-list__item-benefit'>
							<div className='icon'>
								<CheckIcon />
							</div>
							{benefit}
						</li>
					)
				})}
			</ul>
			<Button text={item.buttonText} variant='bold' />
		</div>
	)
}

export default PagePricingList
