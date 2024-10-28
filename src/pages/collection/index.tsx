import Layout from "@/components/layout/_root/Layout";
import Contact from "../../components/shared/Contact";
import {
  img1, img1_hover, img2, img2_hover, img3, img3_hover, img4, img4_hover,
  img5, img5_hover, img6, img6_hover, img7, img7_hover, img8, img8_hover,
  img9, img9_hover
} from '@/assets/images';
import ItemList from "./components/ItemList";
import Pagination from "../../components/shared/Pagination";

function Collection() {

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

    const baseFootwearItems = [
        {
            id: 1,
            name: "ASICS",
            description: "Gel Nimbus 10.1 Black Grand Shark",
            price: "170,00",
            img: img1,
            imgHover: img1_hover,
        },
        {
            id: 2,
            name: "ASICS",
            description: "GT-2160 Piedmont Grey",
            price: "130,00",
            img: img2,
            imgHover: img2_hover,
        },
        {
            id: 3,
            name: "ASICS",
            description: "Gel NYC Reddish Brown Black",
            price: "150,00",
            img: img3,
            imgHover: img3_hover,
        },
        {
            id: 4,
            name: "ASICS",
            description: "Gel NYC White Feather Grey",
            price: "150,00",
            img: img4,
            imgHover: img4_hover,
        },
        {
            id: 5,
            name: "ASICS",
            description: "GEL-Quantum 360 VIII Digitune",
            price: "190,00",
            img: img5,
            imgHover: img5_hover,
        },
        {
            id: 6,
            name: "ASICS",
            description: "Gel Kayano 14 Cream Denim Blue",
            price: "160,00",
            img: img6,
            imgHover: img6_hover,
        },
        {
            id: 7,
            name: "ASICS",
            description: "Gel Venture 6 SHIELD Mauve Grey",
            price: "130,00",
            img: img7,
            imgHover: img7_hover,
        },
        {
            id: 8,
            name: "ASICS",
            description: "Gel Venture 6 SHIELD Graphite Grey",
            price: "130,00",
            img: img8,
            imgHover: img8_hover,
        },
        {
            id: 9,
            name: "ASICS",
            description: "UB7-S GT-2160 Lava Orange",
            price: "150,00",
            img: img9,
            imgHover: img9_hover,
        }
    ];

    const footwearItems = baseFootwearItems.flatMap((item, index) =>
        Array.from({ length: 3 }, (_, i) => ({
            ...item,
            id: item.id + index * 10 + i
        }))
    );
    return (
        <Layout>
            <ItemList filter={filter} footwearItems={footwearItems} />
            <Pagination />
            <Contact />
        </Layout>
    );
}

export default Collection;