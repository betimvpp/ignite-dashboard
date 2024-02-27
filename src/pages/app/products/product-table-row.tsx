import { useState } from 'react'
// import { useMutation, useQueryClient } from '@tanstack/react-query'

import { Button } from '@/components/ui/button'
import { TableCell, TableRow } from '@/components/ui/table'
import { Search} from 'lucide-react'
import { Dialog, DialogTrigger } from '@/components/ui/dialog'
import ProductDetails from './product-details'
// import { removeProduct } from '@/api/remove-product'

interface ProductTableRowProps {
    product: {
        productId: string;
        createdAt: string;
        category: string;
        productName: string;
        total: number;
        quantity: string;
    }
}

export function ProductTableRow({ product }: ProductTableRowProps) {
    const [isDetailsOpen, setIsDetailsOpen] = useState(false);
    // const queryClient = useQueryClient()

    // const { mutateAsync: removeProductFn } =
    //     useMutation({
    //         mutationFn: removeProduct,
    //         async onSuccess(_, { productId }) {

    //         },
    //     })

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
                    <ProductDetails open={isDetailsOpen} productId={product.productId} />
                </Dialog>
            </TableCell>

            <TableCell className="font-mono text-xs font-medium">
                {product.productId}
            </TableCell>

            <TableCell>
                {product.productName}
            </TableCell>

            <TableCell>
                <div className=" flex items-center gap-2">
                    <span className="font-medium text-muted-foreground">{product.category}</span>
                </div>
            </TableCell>

            <TableCell className="font-medium">
                {(product.total / 10).toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                })}
            </TableCell>


            <TableCell>
                {product.quantity}
            </TableCell>
        </TableRow >
    )
}
