import React from 'react'
import './Pricing.scss'
import Button from '../../components/Button/Button'
import PricingList from '../../components/PricingList/PricingList'

const pricing = [
	{
		title: 'Customizable Packages',
		text: 'We understand that each project is unique, so we offer customizable packages to ensure that you get the services you need at a price that works for you. Our team will work with you to create a package that meets your specific goals and budget.',
	},
	{
		title: 'Flexible Payment Options',
		text: 'We offer flexible payment options to make it easy for you to get started with our services. We accept various payment methods, including credit cards, bank transfers, and PayPal, and we can also work with you to create a payment plan that suits your needs.',
	},
	{
		title: 'Satisfaction Guarantee',
		text: 'We stand behind our services and are committed to ensuring that you are completely satisfied with the final product. If for any reason you are not happy with our services, we will work with you to make it right or provide a full refund.',
	},
]

const Pricing = () => {
	return (
		<section className='pricing gradient-bg'>
			<div className='gradient-caption'>our pricing</div>
			<h2 className='heading-h2'>Affordable VR Services for Everyone</h2>
			<div className='pricing__text'>
				At VRNas, we believe that everyone should have access to the benefits of
				VR. That's why we offer a range of pricing options to meet the needs of
				any budget.
			</div>
			<div className='pricing__block'>
				<PricingList data={pricing} />
				<div className='pricing__image'>
					<img src='/images/9.png' alt='9' />
				</div>
				<div className='pricing__start'>
					<div className='pricing__start-start'>Start from</div>
					<div className='pricing__start-price'>$99</div>
					<Button text='GET STARTED' variant='filled bold' />
					<span>30 Days Moneyback Guarantee</span>
				</div>
			</div>
		</section>
	)
}

export default Pricing
