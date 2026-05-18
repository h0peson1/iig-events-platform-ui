import { Routes, Route } from 'react-router'
import IIGHome from './screens/IIGHome.js'
import screens from './screens/index.js'

export default function App() {
	return (
		<Routes>
			<Route path="/" element={<IIGHome />} />
			{Object.entries(screens).map(([screenName, ScreenComponent]) => (
				<Route
					key={screenName}
					path={`/${screenName}`}
					element={<ScreenComponent />}
				/>
			))}
		</Routes>
	)
}
