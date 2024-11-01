import { useState } from 'react';
import { SheetTitle } from "@/components/ui/sheet";
import useCartStore from '@/stores/stores';
import { useFetchRandomProducts } from '@/api/query/products';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Link } from 'react-router-dom';

function CartContent() {
    const items = useCartStore(state => state.items);
    const { data, error, isLoading } = useFetchRandomProducts();

    const removeItem = useCartStore(state => state.removeItem);

    const incrementQuantity = (item: any) => {
        useCartStore.setState((state) => ({
            items: state.items.map(i =>
                i.id === item.id && JSON.stringify(i.options) === JSON.stringify(item.options)
                    ? { ...i, quantity: i.quantity + 1 }
                    : i
            ),
        }));
    };

    const decrementQuantity = (item: any) => {
        useCartStore.setState((state) => {
            const updatedItems = state.items
                .map(i =>
                    i.id === item.id && JSON.stringify(i.options) === JSON.stringify(item.options)
                        ? { ...i, quantity: i.quantity - 1 }
                        : i
                )
                .filter(i => i.quantity > 0);

            return { items: updatedItems };
        });
    };

    const totalPrice = items.reduce((total, item) => total + (Number(item.price) * item.quantity), 0);

    return (
        <>
            <SheetTitle className='bg-black text-white px-[40px] py-[30px] font-prompt font-black text-[22px] uppercase'>Cart</SheetTitle>
            <div className='text-black p-[30px]'>
                <ScrollArea className='h-[80vh]'>
                <div>
                    {items.map((item) => (
                        <div key={item.id} className="flex items-center justify-between mb-4 relative">
                            <div className="flex items-center flex-1">
                                <img alt={item.name} className="w-20 h-20 object-cover rounded" src={item.img} />
                                <div className="ml-4 flex-1">
                                    <h2 className="text-sm font-bold">{item.brand}</h2>
                                    <p className="text-sm">{item.name}</p>
                                    <p className="text-sm font-bold">Taille: {item.options.join(', ')}</p>
                                    <div className='flex justify-between items-center'>
                                        <div className="flex gap-[20px] items-center">
                                            <button
                                                className="text-xl font-bold outline-none"
                                                onClick={() => decrementQuantity(item)}
                                            >
                                                -
                                            </button>
                                            <span className="mx-2">{item.quantity}</span>
                                            <button
                                                className="text-xl font-bold outline-none"
                                                onClick={() => incrementQuantity(item)}
                                            >
                                                +
                                            </button>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <p className="text-lg font-bold">
                                                {Number(item.price) * item.quantity} €
                                            </p>
                                            <button onClick={() => removeItem(item.id, item.options)} className="text-xl font-bold">×</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="pt-4">
                    <h2 className="text-xl font-bold">TOTAL {totalPrice} €</h2>
                    <p className="text-sm text-gray-500">Shipping calculated at checkout</p>
                </div>
                <div className="mt-6">
                    <h2 className="text-lg font-bold">VOUS DEVRIEZ AUSSI AIMER</h2>
                    <div className="mt-4">
                        {
                            !isLoading && data && data.map((product: any, index:any) => (
                                <Link to={`/products/${product.id}`}>
                                    <div key={index} className="flex items-center mb-6">
                                    <img src={product.img} alt={product.name} className="w-24 h-24 object-cover mr-4" />
                                    <div>
                                        <h2 className="font-bold text-sm uppercase">{product.brand}</h2>
                                        <p className="text-[15px] uppercase">{product.name}</p>
                                        <p className="text-lg font-bold uppercase">{product.price} €</p>
                                    </div>
                                </div>
                                </Link>
                            ))
                        }
                    </div>
                </div>
                </ScrollArea>
            </div>
        </>
    );
}

export default CartContent;
