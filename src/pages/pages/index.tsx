import Layout from "@/components/layout/_root/Layout";
import Contact from "@/components/shared/Contact";
import { useParams } from "react-router-dom";
import ContactForm from "./components/contact";
import OtherPage from "./components/otherPage";

function Pages() {
    const params = useParams();
    const page = params.page;

    return (
        <Layout>
            <div className="container mx-auto">
                {page === "contact" ? (
                    <ContactForm />
                ) : (
                    <OtherPage/>
                )}
            </div>
            <Contact />
        </Layout>
    );
}

export default Pages;
