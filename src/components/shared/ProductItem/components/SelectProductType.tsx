import { useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { SheetContent } from "@/components/ui/sheet";
import { Link } from "react-router-dom";
import useCartStore from '@/stores/stores';
import { useToast } from "@/hooks/use-toast"

type Product = {
    img: string;
    imgHover: string;
    name: string;
    brand: string;
    price: string;
    id: number;
    options: (string | number)[];
    quantity: number
};

function SelectProductType({ product }: { product: Product }) {
    const addItemToCart = useCartStore(state => state.addItem);
    const [selectedSize, setSelectedSize] = useState<number | string | null>(null);
    const { toast } = useToast()
    const handleAddToCart = () => {
        if (selectedSize === null) {
            toast({
                title: 'Vui lòng chọn size',
                variant: "destructive",
                duration: 3000,
            });
            return;
        }
        const itemToAdd = {
            ...product,
            options: [String(selectedSize)],
        };
        addItemToCart(itemToAdd);
    
        toast({
            title: 'Sản phẩm đã được thêm vào giỏ hàng',
            description: 'Bạn có thể tiếp tục mua sắm hoặc đi tới giỏ hàng để thanh toán.',
            duration: 3000,
        });
    };
    

    return (
        <SheetContent className='p-[0px] w-[65vw] h-[100vh] !max-w-[none]'>
            <div className="flex">
                <div className="w-1/2">
                    <img className="w-full mt-0" src={product.img} alt={product.name} />
                </div>
                <div className="w-1/2 p-8">
                    <div className="flex justify-between items-start">
                        <div>
                            <p className="text-sm font-bold uppercase">{product.brand}</p>
                            <h1 className="text-4xl font-bold uppercase">{product.name}</h1>
                            <p className="text-2xl font-bold mt-4">{product.price} €</p>
                        </div>
                    </div>
                    <div className="mt-8">
                        <p className="text-sm font-bold">SELECT THE SIZE</p>
                        <ScrollArea className="flex flex-wrap justify-evenly mt-4 h-[150px]">
                            {product.options.map((size) => (
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
                        <button
                            onClick={handleAddToCart}
                            className="bg-black text-white w-full py-4 font-bold text-lg"
                        >
                            ADD TO CART
                        </button>
                    </div>
                    <div className="mt-4 text-center">
                        <Link className="text-sm font-bold" to={`/products/${product.id}`}>
                            SEE PRODUCT DETAILS
                        </Link>
                    </div>
                </div>
            </div>
        </SheetContent>
    );
}

export default SelectProductType;
