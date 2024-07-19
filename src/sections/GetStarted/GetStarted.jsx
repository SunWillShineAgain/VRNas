import React from 'react'
import './GetStarted.scss'
import Button from '../../components/Button/Button'
import BigVideoSection from '../../components/BigVideoSection/BigVideoSection'

const GetStarted = () => {
	return (
		<section className='getstarted'>
			<div className='gradient-caption'>HOW TO GET STARTED</div>
			<h2 className='heading-h2'>
				Bringing Your Virtual Reality Dreams to Life
			</h2>
			<BigVideoSection
				title='How to get started'
				tag='VR Service'
				videoSrc='https://www.youtube.com/watch?v=dQw4w9WgXcQ'
				thumbnail='/images/7.png'
			/>
			<Button text='GET STARTED' variant='filled bold' />
		</section>
	)
}

export default GetStarted
