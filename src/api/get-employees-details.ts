import { api } from "@/lib/axios";

export interface GetEmployeesDetailsParams {
    employeeId: string
};

export interface GetEmployeesDetailsResponse {
    id: string;
    employeeName: string;
    employedAt: string;
    phone?: number;
    email?: string;
    gender?:string;
};

export async function getEmployeesDetails({ employeeId }: GetEmployeesDetailsParams) {
    const response = await api.get<GetEmployeesDetailsResponse>(`/employees/${employeeId}`);

    return response.data;
};