import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { DollarSign } from 'lucide-react'

export default function MonthRevenueCard() {
    return (
        <Card>
            <CardHeader className='flex-row space-y-0 items-center justify-between pb-2'>
                <CardTitle className='text-base font-semibold'>Receita total:</CardTitle>
                <DollarSign className='h-4 w-4 text-muted-foreground' />
            </CardHeader>
            <CardContent className='space-y-1'>
                <span className='text-2xl font-bold tracking-tight'>
                    R${Number(Math.floor(Math.random() * (90 | 900)) + (10 | 100)).toFixed(2)}
                </span>
                <p className='text-xs text-muted-foreground'>
                    <span className='text-emerald-500 dark:text-emerald-400'>+{Number(Math.floor(Math.random() * 10) + 1)}% </span>
                    em relação ao mes passado
                </p>
            </CardContent>
        </Card>
    )
}
