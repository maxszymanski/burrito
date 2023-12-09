import MainPage from '../pages/MainPage'
import MenuPage from '../pages/MenuPage'
import Footer from './Footer'
import Nav from './Nav'

function AppLayout() {
	return (
		<div className="min-h-screen w-full relative bg-menu-bg-sm">
			<Nav />
			{/* <MainPage /> */}
			<MenuPage />
			<Footer />
		</div>
	)
}

export default AppLayout
