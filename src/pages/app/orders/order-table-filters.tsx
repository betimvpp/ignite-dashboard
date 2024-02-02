import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Search, X } from 'lucide-react'

export default function OrderTableFilters() {
    return (
        <form className="flex items-center gap-2">
            <span className="text-sm font-semibold">Filtros:</span>
            <Input placeholder="Nome do cliente" className="h-8 w-[320px]" />
            <Select defaultValue='all'>
                <SelectTrigger  className='h-8 w-[180px]' >
                    <span className='text-xs text-muted-foreground'>Status: </span>
                    <SelectValue/>
                </SelectTrigger>

                <SelectContent>
                    <SelectItem className='cursor-pointer' value='all'>Todos</SelectItem>
                    <SelectItem className='cursor-pointer' value='pending'>Pendente</SelectItem>
                    <SelectItem className='cursor-pointer' value='canceled'>Cancelado</SelectItem>
                    <SelectItem className='cursor-pointer' value='processing'>Em andamento</SelectItem>
                    <SelectItem className='cursor-pointer' value='delivering'>Em Entrega</SelectItem>
                    <SelectItem className='cursor-pointer' value='delivered'>Concluído</SelectItem>
                </SelectContent>
            </Select>
            <Button type='submit' variant='secondary' size='xs'>
                <Search className='h-4 w-4 mr-2'/>
                Filtrar resultado
            </Button>

            <Button type='button' variant='outline' size='xs'>
                <X  className='h-4 w-4 mr-2'/>
                Remover Filtros
            </Button>
        </form>
    )
}
