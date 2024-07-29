import React, { useState } from 'react'
import CaretIcon from '../../assets/Icons/CaretIcon'

const FAQListItem = ({ item }) => {
	const [active, setActive] = useState(false)

	return (
		<div className={`faq__list-item ${active ? 'active' : ''}`}>
			<div className='faq__list-item-title' onClick={() => setActive(!active)}>
				{item.q}
				<CaretIcon />
			</div>
			<div className='faq__list-item-text'>
				<p>{item.a}</p>
			</div>
		</div>
	)
}

export default FAQListItem
