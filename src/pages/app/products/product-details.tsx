import { useQuery } from '@tanstack/react-query';

import { getProductDetails } from '@/api/get-product-details';

import { DialogContent, DialogDescription, DialogHeader, DialogTitle, } from '@/components/ui/dialog'
import { Table, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow, } from '@/components/ui/table'
import { ProductDetailsSkeleton } from './product-details-skeleton';

export interface ProductDetailsProps {
  productId: string;
  open: boolean;
}

export default function ProductDetails({ productId, open }: ProductDetailsProps) {
  const { data: product } = useQuery({
    queryKey: ['products', productId],
    queryFn: () => getProductDetails({ productId }),
    enabled: open,
  })

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Produto: {productId}</DialogTitle>
        <DialogDescription>Detalhes do produto</DialogDescription>
      </DialogHeader>

      {product ? (
        <div className="space-y-6">
          <Table>
            <TableBody>
              <TableRow>
                <TableCell className="text-muted-foreground">Nome</TableCell>
                <TableCell className="flex justify-end">
                  {product.category}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="text-muted-foreground">Categoria</TableCell>
                <TableCell className="flex justify-end">
                  {product.productName}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="text-muted-foreground">
                  Valor
                </TableCell>
                <TableCell className="flex justify-end">
                  {product.total}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="text-muted-foreground">Estoque</TableCell>
                <TableCell className="flex justify-end">
                  {product.total}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Produto</TableHead>
                <TableHead className="text-right">Qtd.</TableHead>
                <TableHead className="text-right">Preço</TableHead>
                <TableHead className="text-right">Subtotal</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {product?.productItems?.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>{item.product.name}</TableCell>
                  <TableCell className="text-right">{item.quantity}</TableCell>
                  <TableCell className="text-right">
                    {(item.priceInCents / 10).toLocaleString('pt-BR', {
                      style: 'currency',
                      currency: 'BRL',
                    })}
                  </TableCell>
                  <TableCell className="text-right">
                    {((item.priceInCents * item.quantity) / 10).toLocaleString(
                      'pt-BR',
                      {
                        style: 'currency',
                        currency: 'BRL',
                      },
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TableCell colSpan={3}>Total do pedido</TableCell>
                <TableCell className="text-right font-medium">
                  {(product.totalInCents / 10).toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                  })}
                </TableCell>
              </TableRow>
            </TableFooter>
          </Table>
        </div>
      ) : (
        <ProductDetailsSkeleton />
      )
      }
    </DialogContent>
  )
}
