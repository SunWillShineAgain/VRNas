import React from 'react'
import './RoundGradientIcon.scss'

/**
 * @param {string} icon - icon component
 * @param {string} size - icon's size
 */
const RoundGradientIcon = ({ icon, size }) => {
	return (
		<div
			className='round-gradient__social-item'
			style={{ width: size, height: size }}
		>
			<span className='round-gradient__social-link'>{icon}</span>
		</div>
	)
}

export default RoundGradientIcon
