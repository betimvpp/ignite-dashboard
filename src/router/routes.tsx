import { createBrowserRouter } from 'react-router-dom'

import { AppLayout } from '@/pages/_layouts/app'
import { AuthLayout } from '@/pages/_layouts/auth'

import { Dashboard } from '../pages/app/dashboard/dashboard'
import { SignIn } from '../pages/auth/sign-in'
import { SignUp } from '@/pages/auth/sign-up'
import Order from '@/pages/app/orders/order'
import { NotFound } from '@/pages/404/404'
import { Products } from '@/pages/app/products/products'
import { Employees } from '@/pages/app/employees/employees'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <NotFound/>,
    children: [
      { path: '/', element: <Dashboard /> },
      { path: '/orders', element: <Order /> },
      { path: '/products', element: <Products /> },
      { path: '/employees', element: <Employees /> },
    ],
  },
  {
    path: '/',
    element: <AuthLayout />,
    children: [
      { path: '/sign-in', element: <SignIn /> },
      { path: '/sign-up', element: <SignUp /> },
    ],
  },

])
