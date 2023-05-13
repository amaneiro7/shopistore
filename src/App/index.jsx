import { lazy, Suspense } from 'react'
import { BrowserRouter, useRoutes } from 'react-router-dom'
import ErrorBoundary from './ErrorBoundary'
import { ShoppingCartProvider } from '@src/Context'
import { LoadingPages } from '@src/Components/LoadingPage'
import './App.css'

const Home = lazy(() => import('@src/Pages/Home').then(module => ({ default: module.Home })))
const Layout = lazy(() => import('@src/Components/Layout').then(module => ({ default: module.Layout })))
const MyAccount = lazy(() => import('@src/Pages/MyAccount').then(module => ({ default: module.MyAccount })))
const MyOrder = lazy(() => import('@src/Pages/MyOrder').then(module => ({ default: module.MyOrder })))
const MyOrders = lazy(() => import('@src/Pages/MyOrders').then(module => ({ default: module.MyOrders })))
const NotFound = lazy(() => import('@src/Pages/NotFound').then(module => ({ default: module.NotFound })))
const Register = lazy(() => import('@src/Pages/Register').then(module => ({ default: module.Register })))
const SignIn = lazy(() => import('@src/Pages/SignIn').then(module => ({ default: module.SignIn })))

const AppRoutes = () => {
  const routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/:category', element: <Home /> },
    { path: '/my-account', element: <MyAccount /> },
    { path: '/my-order/last', element: <MyOrder /> },
    { path: '/my-order/:id', element: <MyOrder /> },
    { path: '/my-orders', element: <MyOrders /> },
    { path: '/register', element: <Register /> },
    { path: '/sign-in', element: <SignIn /> },
    { path: '/*', element: <NotFound /> }
  ])
  return routes
}

function App () {
  return (
    <ErrorBoundary fallback={<p>Ha Ocurrido un error</p>}>
      <BrowserRouter>
        <Suspense fallback={<LoadingPages />}>
          <ShoppingCartProvider>
            <Layout>
              <AppRoutes />
            </Layout>
          </ShoppingCartProvider>
        </Suspense>
      </BrowserRouter>
    </ErrorBoundary>
  )
}

export default App
