import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import AppLayout from './ui/AppLayout'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import MainPage from './pages/MainPage'
import Order from './pages/Order'
import Login from './pages/Login'
import Account from './pages/Account'
import BasketPage from './pages/BasketPage'
import Contact from './pages/Contact'
import MenuPage from './pages/MenuPage'
import PageNotFound from './pages/PageNotFound'
import ForgotPassword from './pages/ForgotPassword'
import Registration from './pages/Registration'

const queryClient = new QueryClient()

const router = createBrowserRouter([
    {
        element: <AppLayout />,
        children: [
            {
                path: '/',
                element: <MainPage />,
            },
            {
                path: '/menu',
                element: <MenuPage />,
            },
            {
                path: '/basket',
                element: <BasketPage />,
            },
            {
                path: '/account',
                element: <Account />,
            },
            {
                path: '/order',
                element: <Order />,
            },
            {
                path: '/contact',
                element: <Contact />,
            },
        ],
    },
    {
        path: '/login',
        element: <Login />,
    },
    {
        path: '/forgotpassword',
        element: <ForgotPassword />,
    },
    {
        path: '/registration',
        element: <Registration />,
    },
    {
        path: '*',
        element: <PageNotFound />,
    },
])

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <RouterProvider router={router} />
            {/* <ReactQueryDevtools initialIsOpen={false} /> */}
        </QueryClientProvider>
    )
}

export default App
