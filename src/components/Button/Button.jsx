import React from 'react'
import './Button.scss'

/**
 * @param {string} text - button's text
 * @param {string} variant - classname (bold, filled)
 */
const Button = ({ text, variant }) => {
	return (
		<button
			onClick={() => console.log(`Button clicked: ${text}`)}
			className={variant}
		>
			{text}
		</button>
	)
}

export default Button
