import { useState } from 'react'
// import { useMutation, useQueryClient } from '@tanstack/react-query'

import { Button } from '@/components/ui/button'
import { TableCell, TableRow } from '@/components/ui/table'
import { Search } from 'lucide-react'
import { Dialog, DialogTrigger } from '@/components/ui/dialog'
// import EmployeeDetails from './employees-details'
// import { removeEmployee } from '@/api/remove-employee'

interface EmployeeTableRowProps {
    employee: {
        employeeId: string;
        employedAt: string;
        employeeName: string;
        phone: string;
        status: "ativo" | "inativo" | "all";
    }
}

export function EmployeeTableRow({ employee }: EmployeeTableRowProps) {
    const [isDetailsOpen, setIsDetailsOpen] = useState(false);

    return (
        <TableRow>
            <TableCell>
                <Dialog open={isDetailsOpen} onOpenChange={setIsDetailsOpen}>
                    <DialogTrigger asChild>
                        <Button variant="outline" size="xs">
                            <Search className="h-3 w-3" />
                            <span className="sr-only">Detalhes do pedido</span>
                        </Button>
                    </DialogTrigger>
                    {/* <EmployeeDetails open={isDetailsOpen} employeeId={employee.employeeId} /> */}
                </Dialog>
            </TableCell>

            <TableCell className="font-mono text-xs font-medium">
                {employee.employeeId}
            </TableCell>

            <TableCell>
                {employee.employeeName}
            </TableCell>

            <TableCell>
                {employee.employedAt}
            </TableCell>

            <TableCell>
                {employee.phone}
            </TableCell>

            <TableCell>
                {employee.status === "ativo" ? (
                    <div className='flex items-center gap-1'>
                        <div className='h-3 w-3 rounded-full bg-green-500'></div>
                        <p>Ativo</p>
                    </div>
                ) : (
                    <div className='flex items-center gap-1'>
                        <div className='h-3 w-3 rounded-full bg-red-500'></div>
                        <p>Inativo</p>
                    </div>
                )}


            </TableCell>
        </TableRow >
    )
}