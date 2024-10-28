import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";


const AccountRoutes = () => {
    return (
        <Routes>
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
        </Routes>
    );
};

export default AccountRoutes;