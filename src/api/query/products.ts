import { useQuery, UseQueryResult } from '@tanstack/react-query';
import {
    fetchProducts,
    fetchProductsByBrandAndType,
    fetchProductsByIdRange,
    fetchRandomProducts,
    fetchProductById,
    fetchAllProductByBrand
} from '@/api/fetchData';
import { Product } from "@/types/type";



export const useFetchProductById = (productId: number): UseQueryResult<Product, Error> => {
    return useQuery({
        queryKey: ['product', productId],
        queryFn: () => fetchProductById(productId),
        refetchOnMount: false,
        refetchOnWindowFocus: false,
        staleTime: 1000 * 60 * 5,
    });
};


export const useFetchRandomProducts = (): UseQueryResult<Product[], Error> => {
    return useQuery({
        queryKey: ['randomProducts'],
        queryFn: fetchRandomProducts,
        refetchOnMount: false,
        refetchOnWindowFocus: false,
        staleTime: 1000 * 60 * 5,
    });
};


export const useFetchProductsByIdRange = (id1: number, id2: number): UseQueryResult<Product[], Error> => {
    return useQuery({
        queryKey: ['productsByIdRange', id1, id2],
        queryFn: () => fetchProductsByIdRange(id1, id2),
        refetchOnMount: false,
        refetchOnWindowFocus: false,
        staleTime: 1000 * 60 * 5,
    });
};


export const useFetchProductsByBrandAndType = (
    brand: string,
    type: string,
    currentPage: number,
    pageSize: number
): UseQueryResult<Product[], Error> => {
    return useQuery({
        queryKey: ['productsByBrandAndType', brand, type, currentPage, pageSize],
        queryFn: () => fetchProductsByBrandAndType(brand, type, currentPage, pageSize),
        refetchOnMount: false,
        refetchOnWindowFocus: false,
        staleTime: 1000 * 60 * 5,
    });
};


export const useFetchAllProducts = (): UseQueryResult<Product[], Error> => {
    return useQuery({
        queryKey: ['allProducts'],
        queryFn: fetchProducts,
        refetchOnMount: false,
        refetchOnWindowFocus: false,
        staleTime: 1000 * 60 * 5,
    });
};

export const useFetchTotalProductsByBrand = (brand: string): UseQueryResult<number, Error> => {
    return useQuery({
        queryKey: ['totalProductsByBrand', brand],
        queryFn: () => fetchAllProductByBrand(brand),
        refetchOnMount: false,
        refetchOnWindowFocus: false,
        staleTime: 1000 * 60 * 5,
    });
};
