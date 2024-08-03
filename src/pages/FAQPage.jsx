import React from 'react'
import './Pages.scss'
import PageLayout from '../layout/PageLayout'
import Subscribe from '../sections/Subscribe/Subscribe'
import FAQListFilter from '../components/FAQListFilter/FAQListFilter'

const FAQPage = () => {
	return (
		<PageLayout title='FAQ' cls='faq'>
			<section className='faq'>
				<div className='faq__top'>
					<div className='gradient-caption'>FAQ</div>
					<h2 className='heading-h2'>Frequently Asked Questions</h2>
					<div className='faq__top-text text'>
						At VRNas, we want to make sure that you have all the information you
						need to make informed decisions about our VR services. Here are some
						of the most common questions we receive:
					</div>
				</div>
				<FAQListFilter />
			</section>
			<Subscribe />
		</PageLayout>
	)
}

export default FAQPage
