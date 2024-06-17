import { Suspense, lazy } from 'react'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { Toaster } from 'react-hot-toast'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { PriceProvider } from './context/PriceContext'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import Contact from './pages/Contact'
import PageNotFound from './pages/PageNotFound'
import Admin from './pages/Admin'
import Loader from './ui/Loader'
import ConfirmSignup from './features/authentication/ConfirmSignup'

const queryClient = new QueryClient()
const AppLayout = lazy(() => import('./ui/AppLayout'))
const Login = lazy(() => import('./pages/Login'))
const BasketPage = lazy(() => import('./pages/BasketPage'))
const MainPage = lazy(() => import('./pages/MainPage'))
const MenuPage = lazy(() => import('./pages/MenuPage'))
const Account = lazy(() => import('./pages/Account'))
const UserProfile = lazy(() => import('./features/user/UserProfile'))
const UpdateProfile = lazy(() => import('./features/user/UpdateProfile'))
const OrdersHistory = lazy(() => import('./features/orders/OrdersHistory'))
const LoginForm = lazy(() => import('./features/authentication/LoginForm'))
const SigninForm = lazy(() => import('./features/authentication/SigninForm'))
const ForgotPassword = lazy(
    () => import('./features/authentication/ForgotPassword')
)
const Cart = lazy(() => import('./features/cart/Cart'))
const OrderCart = lazy(() => import('./features/cart/OrderCart'))
const Summary = lazy(() => import('./features/cart/Summary'))
const SuccessOrder = lazy(() => import('./features/cart/SuccessOrder'))
const OrderDetails = lazy(() => import('./features/orders/OrderDetails'))

const router = createBrowserRouter([
    {
        element: (
            <Suspense fallback={<Loader />}>
                <AppLayout />
            </Suspense>
        ),
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
        element: (
            <Suspense fallback={<Loader />}>
                <Login />
            </Suspense>
        ),
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
        element: (
            <Suspense fallback={<Loader />}>
                <BasketPage />
            </Suspense>
        ),
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
        element: (
            <Suspense fallback={<Loader />}>
                <Account />
            </Suspense>
        ),

        children: [
            {
                path: '/account',
                element: <UserProfile />,
            },
            {
                path: 'updateProfile',
                element: <UpdateProfile />,
            },
            {
                path: 'ordersHistory',
                element: <OrdersHistory />,
            },
        ],
    },
    {
        path: '/confirmed-registration',
        element: <ConfirmSignup />,
    },

    {
        path: '*',
        element: <PageNotFound />,
    },
])

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <PriceProvider>
                <RouterProvider router={router} />
                <ReactQueryDevtools initialIsOpen={false} />
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
            </PriceProvider>
        </QueryClientProvider>
    )
}

export default App
