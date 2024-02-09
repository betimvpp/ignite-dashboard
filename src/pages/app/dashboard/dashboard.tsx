
import { Helmet } from 'react-helmet-async'
import MonthRevenueCard from './Cards/month-revenue'
import MonthOrdersAmountCard from './Cards/month-orders-amount'
import DayOrdersAmountCard from './Cards/day-orders-amount'
import { MonthCanceledOrdersAmountCard } from './Cards/month-canceled-orders-amount'
import { Revenue } from './Chart/revenue'
import PorpularProducts from './Chart/popular-products'

export function Dashboard() {
  return (
    <>
      <Helmet title="Dashboard" />
      <div className='flex flex-col gap-4'>
        <h1 className='text-3xl font-bold tracking-tight'>Dashboard</h1>

        <div className='grid grid-cols-4 gap-4'>
          <MonthRevenueCard />
          <MonthOrdersAmountCard />
          <DayOrdersAmountCard />
          <MonthCanceledOrdersAmountCard />
        </div>

        <div className='grid grid-cols-9 gap-4'>
          <Revenue />
          <PorpularProducts />
        </div>
      </div>
    </>
  )
}
