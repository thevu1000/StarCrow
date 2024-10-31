import ProductItem from '@/components/shared/ProductItem/index';
import { dailyUniformImg, product1, product2, product3, product4, product1Hover, product2Hover, product3Hover, product4Hover } from '@/assets/images';
import { useFetchProducts } from '@/api/query/products';


interface Product {
    id: number;
    img: string;
    imgHover: string;
    name: string;
    description: string;
    price: string;
    brand: string;
    options: [];
}

function DailyUniform() {
    const { data, isLoading, error } = useFetchProducts('', '', 1, 4);
    
    
    return (
        <div className='lg:grid flex flex-col grid-cols-2 bg-white container mx-auto pt-[50px]'>
            <div>
                <img src={dailyUniformImg} alt="Daily Uniform" />
            </div>

            {isLoading ? (
                <div>loading</div> // Hiển thị khi đang tải
            ) : error ? (
                <div>Đã có lỗi xảy ra: {error.message}</div> // Hiển thị khi có lỗi
            ) : (
                <div>
                    <div className='text-center mb-[20px]'>
                        <h2 className="uppercase font-prompt font-black text-black text-[30px]">Daily Uniform</h2>
                    </div>

                    <div className='grid grid-cols-2 grid-rows-2 gap-[30px]'>
                        {data.map((product: Product) => (
                            <ProductItem key={product.id} product={product} />
                        ))}
                    </div>

                    <div className='flex justify-center mt-[30px]'>
                        <a href='/' className='menu-item reverse before:h-[2px] w-fit after:h-[2px] font-black text-black text-[14px] font-prompt uppercase'>
                            Daily Uniform
                        </a>
                    </div>
                </div>
            )}
        </div>
    );
}

export default DailyUniform;
