import './globals.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './router/routes'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { Toaster } from 'sonner'
import { ThemeProvider } from './components/theme-provider'

export function App() {
  return (
    <ThemeProvider defaultTheme='system' storageKey='vite-ui-theme'>
      <HelmetProvider>
        <Helmet titleTemplate='%s | Sua Comanda' />
        <Toaster richColors />
        <RouterProvider router={router} />
      </HelmetProvider>
    </ThemeProvider>
  )
}
