export const fetchProducts = async () => {
    const response = await fetch(`http://localhost:5000/products`);
    
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    
    return response.json();
};

export const fetchProductsByBrandAndType = async (brand: string, type: string) => {
    const response = await fetch(`http://localhost:5000/products?type=${type}&brand=${brand}`);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
};


export const fetchProductsByIdRange = async (id1: number, id2: number) => {
    const response = await fetch(`http://localhost:5000/products`);
    
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }

    const data = await response.json();
    const filteredProducts = data.filter((product: { id: number }) => product.id >= id1 && product.id <= id2);
    
    return filteredProducts;
};

export const fetchRandomProducts = async () => {
    const response = await fetch(`http://localhost:5000/products`);
    
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }

    const data = await response.json();
    
    const randomProducts = data
        .sort(() => 0.5 - Math.random())  
        .slice(0, 3);                   
    
    return randomProducts;
};

export const fetchProductById = async (id: number) => {
    const response = await fetch(`http://localhost:5000/products?id=${id}`);

    if (!response.ok) {
        throw new Error('Network response was not ok');
    }

    return response.json();
};

export const fetchProductsByType = async (type: string) => {
    const response = await fetch(`http://localhost:5000/products?type=${type}`);
    
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    
    return response.json();
};



