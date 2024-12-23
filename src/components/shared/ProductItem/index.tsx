import { Link } from 'react-router-dom';
import { Sheet, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import SelectProductType from '@/components/shared/ProductItem/components/SelectProductType';


type ProductCardProps = {
    product: {
        img: string;
        imgHover: string;
        name: string;
        brand: string;
        price: string;
        id: number;
        options: [];
        quantity: number;
    };
    fontSize?: string;
};

const ProductCard = ({ product, fontSize }: ProductCardProps) => {
    return (

        <div className="mx-auto w-full bg-white rounded-lg shadow-sm overflow-hidden relative group">
            <img className="w-full object-cover" src={product.img} alt={product.brand}/>
            <Link to={`/products/${product.id}`}>
                <div className="p-4 relative z-10 bg-white">
                    <h2 className="text-[14px] font-black text-gray-800 uppercase">{product.brand}</h2>
                    <p className="text-md text-gray-600 uppercase">{product.name}</p>
                    <p className="mt-2 text-[14px] font-bold text-gray-900">{product.price} €</p>
                </div>
            </Link>

            <div className='absolute top-0 w-full opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                <div className='relative'>
                    <img className="w-full object-cover" src={product.imgHover} alt={product.brand} />
                    <div className='absolute top-[80%] left-1/2 transform -translate-x-1/2 p-2 w-[95%]'>
                        <Sheet>
                            <SheetTitle className='hidden'>Add to Cart</SheetTitle>
                            <SheetTrigger asChild>
                                <button className="hidden lg:block relative w-full overflow-hidden border-2 border-black productItem bg-black font-bold py-2 px-4 rounded">
                                    <span className={`relative z-10 text-[${fontSize}]`}>Add to Cart</span>
                                </button>
                            </SheetTrigger>
                            <SelectProductType product={product} />
                        </Sheet>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
