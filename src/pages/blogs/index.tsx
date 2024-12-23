import Layout from "@/components/layout/_root/Layout";
import Pagination from "@/components/shared/Pagination";
import Contact from "../../components/shared/Contact";
import FirstBlogItem from "./components/FirstBlogItem";
import BlogItem from "./components/BlogItem";

function Blogs() {
    const blogItems = Array.from({ length: 12 }, (_) => ({
        title: "NOCTA OPAL COLLECTION",
        subtitle: "NIKE x NOCTA",
        date: "22.10.2024",
        imageUrl: "https://storage.googleapis.com/a1aa/image/LoK9ERcokU7CAFAacGw06xffa8do45YUq0KYYEshdYanpJrTA.jpg",
        alt: "A blurred image of a jacket with a colorful abstract pattern"
    }));

    return (
        <Layout>
            <div className="container mx-auto">
                <div className="flex flex-col lg:flex-row items-start justify-between lg:items-center p-4">
                    <div className="text-[45px] font-black font-prompt">BLOGS</div>
                    <div className="flex space-x-8 text-lg font-bold">
                        <a href="#" className="text-black lg:text-[15px] text-[12px] font-prompt font-black">TOUS</a>
                        <a href="#" className="text-black lg:text-[15px] text-[12px] font-prompt font-black">INTERVIEW</a>
                        <a href="#" className="text-black lg:text-[15px] text-[12px] font-prompt font-black">RELEASE</a>
                    </div>
                </div>

                <FirstBlogItem />

                <div className="grid lg:grid-cols-3 grid-cols-1 gap-4 mt-8">
                    {blogItems.map((item, index) => (
                        <BlogItem key={index} {...item} />
                    ))}
                </div>
            </div>
            <Pagination total={2}/>
            <Contact/>
        </Layout>
    );
}

export default Blogs;
