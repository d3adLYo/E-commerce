import './ProductMainPage.css';
import full_star from '../../img/full-star.svg';
import empty_star from '../../img/empty-star.svg';
import { useLoaderData} from 'react-router-dom';
import { useRef } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { addToCart, changeQuantity } from "../../store/boughtProductsSlice";

import Select from 'react-select';
import selectStyles  from "../../selectStyles/selectStyles";


function ProductMainPage(){
    const product = useLoaderData();

    let rating = product.rating;
    let ratingArray = [];
    for (let i = 0; i < 5; i++) {
        if(i<rating) ratingArray.push(1)
        else ratingArray.push(0)
    }

    const boughtProducts = useSelector((state)=>state.boughtProducts);
    const boughtCurrentProduct = boughtProducts[product.short_name];

    const dispatch = useDispatch();

    let options = [];
    for(let i = 0; i<product.sizes?.length;i++){
        options.push({value: product.sizes[i], label: product.sizes[i]})
    };

    const refQuantity = useRef();

    const refSelect = useRef();
    
    return(
        <section className='product-main-page container'>
            <img src={product.image_url} className='product-main-page__image' alt='product'/>
            <div className='product-main-page__info'>
                <div className='product-main-page__details'>
                    <h5 className='product-main-page__title'>{product.name}</h5>
                    <div className='card__rating'>
                    {ratingArray.map((elem, index)=>{
                            if(elem) return <img src={full_star} className='star' alt='star' key={index}/>
                            else return <img src={empty_star} className='star' alt='star' key={index}/>
                        })}
                    </div>
                    <p className='product-main-page__price'>${product.price}</p>
                    <div className='product-main-page__select'>
                        <Select options={options} styles={selectStyles} placeholder='Size' isSearchable={false} noOptionsMessage={()=>{return '-'}} ref={refSelect}/>
                    </div>
                    <div className='product-main-page__functionality'>
                        <div className="quantity-container">
                            <button className="quantity-container__btn" onClick={()=>{
                                if(refQuantity.current.textContent == 1) return
                                else refQuantity.current.textContent -= 1;
                            }}>-</button>
                            <p className="quantity-container__quantity" ref={refQuantity}>1</p>
                            <button className="quantity-container__btn" onClick={()=>{refQuantity.current.textContent = +refQuantity.current.textContent + 1}}>+</button>
                        </div>
                        <button className='product-main-page__button' onClick={()=>{
                             if(boughtCurrentProduct) {
                                dispatch(changeQuantity([product.short_name, +refQuantity.current.textContent]))
                             }
                             else {
                                dispatch(addToCart([product, refSelect.current.props.value]));
                                dispatch(changeQuantity([product.short_name, +refQuantity.current.textContent-1]))
                            }
                        }}>Add to cart</button>
                    </div>
                </div>
                <div className='product-main-page__description'>
                    <p className='product-main-page__product-details'>Product details</p>
                    <p className='product-main-page__text-details'>{product.long_description}</p>
                </div>
            </div>
        </section>
    )
};

export default ProductMainPage;