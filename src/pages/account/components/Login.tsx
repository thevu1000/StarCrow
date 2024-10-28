import Layout from "@/components/layout/_root/Layout";
import { Link } from "react-router-dom";

function Login() {
    
    return (
        <Layout>
            <div className="container mx-auto flex flex-col lg:flex-row">
                <div className="w-1/2 hidden lg:block">
                    <img alt="Two people walking down a street, one holding a skateboard, both wearing graphic t-shirts" className="w-full h-full object-cover" height={1000} src="https://www.starcowparis.com/cdn/shop/files/Login_720x780_crop_center.png?v=1669740371" width={800} />
                </div>
                <div className="lg:w-1/2 flex flex-col justify-center items-center bg-white">
                    <div className="lg:w-2/3">
                        <h1 className="text-[50px] font-black font-prompt mb-6 text-center">
                            LOGIN
                        </h1>
                        <form>
                            <input className="w-full p-3 mb-4 border border-gray-300 rounded" placeholder="Email" type="email" />
                            <input className="w-full p-3 mb-4 border border-gray-300 rounded" placeholder="Password" type="password" />
                            <a className="text-[13px] text-gray-500 mb-4 block font-black font-prompt" href="#">
                                FORGOT YOUR PASSWORD?
                            </a>
                            <button className="w-full bg-black text-[20px] text-white p-3 rounded font-black font-prompt" type="submit">
                                SIGN IN
                            </button>
                        </form>
                        <div className="mt-10 text-center flex flex-col items-center">
                            <h2 className="text-[50px] w-[280px] font-black font-prompt mb-4">
                                NEW CLIENT?
                            </h2>
                            <p className="text-gray-500 mb-4">
                                You're not subscribed yet?
                                <br />
                                Create an account by filling our form.
                            </p>
                            <Link to="/account/register" className="productItem reverse w-full border-2 border-black text-black p-3 rounded font-black font-prompt">
                                CREATE ACCOUNT
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

        </Layout>
    );
}

export default Login;