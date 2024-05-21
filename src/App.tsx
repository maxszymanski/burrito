import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { Toaster } from 'react-hot-toast'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import AppLayout from './ui/AppLayout'
import MainPage from './pages/MainPage'
import Login from './pages/Login'
import Account from './pages/Account'
import BasketPage from './pages/BasketPage'
import Contact from './pages/Contact'
import MenuPage from './pages/MenuPage'
import PageNotFound from './pages/PageNotFound'
import ForgotPassword from './features/authentication/ForgotPassword'
import LoginForm from './features/authentication/LoginForm'
import SigninForm from './features/authentication/SigninForm'
import UpdateProfile from './features/user/UpdateProfile'
import UserProfile from './features/user/UserProfile'
import Cart from './features/cart/Cart'
import OrderCart from './features/cart/OrderCart'
import { PriceProvider } from './context/PriceContext'
import Summary from './features/cart/Summary'
import SuccessOrder from './features/cart/SuccessOrder'
import OrderDetails from './features/orders/OrderDetails'
import OrdersHistory from './features/orders/OrdersHistory'
import Admin from './pages/Admin'

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
                path: '/contact',
                element: <Contact />,
            },
            {
                path: '/admin',
                element: <Admin />,
            },
        ],
    },
    {
        element: <Login />,
        children: [
            {
                path: '/login',
                element: <LoginForm />,
            },
            {
                path: '/forgotpassword',
                element: <ForgotPassword />,
            },
            {
                path: '/registration',
                element: <SigninForm />,
            },
        ],
    },
    {
        element: <BasketPage />,
        children: [
            {
                path: '/basket',
                element: <Cart />,
            },
            {
                path: '/order',
                element: <OrderCart />,
            },
            {
                path: '/summary',
                element: <Summary />,
            },
            {
                path: '/success',
                element: <SuccessOrder />,
            },
            {
                path: '/order/:orderNumber',
                element: <OrderDetails />,
            },
        ],
    },
    {
        element: <Account />,
        children: [
            {
                path: '/account',
                element: <UserProfile />,
            },
            {
                path: '/updateProfile',
                element: <UpdateProfile />,
            },
            {
                path: '/ordersHistory',
                element: <OrdersHistory />,
            },
        ],
    },

    {
        path: '*',
        element: <PageNotFound />,
    },
])

function App() {
    return (
        <PriceProvider>
            <QueryClientProvider client={queryClient}>
                <RouterProvider router={router} />
                {/* <ReactQueryDevtools initialIsOpen={false} /> */}
                <Toaster
                    position="top-center"
                    gutter={12}
                    containerStyle={{ marginTop: '10px' }}
                    toastOptions={{
                        success: {
                            duration: 2500,
                        },
                        error: {
                            duration: 2500,
                            style: {
                                backgroundColor: '#ef4444',
                            },
                        },
                        style: {
                            fontSize: '18px',
                            padding: '16px 20px',
                            backgroundColor: '#84cc16',
                            color: '#fff',
                            fontFamily: 'Scope One',
                            textAlign: 'center',
                        },
                    }}
                />
            </QueryClientProvider>
        </PriceProvider>
    )
}

export default App
