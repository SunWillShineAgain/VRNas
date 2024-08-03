import React from 'react'
import Subscribe from '../sections/Subscribe/Subscribe'
import './Pages.scss'
import Layout from '../layout/Layout'
import Button from '../components/Button/Button'
import imgSrc from '/images/12.png'

const NotFoundPage = () => {
	return (
		<Layout>
			<section className='page-not-found'>
				<div className='not-found__left'>
					<div className='gradient-caption'>404 Error</div>
					<h2 className='heading-h2'>Page Not Found</h2>
					<div className='not-found-text text'>
						<p>
							Oops! It looks like the page you were looking for is not here.
							Here are some possible reasons why:
						</p>
						<ul>
							<li>The page may have been moved or deleted. </li>
							<li>You may have mistyped the URL.</li>
							<li>There may be a temporary problem with our server.</li>
						</ul>
						<p>
							You can try the following options to find what you're looking for:
						</p>
						<ul>
							<li>Check the URL for typos or errors and try again.</li>
							<li>Go back to our homepage and browse from there. </li>
						</ul>
						<p>
							If you believe there's an issue with our website, please contact
							us using the information provided on our contact page.
						</p>
					</div>
					<a href={import.meta.env.VITE_URL}>
						<Button text='back home' variant='filled bold' />
					</a>
				</div>
				<div className='not-found__right gradient-bg'>
					<img src={imgSrc} alt='Not Found =(' />
				</div>
			</section>
			<Subscribe />
		</Layout>
	)
}

export default NotFoundPage
