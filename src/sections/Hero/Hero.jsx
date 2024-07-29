import React from 'react'
import './Hero.scss'
import Button from '../../components/Button/Button'
import SmallVIdeoSection from '../../components/SmallVIdeoSection/SmallVIdeoSection'
import imgSrc from '/images/2.png'

const Hero = () => {
	return (
		<section className='hero'>
			<div className='hero__column'>
				<h1 className='hero__title'>Immerse Yourself in Virtual Reality</h1>
				<div className='hero__text'>
					Experience Unforgettable Events in VR. Bring your events to life like
					never before with our VR services
				</div>
				<Button text='discover more' variant='filled bold' />
				<div className='hero__clients'>
					<div className='hero__client'>
						<img src='images/client-1.png' alt='client-1' />
					</div>
					<div className='hero__client'>
						<img src='images/client-2.png' alt='client-2' />
					</div>
					<div className='hero__client'>
						<img src='images/client-3.png' alt='client-3' />
					</div>
					<div className='hero__client-text'>
						<span>32k+</span> Happy Client
					</div>
					<SmallVIdeoSection
						image={imgSrc}
						videoSrc='https://www.youtube.com/watch?v=dQw4w9WgXcQ'
					/>
				</div>
			</div>
			<div className='hero__column gradient-bg'>
				<img src='images/1.png' alt='1' />
			</div>
		</section>
	)
}

export default Hero
