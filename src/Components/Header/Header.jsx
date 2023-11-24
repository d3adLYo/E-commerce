import './Header.css';
import logo from '../../img/logo.png';
import cart from '../../img/cart-icon.svg';
import ModalWindowCart from '../ModalWindowCart/ModalWindowCart';
import { useState, useEffect, useRef } from 'react';

import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Header(){
    const [modalState, setModalState] = useState(false);

    const [activeBurger, setActiveBurger] = useState(false);  
    
    function toggleBurger(){
        setActiveBurger(!activeBurger)
    }

    useEffect ( () => {
        !modalState ? document.body.style.overflow = 'auto': document.body.style.overflow = 'hidden'
    }, [modalState] )

    const boughtProducts = useSelector((state)=>state.boughtProducts);
    useEffect(()=>{
        let productCounter = Object.keys(boughtProducts).length;
        const element = document.getElementById("product-count");
        if(productCounter === 0) element.style.display = 'none';
        else element.style.display = 'block';
        element.textContent = productCounter;
    }, [boughtProducts])

    const burgerRef = useRef();

    useEffect(()=>{
        const handleOutsideClick = (e)=>{
            if(window.matchMedia("(min-width:768px)").matches) return null
            if(burgerRef.current && !burgerRef.current.contains(e.target)){
                setActiveBurger(false);
            }
        };

        document.addEventListener('click', handleOutsideClick)

        return ()=>{
            document.removeEventListener('click', handleOutsideClick)
        };
    },[])

    return (
        <header>
            <div className='header-container'>
                <div className='header-container__logo-container'>
                    <Link to='/'>
                        <img src={logo} alt='logo' className='header-contaier__logo'/>
                    </Link>
                </div>
                <nav className='header-container__navigation-container'>
                    <ul className={activeBurger ? 'header-container__list active__burger' : 'header-container__list'} ref={burgerRef}>
                        <li className='header-container__list-element' onClick={toggleBurger}>
                            <Link to='/'>
                                Home
                            </Link>
                        </li>
                        <li className='header-container__list-element' onClick={toggleBurger}>
                            <Link to='/#shop-id'>
                                Shop
                            </Link>
                        </li>
                        <li className='header-container__list-element' onClick={toggleBurger}>
                            <a href='#footer-id'>
                                Contacts
                            </a>
                        </li>
                        <li className='header-container__list-element' onClick={toggleBurger}>
                            <i onClick={()=>{setModalState(true);}}>
                                <span id='product-count'>
                                    2
                                </span>
                                <img src={cart} className='cart' alt='cart'/>
                            </i>
                        </li>
                    </ul>
                    
                    <div className={activeBurger ? 'burger active__burger' : 'burger'} onClick={(e)=>{
                        e.stopPropagation();
                        toggleBurger();
                    }}>
                        <span className='burger__bar'></span>
                        <span className='burger__bar'></span>
                        <span className='burger__bar'></span>
                    </div>
                </nav>
            </div>
            <ModalWindowCart active={modalState} onDestroy={()=>setModalState(false)}/>
        </header>
    )
};

export default Header;