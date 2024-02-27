import { api } from '@/lib/axios'

export interface GetProductsQuery {
  pageIndex?: number | null
  productId?: string | null
  productName?: string | null
  category?: string | null
  quantity:string | null
}

export interface GetProductsResponse {
  products: {
    productId: string
    createdAt: string
    category: string
    productName: string
    total: number
    quantity: string
  }[]
  meta: {
    pageIndex: number
    perPage: number
    totalCount: number
  }
}

export async function getProducts({
  pageIndex,
  productName,
  productId,
  category,
  quantity
}: GetProductsQuery) {
  const response = await api.get<GetProductsResponse>('/products', {
    params: {
      pageIndex,
      productId,
      productName,
      category,
      quantity
    },
  })

  return response.data
}