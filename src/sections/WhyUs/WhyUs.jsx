import React from 'react'
import './WhyUs.scss'
import SmallVideoSection from '../../components/SmallVIdeoSection/SmallVIdeoSection'
import imgSrc from '/images/2.png'
import Accordion from '../../components/Accordion/Accordion'

const data = [
	{
		title: 'Passionate and Experienced Team',
		text: 'We are proud of our team of VR experts who are passionate about VR and dedicated to delivering the highest quality work. Our team consists of experienced VR developers, designers, and technicians who have a proven track record of creating immersive and engaging VR experiences.',
	},
	{
		title: 'Customized Solutions',
		text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus inventore, quo itaque qui, magnam est doloribus obcaecati neque architecto tempora ea atque exercitationem ex doloremque quam? Nobis iure adipisci distinctio aut labore nemo molestiae quo minima ab fugit.',
	},
	{
		title: 'Exceptional Customer Service',
		text: 'Saepe soluta fugit, qui ullam totam adipisci nisi in veniam mollitia, dolorum quaerat impedit recusandae quod dignissimos debitis vel, expedita magnam rerum.',
	},
]

const WhyUs = ({ sectionImgSrc }) => {
	return (
		<section className='whyus'>
			<div className='whyus__column'>
				<div className='gradient-caption'>WHY CHOOSE US</div>
				<h2 className='heading-h2'>Why Choose Us for Your VR Needs</h2>
				<Accordion data={data} />
			</div>
			<div className='whyus__column'>
				<div className='whyus__image gradient-bg'>
					<img src={sectionImgSrc} alt='' />
					<div className='whyus__video'>
						<SmallVideoSection
							image={imgSrc}
							videoSrc='https://www.youtube.com/watch?v=dQw4w9WgXcQ'
						/>
					</div>
				</div>
			</div>
		</section>
	)
}

export default WhyUs
