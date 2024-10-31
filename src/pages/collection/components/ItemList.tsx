import { useState } from "react";
import { Chevron } from "@/components/shared/Icon";
import ProductCard from "@/components/shared/ProductItem";
import {
    Sheet,
    SheetTrigger,
    SheetContent,
    SheetTitle,
} from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Product, FilterOption } from "@/types/type";

interface ItemListProps {
    filter: FilterOption[];
    footwearItems: Product[];
    brandName: string;
    type: string;
    url: string;
    total: number;
}

function ItemList({ filter, footwearItems, brandName, type, url, total }: ItemListProps) {
    const [openAccordionIndex, setOpenAccordionIndex] = useState<number | null>(null);

    const handleAccordionToggle = (index: number) => {
        setOpenAccordionIndex(prevIndex => (prevIndex === index ? null : index));
    };

    const itemQuantity = footwearItems.length;

    const isOutlet = url === '/collections/outlet';
    let displayName = isOutlet ? 'Outlet' : ` ${brandName} ${type}`;
    if (isOutlet) {
        displayName = 'Outlet';
    } else if (!brandName && type) {
        displayName = type;
    } else {
        displayName = `${brandName} ${type}`;
    }
    
    return (
        <div className="container mx-auto">
            <div className="flex justify-between flex-col lg:flex-row">
                <div>
                    <h1 className="uppercase font-black font-prompt lg:text-[40px] text-[26px] w-fit flex gap-[10px]">
                        {displayName}
                    </h1>
                </div>

                <div className="flex items-center">
                    <div className="flex gap-[20px] w-full">
                        <Sheet>
                            {filter.map((item, index) => (
                                <p key={index} className="uppercase font-black font-prompt hidden lg:flex text-[15px]">
                                    <SheetTrigger asChild className="lg:flex">
                                        <span
                                            className="flex items-center gap-[5px] cursor-pointer"
                                            onClick={() => handleAccordionToggle(index)}
                                        >
                                            {item.name} <Chevron className="h-[10px]" />
                                        </span>
                                    </SheetTrigger>
                                </p>
                            ))}
                            <SheetTrigger asChild className="block lg:hidden">
                                <div className="bg-black text-white font-black uppercase font-prompt text-[15px] text-center p-2 w-full">
                                    Filter and Sort
                                </div>
                            </SheetTrigger>

                            <SheetContent className="p-0 text-white lg:w-[40vw] w-[100vw] h-[100vh] !max-w-[none]">
                                <SheetTitle className="text-white font-black uppercase font-prompt text-[20px] p-8 bg-black">
                                    Filtrer et trier
                                </SheetTitle>

                                <div className="text-black px-8">
                                    <ScrollArea className="h-[80vh]">
                                        <Accordion type="single" value={`item-${openAccordionIndex}`}>
                                            {filter.map((filterItem, filterIndex) => (
                                                <AccordionItem value={`item-${filterIndex}`} key={filterIndex} className="pr-[20px]">
                                                    <AccordionTrigger
                                                        className="font-black hover:no-underline outline-none uppercase font-prompt"
                                                        onClick={() => handleAccordionToggle(filterIndex)}
                                                    >
                                                        {filterItem.name}
                                                    </AccordionTrigger>
                                                    <AccordionContent>
                                                        <div className="flex flex-col gap-[10px]">
                                                            {filterItem.options?.map((option, optionIndex) => (
                                                                <div key={optionIndex} className="flex items-center gap-[10px]">
                                                                    <input
                                                                        type={filterItem.name === 'Sort by' ? 'radio' : 'checkbox'}
                                                                        id={`${filterItem.name}-${optionIndex}`}
                                                                        name={filterItem.name}
                                                                    />
                                                                    <label htmlFor={`${filterItem.name}-${optionIndex}`}>
                                                                        {option}
                                                                    </label>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </AccordionContent>
                                                </AccordionItem>
                                            ))}
                                        </Accordion>
                                    </ScrollArea>
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </div>

            <div className="grid lg:grid-cols-4 grid-cols-2 gap-[30px]">
                {footwearItems.map((item) => (
                    <ProductCard key={item.id} product={item} />
                ))}
            </div>
        </div>
    );
}

export default ItemList;
