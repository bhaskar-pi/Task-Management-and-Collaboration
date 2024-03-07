import {Link} from 'react-router-dom';
import './NotFound.css'
const NotFound = () => {
    return(
        <div className="display-center h-100vh">
            <img className='notfound-image' src='/notfound.png' alt='not found' />
            <p className="small-margin">Woops. Looks like this page doesnot exist.</p>
            <p className='link small-margin'>Click <Link to={'/'} className='link link-color'>here</Link> to go back home</p>
        </div>
    )
}

export default NotFound