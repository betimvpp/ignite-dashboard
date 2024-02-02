import { Button } from '@/components/ui/button'
import { TableCell, TableRow } from '@/components/ui/table'
import { differenceInMinutes, subMinutes } from 'date-fns'
import { Check, Search, X } from 'lucide-react'

export default function OrderTableRow(key:any) {
    return (
        <TableRow key={key}>
            <TableCell>
                <Button variant="outline" size="xs">
                    <Search className="h-3 w-3" />
                    <span className="sr-only">Detalhes do pedido</span>
                </Button>
            </TableCell>

            <TableCell className="font-mono text-xs font-medium">
                {Math.floor(Math.random() * 1000000000)}
            </TableCell>

            <TableCell>
                há {differenceInMinutes(new Date(), subMinutes(new Date(), Math.floor(Math.random() * 60) + 1))} minutos atrás.
            </TableCell>

            <TableCell>
                <div className=" flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-slate-400" />
                    <span className="font-medium text-muted-foreground">Pendente</span>
                </div>
            </TableCell>

            <TableCell className="font-medium">
                Nome do cliente
            </TableCell>

            <TableCell className="font-medium">
                R${Number(Math.floor(Math.random() * (90 | 900)) + (10 | 100)).toFixed(2)}
            </TableCell>

            <TableCell>
                <Button variant="default" size="xs">
                    <Check className="mr-2 h-3 w-3" />
                    Aprovar
                </Button>
            </TableCell>

            <TableCell>
                <Button variant="destructive" size="xs">
                    <X className="mr-2 h-3 w-3" />
                    Cancelar
                </Button>
            </TableCell>
        </TableRow>
    )
}
