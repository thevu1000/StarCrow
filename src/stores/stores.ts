import { create } from 'zustand';

interface CartItem {
    img: string;
    imgHover: string;
    name: string;
    brand: string;
    price: string;
    id: number;
    options: string[]; 
    quantity: number;
}

interface CartStore {
    items: CartItem[];
    addItem: (item: CartItem) => void;
    removeItem: (id: number, options: string[]) => void;
    clearCart: () => void;
}

const useCartStore = create<CartStore>((set) => ({
    items: [],
    addItem: (item) => set((state) => {
        const existingItemIndex = state.items.findIndex(
            (i) => i.id === item.id && JSON.stringify(i.options) === JSON.stringify(item.options)
        );

        if (existingItemIndex !== -1) {
            const updatedItems = [...state.items];
            updatedItems[existingItemIndex].quantity += 1;
            return { items: updatedItems };
        } else {
            return { items: [...state.items, { ...item, quantity: 1 }] };
        }
    }),
    removeItem: (id, options) => set((state) => {
        const existingItemIndex = state.items.findIndex(
            item => item.id === id && JSON.stringify(item.options) === JSON.stringify(options)
        );

        if (existingItemIndex !== -1) {
            const updatedItems = [...state.items];
            const existingItem = updatedItems[existingItemIndex];

            if (existingItem.quantity > 1) {
                existingItem.quantity -= 1;
                return { items: updatedItems };
            } else {
                return { items: updatedItems.filter(item => item.id !== id || JSON.stringify(item.options) !== JSON.stringify(options)) };
            }
        }

        return state;
    }),
    clearCart: () => set({ items: [] }),
}));

export default useCartStore;
