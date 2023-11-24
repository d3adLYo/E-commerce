import './CheckoutSuccess.css';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function CheckoutSuccess(){
    const [timer, setTimer] = useState(4);
    
    const navigate = useNavigate();
    
    useEffect(()=>{
        setTimeout(()=>{
            navigate('/');
        }, 4200)
    },[])

    useEffect(()=>{
        let id = setInterval(() => {
            setTimer(timer-1);
            console.log(timer)
        }, 1000);
        
        return ()=>{
            clearInterval(id)
        }
    },[timer])

    return (
        <div className='checkout-success container'>
            <h4 className='checkout-success__title'>Success!</h4>
            <p className='checkout-success__text'>You will be redirected to homepage</p>
            <div className='checkout-success__countdown-container'>
                <svg width='100px' height='100px'>
                    <path d='m 50 0 l 50 50 l -50 50 l -50 -50 l 50 -50' stroke='red' strokeWidth='2'>2</path>
                </svg>
                <p className='checkout-success__timer'>{timer}</p>
            </div>
        </div>
    )
};

export default CheckoutSuccess;