import './BoughtProduct.css';
import trash from "../../img/trash.svg"
import { useState, useEffect } from 'react';
import { useDispatch } from "react-redux";
import { changeQuantity, changeSize, removeFromCart } from "../../store/boughtProductsSlice";
import { Link } from 'react-router-dom';

import Select from 'react-select';
import selectStyles  from "../../selectStyles/selectStyles";


function BoughtProduct({product, onDestroy}){
    const dispatch = useDispatch();
    
    const [selectValue, setSelectValue] = useState(product.selected_size);
    const changeValue = (selectValue)=>{
        setSelectValue(selectValue);
        dispatch(changeSize([product.short_name, selectValue]))
    }

    useEffect(()=>{
        setSelectValue(product.selected_size)
    },[product])


    let options = [];
    for(let i = 0; i<product.sizes?.length;i++){
        options.push({value: product.sizes[i], label: product.sizes[i]})
    };

    const url = '/product/' + product.url;
    
    return(
        <div className="cart-products__item">
            <img src={trash} className="cart-product__remove-trash" alt="trash" onClick={()=>dispatch(removeFromCart(product.short_name))}/>
            <div className="cart-products__name-image">
                <Link to={url} className='cart-products__image-container' onClick={onDestroy}>
                    <img src={product.image_url} alt="product-img" className="cart-products__image"/>
                </Link>
                <Link to={url} className="cart-products__name" onClick={onDestroy}>{product.name}</Link>
            </div>
            <div className="cart-products__select">
                <Select options={options} value={selectValue} onChange={changeValue} styles={selectStyles} placeholder='Size' isSearchable={false} noOptionsMessage={()=>{return '-'}}/>
            </div>
            <div className="quantity-price cart-products__quantity-price">
                <div className="quantity-container quantity-price__quantity-container">
                    <button className="quantity-container__btn" onClick={()=>{
                        if(product.quantity==1) return
                        else dispatch(changeQuantity([product.short_name, -1]))
                    }}>-</button>
                    <p className="quantity-container__quantity">{product.quantity}</p>
                    <button className="quantity-container__btn" onClick={()=>{dispatch(changeQuantity([product.short_name, 1]))}}>+</button>
                </div>
                <p className="quantity-price__price">${product.price*product.quantity}</p>
            </div>
        </div>
    )
};

export default BoughtProduct;