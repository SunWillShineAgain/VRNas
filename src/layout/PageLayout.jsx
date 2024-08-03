import React from 'react'
import Wrap from './Wrap'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import './PageLayout.scss'

/**
 * @param {string} title - page's title (and breadcrumb)
 * @param {string} cls - page's classname
 */
const PageLayout = ({ title, cls = '', children }) => {
	return (
		<>
			<Header />
			<Wrap>
				<div className={`page-${cls}`}>
					<div className='page__title-wrap'>
						<div className='page__title gradient-bg'>{title}</div>
						<div className='page__breadcrumbs'>
							<span>Home</span>
							&gt;
							<p className='page__breadcrumbs-page'>{title}</p>
						</div>
					</div>
					{children}
				</div>
			</Wrap>
			<Footer />
		</>
	)
}

export default PageLayout
