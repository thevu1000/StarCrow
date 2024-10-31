import { useQuery, keepPreviousData } from '@tanstack/react-query';
import { fetchProducts, fetchProductsByBrandAndType, fetchProductsByIdRange, fetchRandomProducts, fetchProductById, fetchProductsByType } from '@/api/fetchData';

export const useFetchProducts = (
    brand: string = '',
    type: string = '',
    id1: number | null = null,
    id2: number | null = null,
    productId: number | null = null,
    fetchRandom: boolean = false
) => {
    const queryKey = ['products', brand, type, id1, id2, productId, fetchRandom];

    const { data, error, isLoading } = useQuery({
        queryKey,
        queryFn: () => {
            if (productId !== null) {
                return fetchProductById(productId);
            } else if (fetchRandom) {
                return fetchRandomProducts();
            } else if (id1 !== null && id2 !== null) {
                return fetchProductsByIdRange(id1, id2);
            } else if (brand && type) {
                return fetchProductsByBrandAndType(brand, type);
            } else if (type) {
                return fetchProductsByType(type);
            } else {
                return fetchProducts();
            }
        },
        placeholderData: keepPreviousData,
        refetchOnMount: false,
        refetchOnWindowFocus: false,
        staleTime: 1000 * 60 * 5,
    });

    return { data, error, isLoading };
};
