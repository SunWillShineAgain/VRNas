import React, { useState } from 'react'
import './TestimonialList.scss'
import TestimonialListItem from './TestimonialListItem'

const TestimonialList = ({ data }) => {
	let [activeItem, setActiveItem] = useState(null)

	return (
		<div className='testimonial__list'>
			{data.map((item, i) => {
				return (
					<TestimonialListItem
						item={item}
						key={i}
						id={i}
						activeItem={activeItem}
						setActiveItem={setActiveItem}
					/>
				)
			})}
		</div>
	)
}

export default TestimonialList
