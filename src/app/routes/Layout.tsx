import { Outlet } from 'react-router'
import { Footer } from '../../widgets/footer/Footer'
import { Header } from '../../widgets/header/Header'

export const Layout = () => {
	return (
		<>
			<Header />

			<main className='main'>
				<Outlet />
			</main>

			<Footer />
		</>
	)
}
