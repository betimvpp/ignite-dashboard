import { ModeToggle } from '@/components/mode-toggle'
import { HandCoins } from 'lucide-react'
import { Outlet } from 'react-router-dom'

export function AuthLayout() {
  return (
    <div className='min-h-screen grid grid-cols-2 antialiased'>
      <div className='h-full flex flex-col justify-between border-r border-foreground/5 bg-hero-pattern bg-no-repeat bg-cover bg-top object-cover p-10 text-muted-foreground'>
        <div className='flex items-center gap-3 text-lg text-foreground'>
          <HandCoins className='h-6 w-6'  color='black'/>
          <span className='font-semibold text-black '>yourFoodStore</span>
        </div>
        <footer className='text-sm text-black font-semibold'>
          All rights reserved to: yourFoodStore® - {new Date().getFullYear()}
        </footer>
      </div>

      <div className='absolute top-8 right-8 z-50'>
        <ModeToggle/>
      </div>

      <div className='relative flex flex-col items-center justify-center'>
        <Outlet />
      </div>
    </div>
  )
}
