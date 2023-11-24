import './ErrorPage.css';
import { Link } from 'react-router-dom';

function ErrorPage(){
    return(
        <main>
            <div className='error-page container'>
                <h2 className='error-page__title'>This page doesn't exist!</h2>
                <Link to='/' className='error-page__home'>Go back to Home</Link>
            </div>
        </main>
    )
};

export default ErrorPage;