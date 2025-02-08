import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import App from './app/routes/App.tsx'
import './styles/main.scss'

const queryClient = new QueryClient()

createRoot(document.getElementById('root')!).render(
	// <StrictMode>
	<QueryClientProvider client={queryClient}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</QueryClientProvider>
	// </StrictMode>
)
