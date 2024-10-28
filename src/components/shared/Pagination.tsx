import { Chevron } from "@/components/shared/Icon";

function Pagination() {
    return (
        <div className="flex items-center space-x-4 font-prompt font-black container mx-auto justify-center relative">
            <div className="flex gap-8 text-[30px]">
                <span className="text-gray-500 font-bold">1</span>
                <span className="text-gray-400">2</span>
                <span className="text-gray-400">3</span>
                <span className="text-gray-400">...</span>
                <span className="text-gray-500 font-bold">11</span>
            </div>

            <button className="w-8 h-8 flex items-center justify-center bg-gray-800 text-white rounded-full absolute right-[7%]">
                <Chevron className="h-[15px] rotate-[270deg] text-white"/>
            </button>
        </div>
    );
}

export default Pagination;