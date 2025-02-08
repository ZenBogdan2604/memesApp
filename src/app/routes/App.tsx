import { Home } from '@/pages/home/Home'
import { Route, Routes } from 'react-router'
import { Layout } from './Layout'
import {About} from '@/pages/about/About'
import { Memes } from '@/pages/memes/Memes'

const App = () => {
	return (
		<>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route index element={<Home />} />
					<Route path='about-us' element={<About />} />
					<Route path='mems' element={<Memes />} />
				</Route>
			</Routes>
		</>
	)
}

export default App
