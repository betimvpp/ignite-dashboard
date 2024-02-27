import { Pagination } from "@/components/pagination";
import { Table, TableBody, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Helmet } from "react-helmet-async";
import { ProductTableRow } from "../products/product-table-row";
import { ProductTableSkeleton } from "../products/product-table-skeleton";
import { ProductTableFilters } from "./product-table-filter";
import { z } from "zod";
import { useSearchParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "@/api/get-products";

export function Products() {
  const [searchParams, setSearchParams] = useSearchParams()

  const productId = searchParams.get('productId')
  const productName = searchParams.get('productName')
  const category = searchParams.get('category')
  const quantity = searchParams.get('quantity')

  const pageIndex = z.coerce
    .number()
    .transform((page) => page - 1)
    .parse(searchParams.get('page') ?? '1')

  const { data: result, isLoading: isLoadingProducts } = useQuery({
    queryKey: ['products', pageIndex, productId, productName, category, quantity],
    queryFn: () =>
      getProducts({
        pageIndex,
        productId,
        productName,
        category: category === 'all' ? null : category,
        quantity
      }),
  })

  function handlePaginate(pageIndex: number) {
    setSearchParams((state) => {
      state.set('page', (pageIndex + 1).toString())

      return state
    })
  }

  return (
    <>
      <Helmet title="Produtos" />

      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Produtos</h1>
        <div className="space-y-2.5">
          <ProductTableFilters />

          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[64px]"></TableHead>
                  <TableHead className="w-[140px]">Identificador</TableHead>
                  <TableHead>Nome do Produto</TableHead>
                  <TableHead className="w-[140px]">Categoria</TableHead>
                  <TableHead className="w-[140px]">Valor</TableHead>
                  <TableHead className="w-[164px]">Estoque</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {result &&
                  result.products.map((product) => {
                    return <ProductTableRow key={product.productId} product={product} />
                  })}
              </TableBody>
            </Table>
          </div>
          {isLoadingProducts === true && <ProductTableSkeleton />}

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
    </>
  )
}
