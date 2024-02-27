import { HttpResponse, http } from "msw";
import { GetProductsResponse } from "../get-products";

type Products = GetProductsResponse['products']

type OrderCategory = GetProductsResponse['products'][number]['category']

const categoryes: OrderCategory[] = [
    'Cerveja',
    'Petisco',
    'Porções',
    'Drink',
    'Aperitivo',
]

const products: Products = Array.from({ length: 60 }).map((_, i) => {
    return {
        productId: `${Math.floor(Math.random() * 10000000000)}`,
        productName: `Product ${i + 1}`,
        createdAt: new Date().toISOString(),
        total: Math.floor(Math.random() * 3340) + 35,
        category: categoryes[i % 5],
        quantity: `${Math.floor(Math.random() * 200) + 1}`,
    }
})

export const getProductsMock = http.get<never, never, GetProductsResponse>(
    '/products',
    async ({ request }) => {
        const { searchParams } = new URL(request.url)

        const pageIndex = searchParams.get('pageIndex')
            ? Number(searchParams.get('pageIndex'))
            : 0
        const productName = searchParams.get('productName')
        const productId = searchParams.get('productId')
        const category = searchParams.get('category')

        let filteredProducts = products

        if (productName) {
            filteredProducts = filteredProducts.filter((product) =>
                product.productName.includes(productName)
            )
        }

        if (productId) {
            filteredProducts = filteredProducts.filter((product) =>
                product.productId.includes(productId)
            )
        }

        if (category) {
            filteredProducts = filteredProducts.filter((product) =>
                product.category === category
            )
        }

        const paginatedProducts = filteredProducts.slice(
            pageIndex * 10,
            (pageIndex + 1) * 10,
        )

        return HttpResponse.json({
            products: paginatedProducts,
            meta: {
                pageIndex,
                perPage: 10,
                totalCount: filteredProducts.length,
            }
        })
    }
)