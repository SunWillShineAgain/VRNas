import React from 'react'
import './FAQ.scss'
import FAQList from '../../components/FAQList/FAQList'

const faq = [
	{
		q: 'What is virtual reality?',
		a: 'Virtual reality (VR) is a technology that uses headsets or other devices to create a simulated environment. Users can interact with this environment as if it were real, allowing for immersive experiences in gaming, education, training, and more.',
	},
	{
		q: 'What types of VR services do you offer?',
		a: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim aspernatur sunt nihil, reiciendis recusandae voluptatum accusamus aliquam veniam architecto itaque natus maxime? Maiores, facere? Officiis iste laboriosam quo cumque nisi!',
	},
	{
		q: 'How much does your VR services cost?',
		a: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis, porro.',
	},
	{
		q: 'What equipment do I need to use your VR services?',
		a: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam soluta cupiditate rem qui porro reprehenderit nemo!',
	},
	{
		q: 'Can I try out your VR services before I commit?',
		a: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam, magni ipsam minus sint sequi voluptate molestiae qui delectus, nihil iure molestias! Temporibus a officiis atque. Accusantium earum quis, rem nobis temporibus eveniet quidem aperiam facilis numquam sapiente. Nisi, laboriosam impedit nostrum adipisci assumenda a dolore, odio, odit dolorem tempore earum!',
	},
]

const FAQ = () => {
	return (
		<section className='faq__section'>
			<div className='faq__text gradient-bg'>
				<div className='gradient-caption'>FAQ</div>
				<h2 className='heading-h2'>Frequently Asked Questions</h2>
				<div className='faq__description'>
					At VRNas, we want to make sure that you have all the information you
					need to make informed decisions about our VR services. Here are some
					of the most common questions we receive:
				</div>
			</div>
			<FAQList data={faq} />
		</section>
	)
}

export default FAQ
