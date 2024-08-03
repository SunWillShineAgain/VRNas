import React from 'react'
import './PricingPlan.scss'
import PagePricingList from '../../components/PagePricingList/PagePricingList'

const plans = [
	{
		name: 'Basic Plan',
		price: 99,
		description: 'All the basic features to boost your freelance career',
		benefits: [
			'Access to a selection of VR games and experiences',
			'Limited access to educational content',
			'Limited access to architecture and design tools',
			'No access to exclusive events or promotions',
		],
		buttonText: 'Get 14 Days Free Trial',
	},
	{
		name: 'Standard Plan',
		price: 149,
		description: 'All the basic features to boost your freelance career',
		benefits: [
			'Access to a selection of VR games and experiences',
			'Limited access to educational content',
			'Limited access to architecture and design tools',
			'No access to exclusive events or promotions',
		],
		buttonText: 'Get 14 Days Free Trial',
	},
	{
		name: 'Super Plan',
		price: 200,
		description: 'All the basic features to boost your freelance career',
		benefits: [
			'Access to a selection of VR games and experiences',
			'Limited access to educational content',
			'Limited access to architecture and design tools',
			'No access to exclusive events or promotions',
		],
		buttonText: 'Get 14 Days Free Trial',
	},
]

const PricingPlan = () => {
	return (
		<section className='pricing-plan'>
			<div className='pricing-plan__top'>
				<div className='gradient-caption'>PRICING</div>
				<h2 className='heading-h2'>Pricing Plans</h2>
				<div className='pricing-plan__top-text'>
					Choose the pricing plan that fits your needs and budget. All plans
					come with a free trial period so you can test out our service and see
					which plan works best for you.
				</div>
			</div>
			<PagePricingList data={plans} />
		</section>
	)
}

export default PricingPlan
