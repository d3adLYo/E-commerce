import "./Main.css";
import Hero from "../Hero/Hero";
import ProductsPage from "../ProductsPage/ProductsPage";
import ProductMainPage from "../ProductMainPage/ProductMainPage";
import CheckoutPage from '../CheckoutPage/CheckoutPage';
import CheckoutSuccess from "../CheckoutSuccess/CheckoutSuccess";


function Main({dataMain}){
    return (
        <main>
            {dataMain === 'HeroProductsPage' ?
            <div className="container">
                <Hero/>
                <ProductsPage/>
            </div> :
            dataMain === 'productId' ?
            <ProductMainPage/> :
            dataMain === 'checkout' ?
            <CheckoutPage/> :
            dataMain === 'success' ?
            <CheckoutSuccess/>  :
            null}
        </main>
    )
};

export default Main;