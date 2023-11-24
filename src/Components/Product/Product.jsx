import './Product.css';
import full_star from '../../img/full-star.svg';
import empty_star from '../../img/empty-star.svg';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../store/boughtProductsSlice';
import { Link } from 'react-router-dom';


function Product({data}){
    const dispatch = useDispatch();

    let rating = data.rating;
    let ratingArray = [];
    for (let i = 0; i < 5; i++) {
        if(i<rating) ratingArray.push(1)
        else ratingArray.push(0)
    }

    const url = '/product/' + data.url;

    return(
        <li className='products__item'>
            <div className='card'>
                <Link to={url} className='card__img-container'>
                    <img src={data.image_url} className='card__img' alt='product'/>
                </Link>
                <div className="card__box">
                    <h4 className='card__title'>
                        <Link to={url} className='card__title-link'>{data.name}</Link>
                    </h4>
                    <div className='card__rating card__rating-products-item'>
                        {ratingArray.map((elem, index)=>{
                            if(elem) return <img src={full_star} className='star' alt='star' key={index}/>
                            else return <img src={empty_star} className='star' alt='star' key={index}/>
                        })}
                    </div>
                    <p className='card__description'>{data.short_description}</p>
                    <div className="card__price-button">
                        <p className='card__price'>${data.price}</p>
                        <button className='card__button' onClick={()=>dispatch(addToCart([data, null]))}>Buy</button>
                    </div>
                </div>
            </div>
        </li>
    )
};

export default Product;