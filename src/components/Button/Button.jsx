import React from 'react'
import './Button.scss'

/**
 * @param {string} text - button's text
 * @param {string} variant - classname (bold, filled, filter)
 */
const Button = ({ text, variant, onClickHandler }) => {
	const clickHandler = () => {
		console.log(`Button clicked: ${text}`)

		if (onClickHandler) {
			onClickHandler()
		}
	}
	return (
		<button onClick={clickHandler} className={variant}>
			{text}
		</button>
	)
}

export default Button
