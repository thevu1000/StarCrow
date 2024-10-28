import ProductItem from '@/components/shared/ProductItem/index';
import {dailyUniformImg,
    product1,
    product2,
    product3,
    product4,
    product1Hover,
    product2Hover,
    product3Hover,
    product4Hover,} from '@/assets/images';

function DailyUniform() {

    const DailyUniformProduct = [
        {
            id: 1,
            name: 'Patta',
            description: 'Classic Zip Up Hooded Sweater Black Iris',
            img: product1,
            imgHover: product1Hover,
            price: "130.00",
        },
        {
            id: 2,
            name: 'Starcow',
            description: '96 Skate Tee White',
            img: product2,
            imgHover: product2Hover,
            price: "35.00",
        },
        {
            id: 3,
            name: 'Bricks & Wood',
            description: 'Extra Denim Raw',
            img: product3,
            imgHover: product3Hover,
            price: "220.00",
        },
        {
            id: 4,
            name: 'Ugg',
            description: 'Tasman Weather Hybrid Chestnut',
            img: product4,
            imgHover: product4Hover,
            price: "200.00",
        },
    ]
    return (
        <div className='lg:grid flex flex-col grid-cols-2 bg-white container mx-auto pt-[50px]'>
            <div>
                <img src={dailyUniformImg} alt="Daily Uniform" />
            </div>

            <div>
                <div className='text-center mb-[20px]'>
                    <h2 className="uppercase font-prompt font-black text-black text-[30px]">Daily Uniform</h2>
                </div>

                <div className='grid grid-cols-2 grid-rows-2 gap-[30px]'>
                    {DailyUniformProduct.map((product) => (
                        <ProductItem key={product.id} product={product} />
                    ))}
                </div>

                <div className='flex justify-center mt-[30px]'>
                    <a href='/' className='menu-item reverse before:h-[2px] w-fit after:h-[2px] font-black text-black text-[14px] font-prompt uppercase'>
                        Daily Uniform
                    </a>
                </div>
            </div>
        </div>
    );
}

export default DailyUniform;