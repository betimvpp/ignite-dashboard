import { api } from '@/lib/axios';

export interface RemoveProductParams {
    productId: string
}

export async function removeProduct({ productId }: RemoveProductParams) {
    if (!productId) {
        throw new Error('O productId é necessário para deletar o produto.');
    }

    try {
        const response = await api.delete(`/products/${productId}`); 
        return response.data;
    } catch (error) {
        throw error;
    }
}