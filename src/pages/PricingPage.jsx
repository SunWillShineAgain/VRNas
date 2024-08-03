import React from 'react'
import PageLayout from '../layout/PageLayout'
import Subscribe from '../sections/Subscribe/Subscribe'
import WhyUs from '../sections/WhyUs/WhyUs'
import PricingPlan from '../sections/PricingPlan/PricingPlan'
import imgSrc from '/images/11.png'
import FAQ from '../sections/FAQ/FAQ'

const PricingPage = () => {
	return (
		<PageLayout title='Pricing Plan' cls='pricing'>
			<PricingPlan />
			<WhyUs sectionImgSrc={imgSrc} />
			<FAQ />
			<Subscribe />
		</PageLayout>
	)
}

export default PricingPage
