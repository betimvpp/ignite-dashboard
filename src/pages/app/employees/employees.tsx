import { Pagination } from "@/components/pagination";
import { Table, TableBody, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Helmet } from "react-helmet-async";

import { EmployeeTableFilters } from "./employees-table-filter";
import { useSearchParams } from "react-router-dom";
import { z } from "zod";
import { useQuery } from "@tanstack/react-query";
import { getEmployees } from "@/api/get-employees";
import { EmployeeTableRow } from "./employees-table-row";
import { EmployeeTableSkeleton } from "./employees-table-skeleton";

export function Employees() {
  const [searchParams, setSearchParams] = useSearchParams()

  const employeeId = searchParams.get('employeeId')
  const employeeName = searchParams.get('employeeName')
  const employedAt = searchParams.get('employedAt')
  const phone = searchParams.get('phone')
  const status = searchParams.get('status')

  const pageIndex = z.coerce
    .number()
    .transform((page) => page - 1)
    .parse(searchParams.get('page') ?? '1')

  const { data: result, isLoading: isLoadingEmployees } = useQuery({
    queryKey: ['employees', pageIndex, employeeId, employeeName, employedAt, phone, status],
    queryFn: () =>
      getEmployees({
        pageIndex,
        employeeId,
        employeeName,
        employedAt,
        phone,
        status
      }),
  })

  function handlePaginate(pageIndex: number) {
    setSearchParams((state) => {
      state.set('page', (pageIndex + 1).toString())

      return state
    })
  }

  return (
    <div className="">
      <Helmet title="Funcionários" />

      <div className="flex flex-col gap-4 ">
        <h1 className="text-3xl font-bold tracking-tight">Funcionários</h1>
        <div className="space-y-2.5">
          <EmployeeTableFilters />

          <div className="rounded-md border ">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[64px]"></TableHead>
                  <TableHead className="w-[140px]">Identificador</TableHead>
                  <TableHead>Nome do Funcionario</TableHead>
                  <TableHead className="w-[140px]">Data de Inicio</TableHead>
                  <TableHead className="w-[140px]">Telefone</TableHead>
                  <TableHead className="w-[64px]">Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {result && 
                  result.employees.map((employee: any) => (
                    <EmployeeTableRow key={employee.employeeId} employee={employee} />
                  ))
                }
              </TableBody>
            </Table>
          </div>
          {isLoadingEmployees && <EmployeeTableSkeleton />}

          {result && (
            <Pagination
              onPageChange={handlePaginate}
              pageIndex={result.meta.pageIndex}
              totalCount={result.meta.totalCount}
              perPage={result.meta.perPage}
            />
          )}
        </div>
      </div>
    </div>
  )
}
