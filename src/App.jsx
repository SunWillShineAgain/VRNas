import { RouterProvider } from 'react-router-dom'
import { router } from './Router.jsx'

function App() {
	return (
		<>
			App
			<RouterProvider router={router}></RouterProvider>
		</>
	)
}

export default App
