import React from 'react'
import './Pages.scss'
import PageLayout from '../layout/PageLayout'
import Subscribe from '../sections/Subscribe/Subscribe'
import PageContacts from '../sections/PageContacts/PageContacts'
import GetInTouch from '../sections/GetInTouch/GetInTouch'
import MapSection from '../sections/MapSection/MapSection'

const ContactsPage = () => {
	return (
		<PageLayout title='Contact Us' cls='contacts'>
			<PageContacts />
			<GetInTouch />
			<MapSection />
			<Subscribe />
		</PageLayout>
	)
}

export default ContactsPage
