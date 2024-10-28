import { useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { SheetContent } from "@/components/ui/sheet";
import { img1, img2, img3, img4 } from "@/assets/images/index";
import { Link } from "react-router-dom";

type ProductType = {
    name: string;
    img: string;
};

function SelectProductType() {
    const productImgs = [img1, img2, img3, img4];
    const shoeSizes: number[] = [
        37, 37.5, 38, 39, 39.5, 40,
        40.5, 41, 42, 42.5, 43.5, 44,
        44.5, 45, 46
    ];

    const [selectedType, setSelectedType] = useState<number | null>(null);
    const [selectedSize, setSelectedSize] = useState<number | null>(null);

    const productTypes: ProductType[] = [
        { name: "Type 1", img: img1 },
        { name: "Type 2", img: img2 },
        { name: "Type 3", img: img3 },
        { name: "Type 4", img: img4 },
    ];

    return (
        <SheetContent className='p-[0px] w-[65vw] h-[100vh] !max-w-[none]'>
            <div className="flex">
                <ScrollArea className="w-1/2 flex flex-col items-center space-y-4 p-4 h-[100vh] gap-[10px]">
                    {productImgs.map((img, index) => (
                        <img
                            key={index}
                            alt={`Product Image ${index + 1}`}
                            className="w-full mt-0"
                            src={img}
                        />
                    ))}
                </ScrollArea>
                <div className="w-1/2 p-8">
                    <div className="flex justify-between items-start">
                        <div>
                            <p className="text-sm font-bold">ASICS</p>
                            <h1 className="text-4xl font-bold">GT-2160</h1>
                            <h2 className="text-4xl font-bold">PIEDMONT GREY</h2>
                            <p className="text-2xl font-bold mt-4">130 €</p>
                        </div>
                    </div>
                    <div className="mt-8">
                        <div className="flex space-x-4">
                            {productTypes.map((type, index) => (
                                <div
                                    key={index}
                                    className={`border-2 p-1 ${selectedType === index ? 'border-black' : 'border-transparent'}`}
                                    onClick={() => setSelectedType(index)}
                                >
                                    <img
                                        alt={type.name}
                                        height={100}
                                        src={type.img}
                                        width={100}
                                        className="cursor-pointer"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="mt-8">
                        <p className="text-sm font-bold">SELECT THE SIZE</p>
                        <ScrollArea className="flex flex-wrap justify-evenly mt-4 h-[150px]">
                            {shoeSizes.map((size) => (
                                <button
                                    key={size}
                                    className={`border min-w-[75px] max-w-[75px] mx-[5px] p-[5px] ${selectedSize === size ? 'border-black font-bold' : 'border-transparent'}`}
                                    onClick={() => setSelectedSize(size)}
                                >
                                    {size}
                                </button>
                            ))}
                        </ScrollArea>
                    </div>
                    <div className="mt-8">
                        <button className="bg-black text-white w-full py-4 font-bold text-lg">
                            ADD TO CART
                        </button>
                    </div>
                    <div className="mt-4 text-center">
                        <Link className="text-sm font-bold" to="/products/1">
                            SEE PRODUCT DETAILS
                        </Link>
                    </div>
                </div>
            </div>
        </SheetContent>
    );
}

export default SelectProductType;
