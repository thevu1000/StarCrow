import Layout from "@/components/layout/_root/Layout";
import { store_1, store_2 } from "@/assets/images";
import Banner from "./components/Banner";
import StoresList from "./components/StoresList";
import Contact from "../../components/shared/Contact";

interface Store {
    Name: string;
    Address: string;
    Hours: string;
    img: string;
}

const Stores: React.FC = () => {
    const stores: Store[] = [
        {
            Name: "Starcow",
            Address: "41 rue Berger | 75001 Paris, France",
            Hours: "Lundi: 14:00 - 19:00 | Mardi - Samedi: 11:00 - 19:00",
            img: store_1
        },
        {
            Name: "Starcow 1996",
            Address: "62 rue Saint-Honoré | 75001 Paris, France",
            Hours: "Lundi: 14:00 - 19:00 | Mardi - Samedi: 11:00 - 19:00",
            img: store_2
        }
    ];

    return (
        <Layout>
            <Banner/>
            <StoresList data={stores}/>
            <Contact/>
        </Layout>
    );
};

export default Stores;
