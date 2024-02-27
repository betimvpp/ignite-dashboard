import { api } from "@/lib/axios";

export interface GetProductDetailsParams {
    productId: string
};

export interface GetProductDetailsResponse {
    id: string;
    category: string;
    totalInCents: number;
    productName: string;
    total: number;
    productItems: {
        id: string,
        priceInCents: number,
        quantity: number,
        product: {
            name: string
        }
    }[]
};

export async function getProductDetails({ productId }: GetProductDetailsParams) {
    const response = await api.get<GetProductDetailsResponse>(`/products/${productId}`);

    return response.data;
};