import {
    SheetContent,
    SheetTitle,
} from "@/components/ui/sheet"

function CartContent() {
    return (
        <>
            <SheetTitle className='bg-black text-white px-[40px] py-[30px] font-prompt font-black text-[22px] uppercase'>Cart</SheetTitle>
            <div className='text-black p-[30px]'>
                <div>
                    <div className="flex items-center justify-between mb-4 relative">
                        <div className="flex items-center flex-1">
                            <img alt="Image of a Classic Zip Up Hooded Sweater Black Iris" className="w-20 h-20 object-cover rounded" height={100} src="https://placehold.co/100x100" width={100} />
                            <div className="ml-4 flex-1">
                                <h2 className="text-sm font-bold">
                                    PATTA
                                </h2>
                                <p className="text-sm">
                                    Classic Zip Up Hooded Sweater Black Iris
                                </p>
                                <p className="text-sm font-bold">
                                    Taille: S
                                </p>
                                <div className='flex justify-between items-center'>
                                    <div className="flex gap-[20px] items-center">
                                        <button className="text-xl font-bold outline-none">
                                            -
                                        </button>
                                        <span className="mx-2">
                                            1
                                        </span>
                                        <button className="text-xl font-bold outline-none">
                                            +
                                        </button>
                                    </div>

                                    <div className="flex items-center justify-between">
                                        <p className="text-lg font-bold">
                                            130,00 €
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="absolute top-[-5px] left-0 flex items-center">
                            <button className="text-xl font-bold">
                                ×
                            </button>
                        </div>
                    </div>

                </div>
                <div className="  pt-4">
                    <h2 className="text-xl font-bold">
                        TOTAL 130,00 €
                    </h2>
                    <p className="text-sm text-gray-500">
                        Shipping calculated at checkout
                    </p>
                </div>
                <div className="mt-6">
                    <h2 className="text-lg font-bold">
                        VOUS DEVRIEZ AUSSI AIMER
                    </h2>
                    <div className="mt-4">
                        <div className="flex items-center mb-4">
                            <img alt="Image of a Def Tee White" className="w-20 h-20 object-cover rounded" height={100} src="https://placehold.co/100x100" width={100} />
                            <div className="ml-4">
                                <h3 className="text-sm font-bold">
                                    CHAIGLE
                                </h3>
                                <p className="text-sm">
                                    Def Tee White
                                </p>
                                <p className="text-sm font-bold">
                                    22,50 €
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center mb-4">
                            <img alt="Image of a Stacked Tee Black" className="w-20 h-20 object-cover rounded" height={100} src="https://placehold.co/100x100" width={100} />
                            <div className="ml-4">
                                <h3 className="text-sm font-bold">
                                    ANYTHING
                                </h3>
                                <p className="text-sm">
                                    Stacked Tee Black
                                </p>
                                <p className="text-sm font-bold">
                                    24 €
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center">
                            <img alt="Image of a Stacked Tee Black" className="w-20 h-20 object-cover rounded" height={100} src="https://placehold.co/100x100" width={100} />
                            <div className="ml-4">
                                <h3 className="text-sm font-bold">
                                    ANYTHING
                                </h3>
                                <p className="text-sm">
                                    Stacked Tee Black
                                </p>
                                <p className="text-sm font-bold">
                                    24 €
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CartContent;