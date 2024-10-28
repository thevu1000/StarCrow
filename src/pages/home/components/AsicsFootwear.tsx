import React, { useEffect, useState } from "react"; // Import useEffect and useState
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import {
    img1, img1_hover, img2, img2_hover, img3, img3_hover, img4, img4_hover,
    img5, img5_hover, img6, img6_hover, img7, img7_hover, img8, img8_hover,
    img9, img9_hover
} from '@/assets/images';
import ProductItem from '@/components/shared/ProductItem/index';

function AsicsFootwear() {
    const [slidesToScroll, setSlidesToScroll] = useState(1); // State for slidesToScroll

    useEffect(() => {
        const handleResize = () => {
            setSlidesToScroll(window.innerWidth >= 1024 ? 6 : 1);
        };

        handleResize();

        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);
    

    const footwearItems = [
        {
            id: 1,
            name: "ASICS",
            description: "Gel Nimbus 10.1 Black Grand Shark",
            price: "170,00",
            img: img1,
            imgHover: img1_hover,
        },
        {
            id: 2,
            name: "ASICS",
            description: "GT-2160 Piedmont Grey",
            price: "130,00",
            img: img2,
            imgHover: img2_hover,
        },
        {
            id: 3,
            name: "ASICS",
            description: "Gel NYC Reddish Brown Black",
            price: "150,00",
            img: img3,
            imgHover: img3_hover,
        },
        {
            id: 4,
            name: "ASICS",
            description: "Gel NYC White Feather Grey",
            price: "150,00",
            img: img4,
            imgHover: img4_hover,
        },
        {
            id: 5,
            name: "ASICS",
            description: "GEL-Quantum 360 VIII Digitune",
            price: "190,00",
            img: img5,
            imgHover: img5_hover,
        },
        {
            id: 6,
            name: "ASICS",
            description: "Gel Kayano 14 Cream Denim Blue",
            price: "160,00",
            img: img6,
            imgHover: img6_hover,
        },
        {
            id: 7,
            name: "ASICS",
            description: "Gel Venture 6 SHIELD Mauve Grey",
            price: "130,00",
            img: img7,
            imgHover: img7_hover,
        },
        {
            id: 8,
            name: "ASICS",
            description: "Gel Venture 6 SHIELD Graphite Grey",
            price: "130,00",
            img: img8,
            imgHover: img8_hover,
        },
        {
            id: 9,
            name: "ASICS",
            description: "UB7-S GT-2160 Lava Orange",
            price: "150,00",
            img: img9,
            imgHover: img9_hover,
        },
    ];

    return (
        <div>
            <Carousel opts={{
                align: "start",
                slidesToScroll: slidesToScroll,
            }}>
                <CarouselContent>
                    {footwearItems.map((item) => (
                        <CarouselItem key={item.id} className="basis-1/2 lg:basis-1/6">
                            <ProductItem product={item} fontSize="12px" />
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="hidden lg:block bg-black text-white hover:bg-black hover:text-white" />
                <CarouselNext className="hidden lg:block bg-black text-white hover:bg-black hover:text-white" />
            </Carousel>
        </div>
    );
}

export default AsicsFootwear;
