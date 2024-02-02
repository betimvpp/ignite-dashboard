import { CartesianGrid, Line, LineChart, ResponsiveContainer, XAxis, YAxis, } from 'recharts'
import colors from 'tailwindcss/colors'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const data = [
    { date: '10/12', revenue: Number(Math.floor(Math.random() * (90 | 900)) + (10 | 100)).toFixed(2) },
    { date: '11/12', revenue: Number(Math.floor(Math.random() * (90 | 900)) + (10 | 100)).toFixed(2) },
    { date: '12/12', revenue: Number(Math.floor(Math.random() * (90 | 900)) + (10 | 100)).toFixed(2) },
    { date: '13/12', revenue: Number(Math.floor(Math.random() * (90 | 900)) + (10 | 100)).toFixed(2) },
    { date: '14/12', revenue: Number(Math.floor(Math.random() * (90 | 900)) + (10 | 100)).toFixed(2) },
    { date: '15/12', revenue: Number(Math.floor(Math.random() * (90 | 900)) + (10 | 100)).toFixed(2) },
    { date: '16/12', revenue: Number(Math.floor(Math.random() * (90 | 900)) + (10 | 100)).toFixed(2) },
]

export default function Revenue() {
    return (
        <Card className="col-span-6">
            <CardHeader className="flex-row items-center justify-between pb-8">
                <div className="space-y-1">
                    <CardTitle className="text-base font-medium">
                        Receita no período
                    </CardTitle>
                    <CardDescription>Receita diária no período</CardDescription>
                </div>
            </CardHeader>
            <CardContent>
                <ResponsiveContainer width="100%" height={240}>
                    <LineChart data={data} style={{ fontSize: 12 }}>
                        <XAxis dataKey="date" axisLine={false} tickLine={false} dy={14} dx={10}/>
                        <YAxis
                            stroke="#888"
                            axisLine={false}
                            tickLine={false}
                            width={80}
                            tickFormatter={(value: number) =>
                                value.toLocaleString('pt-BR', {
                                    style: 'currency',
                                    currency: 'BRL',
                                })
                            }
                        />
                        <CartesianGrid vertical={false} className='stroke-muted'/>
                        <Line
                            stroke={colors.zinc[500]}
                            type="linear"
                            strokeWidth={2}
                            dataKey="revenue"
                        />
                    </LineChart>
                </ResponsiveContainer>
            </CardContent>
        </Card>
    )
}