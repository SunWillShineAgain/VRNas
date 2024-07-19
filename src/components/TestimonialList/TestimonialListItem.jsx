import React, { useRef } from 'react'

const TestimonialListItem = ({ item, id, activeItem, setActiveItem }) => {
	const ref = useRef()

	const clickHandler = id => {
		setActiveItem(id)

		ref.current.classList.contains('active')
			? ref.current.classList.remove('active')
			: ref.current.classList.add('active')
	}

	return (
		<div
			ref={ref}
			onClick={() => clickHandler(id)}
			className={`testimonial__list-item ${id === activeItem ? 'active' : ''}`}
		>
			<div className='testimonial__list-item-img'>
				<img src={item.image} alt='' />
			</div>
			<div
				onClick={e => e.stopPropagation()}
				className={`testimonial__list-item-desc-wrap ${
					id === activeItem ? 'active' : ''
				}`}
			>
				<div className='testimonial__list-item-desc'>
					<div className='testimonial__list-item-desc-text'>{item.text}</div>
					<div className='testimonial__list-item-desc-caption'>
						<span>{item.caption}</span> - {item.role}
					</div>
				</div>
			</div>
		</div>
	)
}

export default TestimonialListItem
