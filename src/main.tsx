import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.js'
import { HashRouter } from 'react-router'
import ErrorBoundary from './ErrorBoundary.js'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<ErrorBoundary>
			<HashRouter>
				<App />
			</HashRouter>
		</ErrorBoundary>
	</StrictMode>
)
