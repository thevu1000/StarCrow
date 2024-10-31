import ProductItem from '@/components/shared/ProductItem/index';
import { dailyUniformImg } from '@/assets/images';
import { useFetchProductsByIdRange } from '@/api/query/products';
import { Product} from "@/types/type";

function DailyUniform() {
    const { data, isLoading, error } = useFetchProductsByIdRange(1, 4);
    
    
    return (
        <div className='lg:grid flex flex-col grid-cols-2 bg-white container mx-auto pt-[50px]'>
            <div>
                <img src={dailyUniformImg} alt="Daily Uniform" />
            </div>

            {isLoading ? (
                <div>loading</div>
            ) : error ? (
                <div>Đã có lỗi xảy ra: {error.message}</div>
            ) : (
                <div>
                    <div className='text-center mb-[20px]'>
                        <h2 className="uppercase font-prompt font-black text-black text-[30px]">Daily Uniform</h2>
                    </div>

                    <div className='grid grid-cols-2 grid-rows-2 gap-[30px]'>
                        {data?.map((product: Product) => (
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
