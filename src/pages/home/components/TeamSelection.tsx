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
    options: [];
}

function TeamSelection() {
    const { data, isLoading } = useFetchProducts('', '', 15, 18);
    const products: Product[] = data || [];

    return (
        <div className="grid lg:grid-cols-4 grid-cols-2 gap-4">
            {isLoading ? (
                <div>Loading...</div>
            ) : (
                products.map((product: Product, index: number) => (
                    <ProductItem product={product} key={index} />
                ))
            )}
        </div>
    );
}

export default TeamSelection;
