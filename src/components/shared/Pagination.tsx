import { Chevron } from "@/components/shared/Icon";
import { usePaginationStore } from "@/stores/stores";
import { Link } from "react-router-dom";

interface PaginationProps {
    total: number;
}

function Pagination({ total }: PaginationProps) {
    const { currentPage, setCurrentPage } = usePaginationStore();
    const pagesArray = new Array(total).fill(0);
    console.log(pagesArray);
    
    return (
        <div className="flex items-center space-x-4 font-prompt font-black container mx-auto justify-center relative">
            <Link
                className="w-8 h-8 flex items-center justify-center bg-gray-800 text-white rounded-full absolute left-[7%]"
                to={`?page=${currentPage - 1}`}
                onClick={() => setCurrentPage(currentPage - 1)}
                style={{ display: currentPage === 1 ? 'none' : 'flex' }}
            >
                <Chevron className="h-[15px] rotate-[-270deg] text-white" />
            </Link>
            <div className="flex gap-8">
                {pagesArray.map((_, index) => (
                    <Link
                        key={index}
                        className={`text-[30px] ${currentPage === index + 1 ? 'text-gray-500 font-bold' : 'text-gray-400'} cursor-pointer`}
                        to={`?page=${index + 1}`}
                        onClick={() => setCurrentPage(index + 1)}
                    >
                        {index + 1}
                    </Link>
                ))}
            </div>

            <Link
                className="w-8 h-8 flex items-center justify-center bg-gray-800 text-white rounded-full absolute right-[7%]"
                to={`?page=${currentPage + 1}`}
                onClick={() => setCurrentPage(currentPage + 1)}
                style={{ display: currentPage === total ? 'none' : 'flex' }}
            >
                <Chevron className="h-[15px] rotate-[270deg] text-white" />
            </Link>
        </div>
    );
}

export default Pagination;
