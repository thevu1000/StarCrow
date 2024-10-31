import React, { useEffect } from "react";
import Layout from "@/components/layout/_root/Layout";
import Contact from "../../components/shared/Contact";
import ItemList from "./components/ItemList";
import Pagination from "../../components/shared/Pagination";
import { useLocation, useParams } from "react-router-dom";
import { useFetchProducts } from "@/api/query/products";
import { usePaginationStore } from "@/stores/stores";

function Collection() {
  const { collectionId } = useParams();
  const location = useLocation();
  const currentPage = usePaginationStore((state) => state.currentPage);
  const setCurrentPage = usePaginationStore((state) => state.setCurrentPage);

  // Extract page number from query parameters
  const queryParams = new URLSearchParams(location.search);
  const pageFromUrl = parseInt(queryParams.get("page")) || 1; // Default to 1 if not present

  useEffect(() => {
    // Set current page from URL when component mounts
    setCurrentPage(pageFromUrl);
  }, [pageFromUrl, setCurrentPage]);

  if (!collectionId) {
    console.error("No collectionId provided");
    return null; // Return null instead of undefined
  }

  let [firstPart, secondPart] = collectionId.split("-");

  if (!secondPart) {
    secondPart = firstPart;
    firstPart = undefined;
  }

  if (secondPart === "outlet") {
    firstPart = undefined;
    secondPart = undefined;
  }

  let totalItem;
  if (secondPart === "footwear") {
    totalItem = 118;
  } else if (secondPart === "clothing") {
    totalItem = 23;
  }

  const { data, isLoading } = useFetchProducts(
    firstPart,
    secondPart,
    null,
    null,
    null,
    false,
    currentPage,
    12
  );

  const filter = [
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
      type: null,
    },
  ];

  const footwearItems = !isLoading && data;
  return (
    <Layout>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <ItemList
          filter={filter}
          url={location.pathname}
          brandName={firstPart}
          type={secondPart}
          footwearItems={footwearItems}
          total={totalItem}
        />
      )}
      <Pagination total={totalItem} itemsPerPage={12} />
      <Contact />
    </Layout>
  );
}

export default Collection;
