import { env } from '@/env';
import { setupWorker } from 'msw/browser';
import { signInMock } from './sign-in-mock';
import { registerRestaurantMock } from './register-restaurant-mock';
import { getDayOrdersAmountMock } from './get-day-orders-amount';
import { getMonthOrdersAmountMock } from './get-months-order-amount';
import { getMonthCanceledOrdersAmountMock } from './get-month-canceled';
import { getMonthRevenueMock } from './get-month-revenue';
import { getDailyRevenueInPeriodMock } from './get-daily-revenue-in-period-mock';
import { getPopularProductsMock } from './get-popular-products-mock';
import { getProfileMock } from './get-profile-mock';
import { getManagedRestaurantMock } from './get-managed-restaurant-mock';
import { updateProfileMock } from './update-profile-mock';
import { getOrdersMock } from './get-orders-mocks';
import { getOrderDetailsMock } from './get-order-details-mock';
import { approveOrderMock } from './approve-order-mock';
import { cancelOrderMock } from './cancel-order-mock';
import { deliverOrderMock } from './deliver-order-mock';
import { dispatchOrderMock } from './dispatch-order-mock';
import { getProductsMock } from './get-products-mock';
import { getEmployeesMock } from './get-employees-mock';

export const worker = setupWorker(
    signInMock,
    registerRestaurantMock,
    getDayOrdersAmountMock,
    getMonthOrdersAmountMock,
    getMonthCanceledOrdersAmountMock,
    getMonthRevenueMock,
    getDailyRevenueInPeriodMock,
    getPopularProductsMock,
    getProfileMock,
    getManagedRestaurantMock,
    updateProfileMock,
    getOrdersMock,
    getOrderDetailsMock,
    cancelOrderMock,
    approveOrderMock,
    deliverOrderMock,
    dispatchOrderMock,
    getProductsMock,
    getEmployeesMock
)

export async function enableMSW() {
    if (env.MODE !== 'test') {
        return
    }

    await worker.start()
}