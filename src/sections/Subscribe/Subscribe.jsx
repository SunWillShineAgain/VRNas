import React, { useState } from 'react'
import './Subscribe.scss'
import SendIcon from '../../assets/Icons/SendIcon'

const Subscribe = () => {
	const [value, setValue] = useState('')
	return (
		<section className='subscribe'>
			<div className='subscribe__text'>
				Subscribe to our newsletter for latest updates
			</div>
			<form action='#' className='subscribe__form'>
				<div className='subscribe__input-wrap'>
					<input
						type='email'
						name='subscribe'
						id='subscribe'
						placeholder='Enter your email address'
						value={value}
						onChange={e => setValue(e.target.value)}
					/>
					<button type='submit' onClick={e => e.preventDefault()}>
						<SendIcon />
					</button>
				</div>
			</form>
		</section>
	)
}

export default Subscribe
