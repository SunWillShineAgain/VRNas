import { createBrowserRouter } from 'react-router-dom'
import MainPage from './pages/MainPage.jsx'
import AboutPage from './pages/AboutPage.jsx'
import ServicePage from './pages/ServicePage.jsx'
import Page from './pages/Page.jsx'
import BlogPage from './pages/BlogPage.jsx'
import AppLayout from './layout/AppLayout.jsx'

export const router = createBrowserRouter([
	// {
	// element: <AppLayout />,
	// errorElement: 'пиздА!',
	// children: [
	{
		path: '/',
		element: <MainPage />,
	},
	{
		path: '/service',
		element: <ServicePage />,
	},
	{
		path: '/about',
		element: <AboutPage />,
	},
	{
		path: '/page',
		element: <Page />,
	},
	{
		path: '/blog',
		element: <BlogPage />,
	},
	// ],
	// },
])
