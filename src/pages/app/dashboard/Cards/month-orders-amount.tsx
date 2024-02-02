import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowUpDown } from 'lucide-react'

export default function MonthOrdersAmountCard() {
    return (
        <Card>
            <CardHeader className='flex-row space-y-0 items-center justify-between pb-2'>
                <CardTitle className='text-base font-semibold'>Pedidos (mês):</CardTitle>
                <ArrowUpDown className='h-4 w-4 text-muted-foreground' />
            </CardHeader>
            <CardContent className='space-y-1'>
                <span className='text-2xl font-bold tracking-tight'>
                    {Number(Math.floor(Math.random() * (9 | 90)) + (1 | 10))} pedidos
                </span>
                <p className='text-xs text-muted-foreground'>
                    <span className='text-emerald-500 dark:text-emerald-400'>+{Number(Math.floor(Math.random() * 100) + 1)}% </span>
                    em relação ao mes passado
                </p>
            </CardContent>
        </Card>
    )
}
