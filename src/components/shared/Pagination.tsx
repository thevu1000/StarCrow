import { Chevron } from "@/components/shared/Icon";
import { usePaginationStore } from "@/stores/stores";
import { Link } from "react-router-dom";

interface PaginationProps {
    total: number;
    itemsPerPage: number;
}

function Pagination({ total, itemsPerPage }: PaginationProps) {
    const { currentPage, setCurrentPage } = usePaginationStore();
    const totalPages = Math.ceil(total / itemsPerPage);
    const pagesArray = Array.from({ length: totalPages }, (_, i) => i + 1);

    return (
        <div className="flex items-center space-x-4 font-prompt font-black container mx-auto justify-center relative">
            <Link
                className="w-8 h-8 flex items-center justify-center bg-gray-800 text-white rounded-full absolute left-[7%]"
                to={`?page=${currentPage - 1}`}
                onClick={() => setCurrentPage(currentPage - 1)}
                style={{ pointerEvents: currentPage === 1 ? 'none' : 'auto' }}
            >
                <Chevron className="h-[15px] rotate-[-270deg] text-white" />
            </Link>
            <div className="flex gap-8">
                {pagesArray.map((i) => (
                    <Link
                        key={i}
                        className={`text-[30px] ${currentPage === i ? 'text-gray-500 font-bold' : 'text-gray-400'} cursor-pointer`}
                        to={`?page=${i}`}
                        onClick={() => setCurrentPage(i)}
                    >
                        {i}
                    </Link>
                ))}
            </div>

            <Link
                className="w-8 h-8 flex items-center justify-center bg-gray-800 text-white rounded-full absolute right-[7%]"
                to={`?page=${currentPage + 1}`}
                onClick={() => setCurrentPage(currentPage + 1)}
                style={{ pointerEvents: currentPage === totalPages ? 'none' : 'auto' }}
            >
                <Chevron className="h-[15px] rotate-[270deg] text-white" />
            </Link>
        </div>
    );
}

export default Pagination;
