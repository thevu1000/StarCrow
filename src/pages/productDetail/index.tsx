import Layout from "@/components/layout/_root/Layout";
import { productDetailImages } from "@/assets/images"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import Contact from "@/components/shared/Contact";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";


function ProductDetail() {
    return (
        <Layout>
            <div className="container mx-auto flex lg:flex-row flex-col">
                <div >
                    <Carousel opts={{
                        breakpoints: {
                            '(max-width: 1024px)': { active: true },
                            '(min-width: 1024px)': { active: false },

                        },
                    }}>
                        <CarouselContent className="lg:grid grid-cols-2 gap-4 px-2">
                            {productDetailImages.map((image, index) => (
                                <CarouselItem key={index}>
                                    <img src={image} key={index} />
                                </CarouselItem>
                            ))}

                        </CarouselContent>
                    </Carousel>

                </div>

                <div className="lg:mx-auto w-full lg:w-1/3">
                    <div className="text-sm font-black font-prompt text-gray-500 mb-2">DICKIES</div>
                    <h1 className="text-4xl font-black font-prompt leading-tight mb-2">STEVENSVILLE CARPENTER MUSHROOM</h1>
                    <div className="text-2xl font-black font-prompt mb-4">85 €</div>
                    <div className="text-sm font-bold font-jakarta text-gray-500 mb-2">SELECT THE SIZE</div>
                    <div className="grid grid-cols-3 gap-2 mb-4">
                        <button className="border border-gray-300 p-2 text-sm font-bold bg-black text-white">L30/W28</button>
                        <button className="border border-gray-300 p-2 text-sm font-bold">L30/W29</button>
                        <button className="border border-gray-300 p-2 text-sm font-bold">L30/W30</button>
                        <button className="border border-gray-300 p-2 text-sm font-bold">L30/W32</button>
                        <button className="border border-gray-300 p-2 text-sm font-bold">L32/W31</button>
                        <button className="border border-gray-300 p-2 text-sm font-bold">L32/W32</button>
                        <button className="border border-gray-300 p-2 text-sm font-bold">L32/W33</button>
                        <button className="border border-gray-300 p-2 text-sm font-bold">L32/W34</button>
                        <button className="border border-gray-300 p-2 text-sm font-bold">L32/W36</button>
                    </div>
                    <button className="w-full bg-black text-white text-lg font-black font-prompt py-3 mb-6">ADD TO CART</button>
                    <div className="mb-4">
                        <Accordion type="multiple">
                            <AccordionItem value="item-1">
                                <AccordionTrigger className="text-lg font-bold hover:no-underline">DESCRIPTION</AccordionTrigger>
                                <AccordionContent>
                                    <div className="text-[15px] font-jakarta flex flex-col gap-[5px]">
                                        <p>100% cotton</p>
                                        <p>Loose fit</p>
                                        <p>Poches Carpenter</p>
                                        <p>DK0A863TMR1</p>
                                    </div>
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="item-2" className="hover:no-underline">
                                <AccordionTrigger className="text-lg font-bold hover:no-underline">PAYMENT AND SHIPPING</AccordionTrigger>
                                <AccordionContent>
                                    <div className="text-[15px]">
                                        <div>
                                            <div className="mb-4">
                                                <h2 className="font-bold">DELIVERY IN FRANCE</h2>
                                                <p>8€ delivery in 1–2 working days.</p>
                                            </div>
                                            <div className="mb-4">
                                                <h2 className="font-bold">EUROPE</h2>
                                                <p>15€ delivery in 1–4 working days.</p>
                                            </div>
                                            <div className="mb-4">
                                                <h2 className="font-bold">REST OF THE WORLD</h2>
                                                <p>45€ delivery in 3–6 working days.</p>
                                            </div>
                                            <div className="mb-4">
                                                <p>** All Raffle and Verified products regardless of item price, are subject to flat shipping charges. Depending on the address of your shipment, the different delivery options will be presented to you before you finalize your purchase.</p>
                                            </div>
                                            <div>
                                                <p>** For purchases outside the limits of the European Union, VAT is not included. It is the responsibility of the recipient</p>
                                            </div>
                                        </div>
                                    </div>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </div>
                </div>
            </div>
            <Contact />
        </Layout>
    );
}

export default ProductDetail;