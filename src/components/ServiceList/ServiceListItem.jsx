import React from 'react'
import Button from '../Button/Button'

const ServiceListItem = ({ item }) => {
	return (
		<div className='service__list-item'>
			<img src={item.iconPath} alt='icon' />
			<div className='service__list-item-title'>{item.title}</div>
			<div className='service__list-item-text'>{item.text}</div>
			<div className='service__list-item_hidden'>
				<a onClick={e => e.preventDefault()} href='#'>
					<Button text='Learn more' variant='bold' />
				</a>
			</div>
		</div>
	)
}

export default ServiceListItem
