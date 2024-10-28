import React from 'react';

interface Store {
    Name: string;
    Address: string;
    Hours: string;
    img: string;
}

interface StoresProps {
    data: Store[];
}

const Stores: React.FC<StoresProps> = ({ data }) => {
    return (
        <div className="container mx-auto">
            <h1 className="font-black font-prompt lg:text-[90px] text-[35px] uppercase">Nos Shop</h1>
            {data.map((store, index) => {
                const [street, city] = store.Address.split(" | ");
                const hoursArray = store.Hours.split(" | ");
                return (
                    <div key={index} className="flex mb-10 flex-col lg:flex-row">
                        <div className="lg:w-1/2">
                            <img
                                alt={`Storefront with ${store.Name} logo on the glass door`}
                                className="h-full w-full object-cover"
                                height={1600}
                                src={store.img}
                                width={800}
                            />
                        </div>
                        <div className="lg:w-1/2 flex items-center lg:justify-center justify-start mt-6 lg:mt-0">
                            <div className="text-left">
                                <h1 className="lg:text-6xl text-[30px] font-black font-prompt uppercase">{store.Name}</h1>
                                <p className="mt-4 text-lg">
                                    {street}
                                    <br />
                                    {city}
                                </p>
                                <p className="mt-4 text-[15px] font-bold font-jakarta">Horaires</p>
                                {hoursArray.map((hour, hourIndex) => (
                                    <p key={hourIndex} className="text-lg">{hour}</p>
                                ))}
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Stores;
