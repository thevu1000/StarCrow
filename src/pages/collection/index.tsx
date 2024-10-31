import Layout from "@/components/layout/_root/Layout";
import Contact from "../../components/shared/Contact";
import {
  img1, img1_hover, img2, img2_hover, img3, img3_hover, img4, img4_hover,
  img5, img5_hover, img6, img6_hover, img7, img7_hover, img8, img8_hover,
  img9, img9_hover
} from '@/assets/images';
import ItemList from "./components/ItemList";
import Pagination from "../../components/shared/Pagination";
import { useLocation, useParams } from "react-router-dom";
import { useFetchProducts } from "@/api/query/products";

function Collection() {
  const brandName = useParams().collectionId;
  const location = useLocation();

  let [firstPart, secondPart] = brandName.split('-');

  if (!secondPart) {
    secondPart = firstPart;
    firstPart = undefined;
  }

  if (secondPart === 'outlet') {
    firstPart = undefined;
    secondPart = undefined;
  }

  const { data, isLoading } = useFetchProducts(firstPart, secondPart);



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
        "Date, old to new"
      ]
    },
    {
      name: "Brand",
      type: "checkbox",
      options: [
        "Converse",
        "New Era",
        "Starcow",
        "The Apartment Tokyo"
      ]
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
        "41"
      ]
    },
    {
      name: "Price",
      type: null
    }
  ];



  const footwearItems = !isLoading && data;
  return (
    <Layout>
      {isLoading ? <div>Loading...</div> : <ItemList filter={filter} url={location.pathname} brandName={firstPart} type={secondPart} footwearItems={footwearItems} />}
      <Pagination />
      <Contact />
    </Layout>
  );
}

export default Collection;