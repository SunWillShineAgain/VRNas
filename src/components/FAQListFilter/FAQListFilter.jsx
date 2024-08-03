import React, { useState } from 'react'
import FAQList from '../FAQList/FAQList'
import './FAQListFilter.scss'
import Button from '../../components/Button/Button'

const faq = [
	{
		q: 'What is virtual reality?',
		a: 'Virtual reality (VR) is a technology that uses headsets or other devices to create a simulated environment. Users can interact with this environment as if it were real, allowing for immersive experiences in gaming, education, training, and more.',
		tag: 'service',
	},
	{
		q: 'What types of VR services do you offer?',
		a: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim aspernatur sunt nihil, reiciendis recusandae voluptatum accusamus aliquam veniam architecto itaque natus maxime? Maiores, facere? Officiis iste laboriosam quo cumque nisi!',
		tag: 'pricing',
	},
	{
		q: 'What equipment do I need to use your VR services?',
		a: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam soluta cupiditate rem qui porro reprehenderit nemo!',
		tag: 'pricing',
	},
	{
		q: 'How much does your VR services cost?',
		a: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis, porro.',
		tag: 'pricing',
	},
	{
		q: 'What equipment do I need to use your VR services?',
		a: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam soluta cupiditate rem qui porro reprehenderit nemo!',
		tag: 'service',
	},
	{
		q: 'What types of VR services do you offer?',
		a: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim aspernatur sunt nihil, reiciendis recusandae voluptatum accusamus aliquam veniam architecto itaque natus maxime? Maiores, facere? Officiis iste laboriosam quo cumque nisi!',
		tag: 'pricing',
	},
	{
		q: 'Can I try out your VR services before I commit?',
		a: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam, magni ipsam minus sint sequi voluptate molestiae qui delectus, nihil iure molestias! Temporibus a officiis atque. Accusantium earum quis, rem nobis temporibus eveniet quidem aperiam facilis numquam sapiente. Nisi, laboriosam impedit nostrum adipisci assumenda a dolore, odio, odit dolorem tempore earum!',
		tag: 'service',
	},
	{
		q: 'How much does your VR services cost?',
		a: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis, porro.',
		tag: 'service',
	},
	{
		q: 'What equipment do I need to use your VR services?',
		a: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam soluta cupiditate rem qui porro reprehenderit nemo!',
		tag: 'service',
	},
	{
		q: 'Can I try out your VR services before I commit?',
		a: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam, magni ipsam minus sint sequi voluptate molestiae qui delectus, nihil iure molestias! Temporibus a officiis atque. Accusantium earum quis, rem nobis temporibus eveniet quidem aperiam facilis numquam sapiente. Nisi, laboriosam impedit nostrum adipisci assumenda a dolore, odio, odit dolorem tempore earum!',
		tag: 'pricing',
	},
	{
		q: 'What types of VR services do you offer?',
		a: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim aspernatur sunt nihil, reiciendis recusandae voluptatum accusamus aliquam veniam architecto itaque natus maxime? Maiores, facere? Officiis iste laboriosam quo cumque nisi!',
		tag: 'pricing',
	},
]

const FAQListFilter = () => {
	const [activeClass, setActiveClass] = useState(false)
	const [activeTag, setActiveTag] = useState('all')

	return (
		<div className='faq-filtered'>
			<div className='faq__filters'>
				{['all', 'service', 'pricing'].map((item, i) => {
					return (
						<div key={i} onClick={() => setActiveTag(item)}>
							<FilterButton
								text={item}
								variant='filter'
								active={activeClass}
								setActive={setActiveClass}
								id={i}
							/>
						</div>
					)
				})}
			</div>
			<FAQList
				data={
					activeTag === 'all' ? faq : faq.filter(item => item.tag === activeTag)
				}
			/>
		</div>
	)
}

const FilterButton = ({ text, variant, active, setActive, id }) => {
	return (
		<Button
			text={text}
			variant={`${variant} ${id === active ? 'active' : ''}`}
			onClickHandler={() => setActive(id)}
		/>
	)
}

export default FAQListFilter
