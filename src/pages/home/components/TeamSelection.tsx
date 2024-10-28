import ProductItem from '@/components/shared/ProductItem/index';
import {  img1_team, img1_hover_team, img2_team, img2_hover_team,
    img3_team, img3_hover_team, img4_team, img4_hover_team} from "@/assets/images"

function TeamSelection() {
    const products = [
        {
            id: 1,
            name: "Patta",
            description: 'Woodie Fleece Jacket Slate Black',
            price: "175.00",
            img: img1_team,
            imgHover: img1_hover_team,
        },
        {
            id: 2,
            name: "dickies",
            description: 'Clancy Heavyweight Sweat Heather Grey',
            price: "85.00",
            img: img2_team,
            imgHover: img2_hover_team,
        },
        {
            id: 3,
            name: "GRAMICCI",
            description: 'OG Canvas Mountain Pant Oat',
            price: "165.00",
            img: img3_team,
            imgHover: img3_hover_team,
        },
        {
            id: 4,
            name: "The North Face",
            description: 'Glenclyffe Urban Boots Timber Tan',
            price: "140.00",
            img: img4_team,
            imgHover: img4_hover_team,
        },
    ]
    return (
        <div className="grid lg:grid-cols-4 grid-cols-2 gap-4">
            {products.map((product, index) => (
                <ProductItem product={product} key={index}/>
            ))}
        </div>
    );
}

export default TeamSelection;