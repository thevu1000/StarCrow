import { ScrollArea } from "@/components/ui/scroll-area";
import { SheetContent, SheetTitle } from "@/components/ui/sheet";
import { Link } from "react-router-dom";

function CollectionSheet() {
    return (
        <SheetContent className='p-0 text-white flex gap-0 flex-row-reverse lg:w-[60vw] w-[100vw] !max-w-[none]'>
            <ScrollArea className='relative lg:w-1/2 w-full'>
                <div >
                    <SheetTitle className='fixed w-full z-[1] font-black p-8 text-[20px] font-prompt uppercase bg-black text-white'>Footwear</SheetTitle>
                    <div className='px-8 py-8 pt-[120px] z-[0]'>
                        <div>
                            <Link to="/" className='uppercase font-black font-prompt menu-item reverse text-black before:h-[3px] after:h-[3px]'>
                                all product
                            </Link>
                        </div>

                        <div className='text-black font-prompt mt-8 flex flex-col gap-[20px]'>
                            <div>
                                <h3 className='font-black text-[20px] uppercase'>Marques</h3>
                                <ul>
                                    <li className='menu-item before:h-[1px] after:h-[1px] w-fit cursor-pointer'>Starcrow</li>
                                    <li className='menu-item before:h-[1px] after:h-[1px] w-fit cursor-pointer'>Adidas</li>
                                    <li className='menu-item before:h-[1px] after:h-[1px] w-fit cursor-pointer'>Arc'Teryx</li>
                                    <li className='menu-item before:h-[1px] after:h-[1px] w-fit cursor-pointer'>Asics</li>
                                    <li className='menu-item before:h-[1px] after:h-[1px] w-fit cursor-pointer'>Birkenstock</li>
                                    <li className='menu-item before:h-[1px] after:h-[1px] w-fit cursor-pointer'>Blundstone</li>
                                    <li className='menu-item before:h-[1px] after:h-[1px] w-fit cursor-pointer'>Clarks</li>
                                    <li className='menu-item before:h-[1px] after:h-[1px] w-fit cursor-pointer'>Converse</li>
                                    <li className='menu-item before:h-[1px] after:h-[1px] w-fit cursor-pointer'>Crocs</li>
                                    <li className='menu-item before:h-[1px] after:h-[1px] w-fit cursor-pointer'>Danner</li>
                                    <li className='menu-item before:h-[1px] after:h-[1px] w-fit cursor-pointer'>DC Shoes</li>
                                    <li className='menu-item before:h-[1px] after:h-[1px] w-fit cursor-pointer'>Etonic</li>
                                    <li className='menu-item before:h-[1px] after:h-[1px] w-fit cursor-pointer'>Flower Mountain</li>
                                    <li className='menu-item before:h-[1px] after:h-[1px] w-fit cursor-pointer'>Hoka</li>
                                    <li className='menu-item before:h-[1px] after:h-[1px] w-fit cursor-pointer'>Jason Markk</li>
                                    <li className='menu-item before:h-[1px] after:h-[1px] w-fit cursor-pointer'>Karhu</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className='font-black text-[20px] uppercase'>Marques</h3>
                                <ul>
                                    <li className='menu-item before:h-[1px] after:h-[1px] w-fit cursor-pointer'>Starcrow</li>
                                    <li className='menu-item before:h-[1px] after:h-[1px] w-fit cursor-pointer'>Adidas</li>
                                    <li className='menu-item before:h-[1px] after:h-[1px] w-fit cursor-pointer'>Arc'Teryx</li>
                                    <li className='menu-item before:h-[1px] after:h-[1px] w-fit cursor-pointer'>Asics</li>
                                    <li className='menu-item before:h-[1px] after:h-[1px] w-fit cursor-pointer'>Birkenstock</li>
                                    <li className='menu-item before:h-[1px] after:h-[1px] w-fit cursor-pointer'>Blundstone</li>
                                    <li className='menu-item before:h-[1px] after:h-[1px] w-fit cursor-pointer'>Clarks</li>
                                    <li className='menu-item before:h-[1px] after:h-[1px] w-fit cursor-pointer'>Converse</li>
                                    <li className='menu-item before:h-[1px] after:h-[1px] w-fit cursor-pointer'>Crocs</li>
                                    <li className='menu-item before:h-[1px] after:h-[1px] w-fit cursor-pointer'>Danner</li>
                                    <li className='menu-item before:h-[1px] after:h-[1px] w-fit cursor-pointer'>DC Shoes</li>
                                    <li className='menu-item before:h-[1px] after:h-[1px] w-fit cursor-pointer'>Etonic</li>
                                    <li className='menu-item before:h-[1px] after:h-[1px] w-fit cursor-pointer'>Flower Mountain</li>
                                    <li className='menu-item before:h-[1px] after:h-[1px] w-fit cursor-pointer'>Hoka</li>
                                    <li className='menu-item before:h-[1px] after:h-[1px] w-fit cursor-pointer'>Jason Markk</li>
                                    <li className='menu-item before:h-[1px] after:h-[1px] w-fit cursor-pointer'>Karhu</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className='font-black text-[20px] uppercase'>Marques</h3>
                                <ul>
                                    <li className='menu-item before:h-[1px] after:h-[1px] w-fit cursor-pointer'>Starcrow</li>
                                    <li className='menu-item before:h-[1px] after:h-[1px] w-fit cursor-pointer'>Adidas</li>
                                    <li className='menu-item before:h-[1px] after:h-[1px] w-fit cursor-pointer'>Arc'Teryx</li>
                                    <li className='menu-item before:h-[1px] after:h-[1px] w-fit cursor-pointer'>Asics</li>
                                    <li className='menu-item before:h-[1px] after:h-[1px] w-fit cursor-pointer'>Birkenstock</li>
                                    <li className='menu-item before:h-[1px] after:h-[1px] w-fit cursor-pointer'>Blundstone</li>
                                    <li className='menu-item before:h-[1px] after:h-[1px] w-fit cursor-pointer'>Clarks</li>
                                    <li className='menu-item before:h-[1px] after:h-[1px] w-fit cursor-pointer'>Converse</li>
                                    <li className='menu-item before:h-[1px] after:h-[1px] w-fit cursor-pointer'>Crocs</li>
                                    <li className='menu-item before:h-[1px] after:h-[1px] w-fit cursor-pointer'>Danner</li>
                                    <li className='menu-item before:h-[1px] after:h-[1px] w-fit cursor-pointer'>DC Shoes</li>
                                    <li className='menu-item before:h-[1px] after:h-[1px] w-fit cursor-pointer'>Etonic</li>
                                    <li className='menu-item before:h-[1px] after:h-[1px] w-fit cursor-pointer'>Flower Mountain</li>
                                    <li className='menu-item before:h-[1px] after:h-[1px] w-fit cursor-pointer'>Hoka</li>
                                    <li className='menu-item before:h-[1px] after:h-[1px] w-fit cursor-pointer'>Jason Markk</li>
                                    <li className='menu-item before:h-[1px] after:h-[1px] w-fit cursor-pointer'>Karhu</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </ScrollArea>

            <div className='lg:w-1/2 hidden lg:block'>
                <div className='relative w-full h-1/2'>
                    <img className='w-full h-full object-cover' src='https://www.starcowparis.com/cdn/shop/files/TEST_1_copie.jpg?v=1670336709' />
                    <div className='absolute bottom-5 left-10  w-[60%]'>
                        <div className='font-black font-prompt uppercase'>
                            <h2 className="text-3xl font-black">
                                HOT DROP
                            </h2>
                            <p className="text-[15px] menu-item w-fit reverse before:h-[2px] after:h-[2px] cursor-pointer">
                                C'EST ICI
                            </p>
                        </div>
                    </div>
                </div>

                <div className='relative w-full h-1/2'>
                    <img className='w-full h-full object-cover' src='https://www.starcowparis.com/cdn/shop/files/TEST_2_copie.jpg?v=1670336729' />
                    <div className='absolute bottom-5 left-10  w-[60%]'>
                        <div className='font-black font-prompt uppercase'>
                            <h2 className="text-3xl font-black">
                                Salomon vient d'arriver
                            </h2>
                            <p className="text-[15px] menu-item w-fit reverse before:h-[2px] after:h-[2px] cursor-pointer">
                                Découvrir
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </SheetContent>
    );
}

export default CollectionSheet;