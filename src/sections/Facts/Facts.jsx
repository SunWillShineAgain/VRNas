import React from 'react'
import './Facts.scss'

const Facts = ({ data }) => {
	return (
		<section className='facts gradient-bg'>
			{data.map((item, i) => {
				return <Fact key={i} item={item}></Fact>
			})}
		</section>
	)
}

const Fact = ({ item }) => {
	return (
		<div className='facts__item'>
			<div className='gradient-caption'>{item.text}</div>
			<div className='facts__value'>{item.value}</div>
		</div>
	)
}

export default Facts
