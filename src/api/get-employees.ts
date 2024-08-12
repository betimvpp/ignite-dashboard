import { api } from '@/lib/axios'

export interface GetEmployeesQuery {
    pageIndex?: number | null
    employeeId?: string | null
    employeeName?: string | null
    employedAt?: string | null
    phone?: string | null
    status?: string | null
}

export interface GetEmployeesResponse {
    employees: {
        employeeId: string
        employeeName: string
        employedAt: string
        phone: string
        status: string
    }[]
    meta: {
        pageIndex: number
        perPage: number
        totalCount: number
    }
}

export async function getEmployees({
    pageIndex,
    employeeName,
    employeeId,
    employedAt,
    phone,
    status
}: GetEmployeesQuery) {
    const response = await api.get<GetEmployeesResponse>('/employees', {
        params: {
            pageIndex,
            employeeId,
            employeeName,
            employedAt,
            phone,
            status
        },
    })

    return response.data
}