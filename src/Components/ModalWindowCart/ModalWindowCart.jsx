import "./ModalWindowCart.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import BoughtProduct from "../BoughtProduct/BoughtProduct";


function ModalWindowCart({active, onDestroy}){
    const boughtProducts = useSelector((state)=>state.boughtProducts);
    const arrayBoughtProducts = [];
    let totalPrice = 0;
    for (const key in boughtProducts) {
        arrayBoughtProducts.push({...boughtProducts[key]})
        totalPrice += boughtProducts[key].price * boughtProducts[key].quantity
    }
    
    return(
        <div className={active ? 'modal active' : 'modal'} onClick={onDestroy}>
            <div className={active ? 'modal-content active' : 'modal-content'} onClick={(e)=>e.stopPropagation()}>
                <div className="modal-top">
                    <p className="name-cart">Cart</p>
                    <i onClick={onDestroy} className='close'>X</i>
                </div>
                {arrayBoughtProducts.length > 0 ? 
                    (<>
                        <div className="cart-products">
                            {arrayBoughtProducts.map((product)=><BoughtProduct product={product} key={product.id} onDestroy={onDestroy}/>)}
                        </div>
                        <div className="modal-checkout-container">
                            <p className="modal-checkout-container__price">${totalPrice}</p>
                            <button className="modal-checkout-container__btn" onClick={onDestroy}>
                                <Link to='/checkout' className="modal-checkout-container__btn-link">Proceed to checkout</Link>
                            </button>
                        </div>
                    </>) :
                    (<div className="empty-cart">
                        <p>Cart is empty</p>
                    </div>)}
            </div>
        </div>
    )
};

export default ModalWindowCart;