import { BrowserRouter, Route, RouterProvider, Routes } from 'react-router-dom'
import { router } from './Router.jsx'
import MainPage from './pages/MainPage.jsx'
import AppLayout from './layout/AppLayout.jsx'
import ServicePage from './pages/ServicePage.jsx'
import AboutPage from './pages/AboutPage.jsx'
import BlogPage from './pages/BlogPage.jsx'
import Page from './pages/Page.jsx'

function App() {
	// return <RouterProvider router={router} basename='/VRNas/' />
	return (
		<BrowserRouter basename='/VRNas/'>
			<Routes>
				<Route path='/' exact element={<MainPage />} />
				<Route path='/service' element={<ServicePage />} />
				<Route path='/about' element={<AboutPage />} />
				<Route path='/blog' element={<BlogPage />} />
				<Route path='/page' element={<Page />} />
			</Routes>
		</BrowserRouter>
	)
	// return <AppLayout />
}

export default App
