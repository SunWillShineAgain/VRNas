import React from 'react'
import './Pages.scss'
import PageLayout from '../layout/PageLayout'
import Subscribe from '../sections/Subscribe/Subscribe'

const ContactsPage = () => {
	return (
		<PageLayout title='Contact Us' cls='contacts'>
			<Subscribe />
		</PageLayout>
	)
}

export default ContactsPage
