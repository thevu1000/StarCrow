import ProductItem from '@/components/shared/ProductItem/index';
import { useFetchProductsByIdRange } from '@/api/query/products';
import { Product } from "@/types/type";



function TeamSelection() {
    const { data, isLoading } = useFetchProductsByIdRange(15, 18);
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
