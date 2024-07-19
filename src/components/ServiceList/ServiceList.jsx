import React from 'react'
import ServiceListItem from './ServiceListItem'
import './ServiceList.scss'

const ServiceList = ({ data }) => {
	return (
		<div className='service__list-row'>
			{data.map((item, i) => {
				return <ServiceListItem key={i} item={item} />
			})}
		</div>
	)
}

export default ServiceList
