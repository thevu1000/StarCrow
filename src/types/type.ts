// src/types.ts
export interface Product {
    img: string;
    imgHover: string;
    name: string;
    brand: string;
    price: string;
    id: number;
    options: [];
    quantity: number;
}

export interface FilterOption {
    name: string;
    options?: string[];
    type: string;
}
