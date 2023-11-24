import './Footer.css';
import linkedin from '../../img/linkedin.svg';
import twitter from '../../img/twitter.svg';
import facebook from '../../img/facebook.svg';

function Footer(){
    return(
        <div className="container">
            <footer className='footer' id='footer-id'>
                <section className='footer__column'>
                    <h3 className='footer__title'>Contact</h3>
                    <h4 className='footer__text'>Address: SomeAddress</h4>
                    <h4 className='footer__text'>Phone: +1234567890</h4>
                    <h4 className='footer__text'>Hours: 10:00-18:00 Mon-Sat</h4>
                </section>
                <section className='footer__column'>
                    <h3 className='footer__title'>About</h3>
                    <span className='footer__text'>About us</span>
                    <span className='footer__text'>Privacy Policy</span>
                    <span className='footer__text'>Terms and Conditions</span>
                </section>
                <section className='footer__column'>
                    <h3 className='footer__title'>Community</h3>
                    <span className='footer__text'><img src={twitter} className='footer__img'/> Twitter</span>
                    <span className='footer__text'><img src={linkedin} className='footer__img'/>Linkedin</span>
                    <span className='footer__text'><img src={facebook} className='footer__img'/>Facebook</span>
                </section>
                <section className='footer__column'>
                    <p className='footer__rights'>© Copyright 2023. ShopEliteEra, Inc. All rights reserved.</p>
                </section>
            </footer>
        </div>
    )
};

export default Footer;