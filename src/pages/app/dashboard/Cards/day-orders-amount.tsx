import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { HandCoins } from 'lucide-react'

export default function DayOrdersAmountCard() {
    return (
        <Card>
            <CardHeader className='flex-row space-y-0 items-center justify-between pb-2'>
                <CardTitle className='text-base font-semibold'>Pedidos (hoje):</CardTitle>
                <HandCoins className='h-4 w-4 text-muted-foreground' />
            </CardHeader>
            <CardContent className='space-y-1'>
                <span className='text-2xl font-bold tracking-tight'>
                    {Number(Math.floor(Math.random() * 9) + (1 | 10))} pedidos
                </span>
                <p className='text-xs text-muted-foreground'>
                    <span className='text-rose-500 dark:text-rose-400'>-{Number(Math.floor(Math.random() * 10) + 1)}% </span>
                    em relação a ontem
                </p>
            </CardContent>
        </Card>
    )
}

