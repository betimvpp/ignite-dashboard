import { HttpResponse, http } from "msw";
import { GetEmployeesResponse } from "../get-employees";
import { employeesData } from "./employeesData/employeesData";

type Employees = GetEmployeesResponse['employees']

const employees: Employees = employeesData.map(employee => ({
  employeeId: employee.employeeId,
  employeeName: employee.employeeName,
  employedAt: employee.employedAt,
  phone: employee.phone,
  status: employee.status,
}));

export const getEmployeesMock = http.get<never, never, GetEmployeesResponse>(
  '/employees',
  async ({ request }) => {
    const { searchParams } = new URL(request.url);

    const pageIndex = searchParams.get('pageIndex') 
      ? Number(searchParams.get('pageIndex')) 
      : 0;
    const employeeName = searchParams.get('employeeName') || '';
    const employeeId = searchParams.get('employeeId') || '';
    const employedAt = searchParams.get('employedAt') || '';
    const phone = searchParams.get('phone') || '';
    const status = searchParams.get('status') || 'all';

    let filteredEmployees = employees;

    if (employeeName) {
      filteredEmployees = filteredEmployees.filter(employee =>
        employee.employeeName.toLowerCase().includes(employeeName.toLowerCase())
      );
    }

    if (employeeId) {
      filteredEmployees = filteredEmployees.filter(employee =>
        employee.employeeId.includes(employeeId)
      );
    }

    if (employedAt) {
      filteredEmployees = filteredEmployees.filter(employee =>
        employee.employedAt.includes(employedAt)
      );
    }

    if (phone) {
      filteredEmployees = filteredEmployees.filter(employee =>
        employee.phone.includes(phone)
      );
    }

    if (status !== 'all') {
      filteredEmployees = filteredEmployees.filter(employee =>
        employee.status === status
      );
    }

    const paginatedEmployees = filteredEmployees.slice(
      pageIndex * 10,
      (pageIndex + 1) * 10
    );

    return HttpResponse.json({
      employees: paginatedEmployees,
      meta: {
        pageIndex,
        perPage: 10,
        totalCount: filteredEmployees.length
      }
    });
  }
);
