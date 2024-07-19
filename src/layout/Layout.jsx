import React from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Wrap from './Wrap'

const Layout = ({ children }) => {
	return (
		<>
			<Header />
			<Wrap>{children}</Wrap>
			<Footer />
		</>
	)
}

export default Layout
