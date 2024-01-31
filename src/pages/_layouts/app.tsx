import { Header } from '@/components/header'
import { ModeToggle } from '@/components/mode-toggle'
import { Outlet } from 'react-router-dom'

export function AppLayout() {
  return (
    <div className='flex min-h-screen flex-col antialiased'>
      <Header />
      <div className='absolute top-4 right-4 z-50'>
        <ModeToggle />
      </div>
      <div className='flex flex-1 flex-col gap-4 p-8 pt-6'>
        <Outlet />
      </div>
    </div>
  )
}
