import React, { useEffect, useState } from "react"; // Import useEffect and useState
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import ProductItem from '@/components/shared/ProductItem/index';
import { useFetchProducts } from '@/api/query/products';

interface Product {
    id: number;
    img: string;
    imgHover: string;
    name: string;
    description: string;
    price: string;
    brand: string;
    options: []; // Cập nhật kiểu nếu cần
}

function AsicsFootwear() {
    const [slidesToScroll, setSlidesToScroll] = useState(1);
    const { data, isLoading } = useFetchProducts('', '', 4, 15);
    const footwearItems: Product[] = data || [];

    useEffect(() => {
        const handleResize = () => {
            setSlidesToScroll(window.innerWidth >= 1024 ? 6 : 1);
        };

        handleResize();
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div>
            <Carousel opts={{
                align: "start",
                slidesToScroll: slidesToScroll,
            }}>
                <CarouselContent>
                    {isLoading ? (
                        <div>Loading...</div>
                    ) : (
                        footwearItems.map((item: Product) => ( 
                            <CarouselItem key={item.id} className="basis-1/2 lg:basis-1/6">
                                <ProductItem product={item} fontSize="12px" />
                            </CarouselItem>
                        ))
                    )}
                </CarouselContent>
                <CarouselPrevious className="hidden lg:block bg-black text-white hover:bg-black hover:text-white" />
                <CarouselNext className="hidden lg:block bg-black text-white hover:bg-black hover:text-white" />
            </Carousel>
        </div>
    );
}

export default AsicsFootwear;
