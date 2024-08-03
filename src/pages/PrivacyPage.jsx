import React from 'react'
import './Pages.scss'
import PageLayout from '../layout/PageLayout'
import Subscribe from '../sections/Subscribe/Subscribe'

const PrivacyPage = () => {
	return (
		<PageLayout title='Privacy Policy' cls='privacy'>
			<section className='privacy'>
				<div className='privacy__top'>
					<div className='gradient-caption'>Privacy Policy</div>
					<h2 className='heading-h2'>Privacy Policy</h2>
					<div className='privacy__top-text text'>
						This Privacy Policy describes how [Company Name] collects, uses, and
						protects the personal information of our website visitors and
						customers.
					</div>
				</div>
				<div className='text'>
					<div className='title'>Information We Collect</div>
					<p>We may collect the following types of personal information:</p>
					<ul>
						<li>Name, email address, and other contact information.</li>
						<li>Demographic information such as age, gender, and location.</li>
						<li>Payment information such as credit card details.</li>
						<li>Information about how you use our website and services.</li>
					</ul>
					<div className='title'>How We Use Your Information</div>
					<p>
						We may use your personal information for the following purposes:
					</p>
					<ul>
						<li>To provide you with our services and products.</li>
						<li>To process payments and fulfill orders.</li>
						<li>To send you marketing and promotional materials.</li>
						<li>To improve our website and services.</li>
					</ul>
					<div className='title'>How We Protect Your Information</div>
					<p>
						We implement a variety of security measures to maintain the safety
						of your personal information when you place an order or enter,
						submit, or access your personal information. We use encryption to
						protect sensitive information transmitted online, and we also
						protect your information offline.
					</p>
					<div className='title'>Information Sharing</div>
					<p>
						We do not sell or rent your personal information to third parties.
						However, we may share your information with our trusted third-party
						service providers who assist us in operating our website and
						services.
					</p>
					<div className='title'>Cookies and Tracking</div>
					<p>
						We use cookies and other tracking technologies to collect
						information about your browsing behavior and preferences. This
						information is used to personalize your experience on our website
						and to analyze how visitors use our website.
					</p>
					<div className='title'>Your Rights</div>
					<p>
						You have the right to access, update, or delete your personal
						information. You can contact us using the information provided on
						our contact page to exercise these rights.
					</p>
					<div className='title'>Changes to Privacy Policy</div>
					<p>
						We reserve the right to update this Privacy Policy at any time. We
						will notify you of any changes by posting the new Privacy Policy on
						our website.
					</p>
					<div className='title'>Contact Us</div>
					<p>
						If you have any questions about our Privacy Policy, please contact
						us using the information provided on our contact page.
					</p>
				</div>
			</section>
			<Subscribe />
		</PageLayout>
	)
}

export default PrivacyPage
