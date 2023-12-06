import MainPage from '../pages/MainPage'
import MenuPage from '../pages/MenuPage'
import Nav from './Nav'

function AppLayout() {
	return (
		<div className="min-h-screen w-full relative">
			<Nav />
			{/* <MainPage /> */}
			<MenuPage />
		</div>
	)
}

export default AppLayout
