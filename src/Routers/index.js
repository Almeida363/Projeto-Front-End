import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/HomePage";
import Products from "../pages/ProductListingPage";
import MyRequests from "../pages/ProductViewPage";
import Header from "../components/Header";
import CreateAccount from "../components/Header/CreateAccount";
import Login from "../components/Header/Login";
import ProdutctDetails from "../components/ProdutctDetails";
import Footer from "../components/Footer";


export default function Routers() {
    return (
        <BrowserRouter>
            <Header />  
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/produtos" element={<Products />} />
                <Route path="/meus-pedidos" element={<MyRequests />} />
                <Route path="/cadastrar" element={<CreateAccount />} />
                <Route path="/login" element={<Login />} />
                <Route path="/produto-detalhe" element={<ProdutctDetails />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}