import { getMonthOrdersAmount } from '@/api/get-month-orders-amount'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { useQuery } from '@tanstack/react-query'
import { ArrowUpDown } from 'lucide-react'
import { MetricCardSkeleton } from './metric-skeleton'

export default function MonthOrdersAmountCard() {
    const { data: monthOrdersAmount } = useQuery({
        queryKey: ['metrics', 'month_orders_amount'],
        queryFn: getMonthOrdersAmount
    })
    return (
        <Card>
            <CardHeader className='flex-row space-y-0 items-center justify-between pb-2'>
                <CardTitle className='text-base font-semibold'>Pedidos (mês):</CardTitle>
                <ArrowUpDown className='h-4 w-4 text-muted-foreground' />
            </CardHeader>
            <CardContent className='space-y-1'>
                {monthOrdersAmount ? (
                    <>
                        <span className="text-2xl font-bold tracking-tight">
                            {monthOrdersAmount.amount.toLocaleString('pt-BR')}
                        </span>
                        <p className="text-xs text-muted-foreground">
                            {monthOrdersAmount.diffFromLastMonth >= 0 ? (
                                <>
                                    <span className="text-emerald-500 dark:text-emerald-400">
                                        +{monthOrdersAmount.diffFromLastMonth}%
                                    </span>{' '}
                                    em relação ao mês passado
                                </>
                            ) : (
                                <>
                                    <span className="text-rose-500 dark:text-rose-400">
                                        {monthOrdersAmount.diffFromLastMonth}%
                                    </span>{' '}
                                    em relação ao mês passado
                                </>
                            )}
                        </p>
                    </>
                ) : (
                    <MetricCardSkeleton />
                )}
            </CardContent>
        </Card>
    )
}
