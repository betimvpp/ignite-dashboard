import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from './ui/dropdown-menu'
import { Button } from './ui/button'
import { ChevronDown, LogOut, Store, UserCircle } from 'lucide-react'

export default function AccountMenu() {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" className='flex items-center gap-2 select-none'>
                    <UserCircle />
                    Seu Perfil
                    <ChevronDown />
                </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent align='end' className='w-56'>
                <DropdownMenuLabel className='flex flex-col'>
                    <span>Nome do Usuário</span>
                    <span className='text-sm font-normal text-muted-foreground'>email@exemplo.com</span>
                </DropdownMenuLabel>

                <DropdownMenuSeparator />

                <DropdownMenuItem className='cursor-pointer'>
                    <Store className='w-4 h-4 mr-2'/>
                    <span>Perfil do estabelecimento</span>
                </DropdownMenuItem>

                <DropdownMenuItem className='text-rose-500 dark:text-red-400 cursor-pointer'>
                    <LogOut className='w-4 h-4 mr-2'/>
                    <span>Sair</span>
                </DropdownMenuItem>

            </DropdownMenuContent>
        </DropdownMenu>
    )
}

