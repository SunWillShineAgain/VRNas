import React from 'react'
import './Accordion.scss'
import AccordionItem from './AccordionItem'

/**
 * @param {Object[]} data
 * @param {string} data[].title - Accordion title.
 * @param {string} data[].text - Accordion text.
 */
const Accordion = ({ data }) => {
	return (
		<div className='accordion'>
			{data.map((item, i) => (
				<AccordionItem key={i} item={item} />
			))}
		</div>
	)
}

export default Accordion
