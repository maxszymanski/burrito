import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { Toaster } from 'react-hot-toast'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import AppLayout from './ui/AppLayout'
import MainPage from './pages/MainPage'
import Order from './pages/Order'
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
        ],
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
            <ReactQueryDevtools initialIsOpen={false} />
            <Toaster
                position="top-center"
                gutter={12}
                containerStyle={{ margin: '24px' }}
                toastOptions={{
                    success: {
                        duration: 3000,
                    },
                    error: {
                        duration: 5000,
                        style: {
                            backgroundColor: '#ef4444',
                        },
                    },
                    style: {
                        fontSize: '16px',
                        maxWidth: '500px',
                        padding: '16px 24px',
                        backgroundColor: '#84cc16',
                        color: '#fff',
                        fontFamily: 'Scope One',
                    },
                }}
            />
        </QueryClientProvider>
    )
}

export default App
