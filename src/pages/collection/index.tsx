import React, { useEffect } from "react";
import Layout from "@/components/layout/_root/Layout";
import Contact from "../../components/shared/Contact";
import ItemList from "./components/ItemList";
import Pagination from "../../components/shared/Pagination";
import { useLocation, useParams } from "react-router-dom";
import { useFetchProductsByBrandAndType, useFfetchAllProductByBrandAndType } from "@/api/query/products";
import { usePaginationStore } from "@/stores/stores";
import { Product, FilterOption } from "@/types/type";

function Collection() {
  const { collectionId } = useParams();
  const location = useLocation();
  const currentPage = usePaginationStore((state) => state.currentPage);
  const setCurrentPage = usePaginationStore((state) => state.setCurrentPage);
  
  const queryParams = new URLSearchParams(location.search);
  const pageFromUrl = parseInt(queryParams.get("page") || "1");

  useEffect(() => {
    setCurrentPage(pageFromUrl);
  }, [pageFromUrl, setCurrentPage]);

  if (!collectionId) {
    console.error("No collectionId provided");
    return null;
  }

  let firstPart: string = '';
  let secondPart: string = '';

  [firstPart, secondPart] = collectionId.split("-").map(part => part || '');

  if (secondPart === "outlet") {
    firstPart = '';
    secondPart = '';
  }

  if (!secondPart) {
    secondPart = firstPart;
    firstPart = '';
  }

  const { data: totalItemsData, isLoading: isLoadingTotal } = useFfetchAllProductByBrandAndType(firstPart, secondPart);
  
  const { data: productsData, isLoading: isLoadingProducts } = useFetchProductsByBrandAndType(
    firstPart,
    secondPart,
    currentPage,
    12
  );

  if (isLoadingTotal || isLoadingProducts) {
    return <div>Loading...</div>;
  }

  const itemsPerPage = 12;
  const totalItems = totalItemsData || 0;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const filter: FilterOption[] = [
    {
      name: "Sort by",
      type: "radio",
      options: [
        "Best selling",
        "Alphabetically, A-Z",
        "Alphabetically, Z-A",
        "Price, low to high",
        "Price, high to low",
        "Date, old to new",
      ],
    },
    {
      name: "Brand",
      type: "checkbox",
      options: [
        "Converse",
        "New Era",
        "Starcow",
        "The Apartment Tokyo",
      ],
    },
    {
      name: "Taille",
      type: "checkbox",
      options: [
        "Taille unique",
        "XS",
        "S",
        "S/M",
        "M",
        "M/L",
        "L",
        "L/XL",
        "XL",
        "2XL",
        "3XL",
        "40",
        "41",
      ],
    },
    {
      name: "Price",
      type: 'range',
    },
  ];

  const footwearItems: Product[] = productsData || [];

  return (
    <Layout>
      <ItemList
        filter={filter}
        url={location.pathname}
        brandName={firstPart}
        type={secondPart}
        footwearItems={footwearItems}
        total={totalItems}
      />
      <Pagination total={totalPages} itemsPerPage={itemsPerPage} /> 
      <Contact />
    </Layout>
  );
}

export default Collection;
