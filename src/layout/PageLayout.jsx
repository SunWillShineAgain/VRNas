import React from 'react'
import Wrap from './Wrap'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import './PageLayout.scss'

const PageLayout = ({ title, children }) => {
	return (
		<>
			<Header />
			<Wrap>
				<div className='page '>
					<div className='page__title gradient-bg'>{title}</div>
					<div className='page__breadcrumps'>
						<span>Home</span>
						&gt;
						<p className='page__breadcrumps-page'>{title}</p>
					</div>
				</div>
				{children}
			</Wrap>
			<Footer />
		</>
	)
}

export default PageLayout
