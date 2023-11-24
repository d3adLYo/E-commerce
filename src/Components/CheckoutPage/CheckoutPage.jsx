import "./CheckoutPage.css";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import BoughtProduct from "../BoughtProduct/BoughtProduct";
import { useNavigate } from "react-router-dom";
import { clearCart } from "../../store/boughtProductsSlice";


function CheckoutPage(){
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const boughtProducts = useSelector((state)=>state.boughtProducts);
    const arrayBoughtProducts = [];
    let totalPrice = 0;
    for (const key in boughtProducts) {
        arrayBoughtProducts.push({...boughtProducts[key]})
        totalPrice += boughtProducts[key].price * boughtProducts[key].quantity
    }

    const [ formData, setFormData ] = useState({
        userFullName:'',
        userPhone:'',
        userEmail:''
    });

    const [errors, setErrors] = useState({});

    const validateForm = () => {
        let valid = true;
        const newErrors = {};
    
        if (!formData.userFullName.length){
            newErrors.userFullName = "Name can't be empty.";
            valid = false;
        }

        if(!Number(formData.userPhone)){
            newErrors.userPhone = "Phone number must contain only numbers.";
            valid = false;
        }
    
        const userEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!userEmail.test(formData.userEmail)){
            newErrors.userEmail = 'Invalid email address.';
            valid = false;
        }
    
        setErrors(newErrors);
        return valid;
      };

    const handleInputChange = (e)=>{
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
          });
        e.target.nextSibling?.classList.remove('active-error');
    }

    const handleSumbit = (e)=>{
        e.preventDefault();
        if(validateForm()) {
            navigate('/checkout/success');
            dispatch(clearCart());
        }
        else {
            setTimeout(()=>{
                let errors = document.querySelectorAll('.checkout__error-message');
                errors.forEach((elem) =>{
                    elem.classList.remove('active-error');
                    setTimeout(()=>{
                        elem.classList.add('active-error');
                    }, 20) 
                })
            }, 10) 
        }
    }

    return (<div className='checkout container'>
        <h3 className="checkout__title">Checkout</h3>
            {arrayBoughtProducts.length > 0 ? 
                (<>
                    <section className="checkout__products">
                        <div className="cart-products">
                            {arrayBoughtProducts.map((product)=><BoughtProduct product={product} key={product.id}/>)}
                            <div className="checkout-checkout-container">
                                <p className="checkout__price">Total: ${totalPrice}</p>
                            </div>
                        </div>
                    </section>

                    <section className="checkout__form-section">
                        <h3 className="checkout__personal-data-title">Your personal data</h3>
                        <div className="checkout__form-container">
                            <form className="checkout__form" onSubmit={handleSumbit}>
                                <div className="checkout__form-input-container">
                                    <label htmlFor='userFullName' className="checkout__form-input-label">
                                        Full name
                                    </label>
                                    <input tabIndex='1' id="userFullName" name="userFullName" type="text" className="checkout__form-input" onChange={handleInputChange} value={formData.userFullName} />
                                    {errors.userFullName && <span className="checkout__error-message">{errors.userFullName}</span>}
                                </div>
                                <div className="checkout__form-input-container">
                                    <label htmlFor='userPhone' className="checkout__form-input-label">
                                        Phone number
                                    </label>
                                    <input tabIndex='2' id="userPhone" name="userPhone" type="tel" className="checkout__form-input" onChange={handleInputChange} value={formData.userPhone} />
                                    {errors.userPhone && <span className="checkout__error-message">{errors.userPhone}</span>}
                                </div>
                                <div className="checkout__form-input-container">
                                    <label htmlFor='userEmail' className="checkout__form-input-label">
                                        E-mail
                                    </label>
                                    <input tabIndex='3' id="userEmail" name="userEmail" type="email" className="checkout__form-input" onChange={handleInputChange} value={formData.userEmail} />
                                    {errors.userEmail && <span className="checkout__error-message">{errors.userEmail}</span>}
                                </div>
                                <button type="submit" className="checkout__form-button">Submit</button>
                            </form>
                        </div>
                    </section>
                </>) : 
                (<>
                    <p className="checkout__empty">Cart is empty.</p>
                    <p className="checkout__empty">Nothing to render.</p>
                </>)}
        </div>)
};

export default CheckoutPage;