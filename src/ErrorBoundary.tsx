import { Component, type ReactNode, type ErrorInfo } from 'react'

interface Props {
	children: ReactNode
}

interface State {
	hasError: boolean
	error: Error | null
}

export default class ErrorBoundary extends Component<Props, State> {
	constructor(props: Props) {
		super(props)
		this.state = { hasError: false, error: null }
	}

	static getDerivedStateFromError(error: Error): Partial<State> {
		return { hasError: true, error }
	}

	componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
		console.error('ErrorBoundary caught an error:', error, errorInfo)
	}

	render(): ReactNode {
		if (this.state.hasError) {
			return (
				<div
					className="uxc-error-boundary flex items-center justify-center min-h-screen p-4 text-gray-200 bg-gray-900"
					data-error-name={this.state.error?.name}
					data-error-message={this.state.error?.message}
				>
					<div className="w-full max-w-md text-center">
						<div className="p-6 bg-gray-800 border border-gray-700 rounded-lg">
							<h1 className="text-lg font-semibold text-gray-200 mb-2">
								Something went wrong
							</h1>
							<p className="text-sm text-gray-400">
								An error occurred while rendering this page.
							</p>
						</div>
					</div>
				</div>
			)
		}
		return this.props.children
	}
}
