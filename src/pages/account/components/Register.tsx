import Layout from "@/components/layout/_root/Layout";
import { Link } from "react-router-dom";

function Register() {

    return (
        <Layout>
            <div className="container mx-auto flex">
                <div className="w-1/2 hidden lg:block">
                    <img alt="Two people walking down a street, one holding a skateboard, both wearing graphic t-shirts" className="w-full h-full object-cover" height={1000} src="https://www.starcowparis.com/cdn/shop/files/Login_720x780_crop_center.png?v=1669740371" width={800} />
                </div>
                <div className="lg:w-1/2 flex flex-col justify-center items-center bg-white">
                    <div className="lg:w-2/3">
                        <h1 className="text-4xl font-black font-prompt text-center mb-8">
                            CREATE ACCOUNT
                        </h1>
                        <form>
                            <div className="mb-2">
                                <input className="w-full p-3 border border-gray-300 rounded" placeholder="First name" type="text" />
                            </div>
                            <div className="mb-2">
                                <input className="w-full p-3 border border-gray-300 rounded" placeholder="Last name" type="text" />
                            </div>
                            <div className="mb-2">
                                <input className="w-full p-3 border border-gray-300 rounded" placeholder="Email" type="email" />
                            </div>
                            <div className="mb-2">
                                <input className="w-full p-3 border border-gray-300 rounded" placeholder="Password" type="password" />
                            </div>
                            <div className="mb-2">
                                <button className="w-full p-3 bg-black text-white font-bold rounded" type="submit">
                                    CREATE
                                </button>
                            </div>
                        </form>
                        <div className="text-center">
                            <a className="text-black font-prompt font-black menu-item reverse before:h-[2px] after:h-[2px]" href="#">
                                LOG IN
                            </a>
                        </div>
                    </div>

                </div>
            </div>

        </Layout>
    );
}

export default Register;