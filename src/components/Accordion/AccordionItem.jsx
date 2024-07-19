import { useState } from 'react'
import CaretIcon from '../../assets/Icons/CaretIcon'

const AccordionItem = ({ item }) => {
	const [active, setActive] = useState(false)

	return (
		<div className={`accordion__item ${active ? 'active' : ''}`}>
			<div className='accordion__item-title' onClick={() => setActive(!active)}>
				{item.title}
				<CaretIcon />
			</div>
			<div className='accordion__item-text'>
				<p>{item.text}</p>
			</div>
		</div>
	)
}

export default AccordionItem
