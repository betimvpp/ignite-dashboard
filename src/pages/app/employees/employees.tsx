import { Pagination } from "@/components/pagination";
import { Table, TableBody, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Helmet } from "react-helmet-async";
import result from "postcss/lib/result";
import { OrderTableRow } from "../orders/order-table-row";
import { OrderTableSkeleton } from "../orders/order-table-skeletorn";
import { EmployeeTableFilters } from "./employees-table-filter";

export function Employees() {
  return (
    <>
      <Helmet title="Produtos" />

      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Produtos</h1>
        <div className="space-y-2.5">
          <EmployeeTableFilters />

          <div className="rounded-md border ">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[140px]">Identificador</TableHead>
                  <TableHead>Nome do Funcionario</TableHead>
                  <TableHead className="w-[140px]">Data de Inicio</TableHead>
                  <TableHead className="w-[140px]"></TableHead>
                  <TableHead className="w-[164px]"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {/* {result &&
                  result.orders.map((order) => {
                    return <OrderTableRow key={order.orderId} order={order} />
                  })} */}
              </TableBody>
            </Table>
          </div>
          {/* {isLoadingOrders && <OrderTableSkeleton />} */}

          {result && (
            <Pagination
              onPageChange={() => console.log("mudou")}
              pageIndex={0}
              totalCount={105}
              perPage={10}
            />
          )}
        </div>
      </div>
    </>
  )
}
