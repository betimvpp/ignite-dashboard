import { HandCoins, Home, ScrollText } from 'lucide-react'
import { Separator } from './ui/separator'
import { NavLink } from './nav-link'

export function Header() {
    return (
        <div className='border-b'>
            <div className='flex h-16 items-center gap-6 px-6'>
                <HandCoins className='h-6 w-6' />

                <Separator orientation='vertical' className='h-6' />

                <nav className='flex items-center space-x-4 lg:space-x-6'>
                    <NavLink to="/" >
                        <Home className='h-4 w-4'/>
                        Inicio
                    </NavLink>

                    <NavLink to="/orders" >
                        <ScrollText className='h-4 w-4'/>
                        Comandas
                    </NavLink>
                </nav>
            </div>
        </div>
    )
}
