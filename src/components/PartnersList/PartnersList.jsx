import React from 'react'
import './PartnersList.scss'

const PartnersList = () => {
	return (
		<div className='partners__list'>
			{[1, 2, 3, 4, 5, 6, 7].map((item, i) => {
				return (
					<div className='partners__list-item' key={i}>
						<img src={`icons/partners-${item}.png`} alt='' />
					</div>
				)
			})}
		</div>
	)
}

export default PartnersList
