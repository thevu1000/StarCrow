import { storesBanner } from "@/assets/images";


function Banner() {
    return (
        <div className="container mx-auto">
            <img src={storesBanner} alt="" />
        </div>
    );
}

export default Banner;