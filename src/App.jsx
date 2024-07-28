import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainPage from './pages/MainPage.jsx'
import ServicePage from './pages/ServicePage.jsx'
import AboutPage from './pages/AboutPage.jsx'
import BlogPage from './pages/BlogPage.jsx'
import Page from './pages/Page.jsx'

function App() {
	return (
		<BrowserRouter basename={import.meta.env.VITE_URL}>
			<Routes>
				<Route path='/' exact element={<MainPage />} />
				<Route path='/service' element={<ServicePage />} />
				<Route path='/about' element={<AboutPage />} />
				<Route path='/blog' element={<BlogPage />} />
				<Route path='/page' element={<Page />} />
			</Routes>
		</BrowserRouter>
	)
}

export default App
