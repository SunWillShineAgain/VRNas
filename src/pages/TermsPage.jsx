import React from 'react'
import PageLayout from '../layout/PageLayout'
import Subscribe from '../sections/Subscribe/Subscribe'

const TermsPage = () => {
	return (
		<PageLayout title='Terms & Conditions' cls='terms'>
			<section className='terms'>
				<div className='terms__top'>
					<div className='gradient-caption'>Terms & Conditions</div>
					<h2 className='heading-h2'>Terms and Conditions</h2>
					<div className='terms__top-text text'>
						Welcome to VRNas. Please read these Terms and Conditions carefully
						before using our website and services.
					</div>
				</div>
				<div className='text'>
					<div className='title'>Acceptance of Term</div>
					<p>
						By accessing or using any part of our website or services, you agree
						to be bound by these Terms and Conditions. If you do not agree to
						all the terms and conditions of this agreement, then you may not
						access the website or use any services.
					</p>
					<div className='title'>Use of Website and Services</div>
					<p>
						You may use our website and services solely for lawful purposes and
						in accordance with these Terms and Conditions. You agree not to use
						our website or services:
					</p>
					<ul>
						<li>
							In any way that violates any applicable federal, state, local or
							international law or regulation.
						</li>
						<li>
							To transmit, or procure the sending of, any advertising or
							promotional material, including any "junk mail", "chain letter" or
							"spam" or any other similar solicitation.
						</li>
						<li>
							To impersonate or attempt to impersonate [Company Name], a
							[Company Name] employee, another user or any other person or
							entity.
						</li>
						<li>
							To engage in any other conduct that restricts or inhibits anyone's
							use or enjoyment of the website or services, or which, as
							determined by us, may harm [Company Name] or users of the website
							or services or expose them to liability.
						</li>
					</ul>
					<div className='title'>Intellectual Property</div>
					<p>
						The content and materials available on our website and services,
						including but not limited to text, graphics, logos, images, and
						software, are the property of [Company Name] or its licensors and
						are protected by copyright, trademark, and other intellectual
						property laws.
					</p>
					<p>
						You may not use any of our content or materials for commercial
						purposes without obtaining a license to do so from [Company Name] or
						its licensors.
					</p>
					<div className='title'>Limitation of Liability</div>
					<p>
						In no event shall [Company Name] be liable for any direct, indirect,
						incidental, consequential, special, or exemplary damages arising out
						of or in connection with your use of our website or services.
					</p>
					<div className='title'>Changes to Terms and Conditions</div>
					<p>
						We reserve the right, at our sole discretion, to modify or replace
						these Terms and Conditions at any time. By continuing to access or
						use our website and services after any revisions become effective,
						you agree to be bound by the revised terms.
					</p>
					<div className='title'>Contact Us</div>
					<p>
						If you have any questions about these Terms and Conditions, please
						contact us using the information provided on our contact page.
					</p>
				</div>
			</section>
			<Subscribe />
		</PageLayout>
	)
}

export default TermsPage
