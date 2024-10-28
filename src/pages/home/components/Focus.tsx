import { useEffect, useState } from 'react';
import {focusImgs} from '@/assets/images';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import { Link } from 'react-router-dom';

function Focus() {

    const focusItems = [
        {
            id: 1,
            img: focusImgs.img1_focus,
            title: 'NB X BRICKS & WOOD 1906U ECHOES OF A BUTTERFLY',
            desc: 'NEW IN',
            link: "/collections/new-balance",
        },
        {
            id: 2,
            img: focusImgs.img2_focus,
            title: 'STW GEARS',
            desc: 'THIS IS WHAT WE DO',
            link: "/collections/starcow-gears",
        },
        {
            id: 3,
            img: focusImgs.img3_focus,
            title: 'AIR MAX DN LT SMOKE GREY',
            desc: 'NEW IN',
            link: "/products/nike-air-max-dn-lt-smoke-grey",
        },
    ];

    return (
        <Carousel opts={{
            breakpoints: {
                '(min-width: 1024px)': { active: false},
            },
        }}>
            <CarouselContent>
                {focusItems.map((item) => (
                    <CarouselItem className="lg:h-auto lg:basis-1/3" key={item.id}>
                        <div>
                            <img alt="Close-up of a black and yellow sneaker" className="w-full h-full object-cover" src={item.img} width={600} />
                            <div className="mt-4">
                                <h2 className="text-xl font-prompt font-black">
                                    {item.title}
                                </h2>
                                <Link to={item.link} className="text-[13px] font-black menu-item reverse before:h-[2px] after:h-[2px] w-fit">
                                    {item.desc}
                                </Link>
                            </div>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
        </Carousel>
    );
}

export default Focus;
