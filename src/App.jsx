import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainPage from './pages/MainPage.jsx'
import ServicePage from './pages/ServicePage.jsx'
import AboutPage from './pages/AboutPage.jsx'
import PricingPage from './pages/PricingPage.jsx'
import TeamPage from './pages/TeamPage.jsx'
import TermsPage from './pages/TermsPage.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'
import PrivacyPage from './pages/PrivacyPage.jsx'
import FAQPage from './pages/FAQPage.jsx'
import ContactsPage from './pages/ContactsPage.jsx'

function App() {
	return (
		<BrowserRouter basename={import.meta.env.VITE_URL}>
			<Routes>
				<Route path='/' exact element={<MainPage />} />
				<Route path='/service' element={<ServicePage />} />
				<Route path='/about' element={<AboutPage />} />
				<Route path='/pricing' element={<PricingPage />} />
				<Route path='/team' element={<TeamPage />} />
				<Route path='/terms' element={<TermsPage />} />
				<Route path='/privacy' element={<PrivacyPage />} />
				<Route path='/faq' element={<FAQPage />} />
				<Route path='/contacts' element={<ContactsPage />} />
				<Route path='/*' element={<NotFoundPage />} />
			</Routes>
		</BrowserRouter>
	)
}

export default App
