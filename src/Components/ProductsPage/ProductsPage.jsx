import "./ProductsPage.css";
import Product from "../Product/Product";
import { useSelector } from "react-redux";

function ProductsPage(){
    const products = useSelector((state) => state.products);
    return(
        <section id="shop-id">
            <h3 className="products-title">Our Products</h3>
            <ul className="products-list">
                {products.map((product)=><Product key={product.id} data={product}/>)}
            </ul>
        </section>
    )
};

export default ProductsPage;