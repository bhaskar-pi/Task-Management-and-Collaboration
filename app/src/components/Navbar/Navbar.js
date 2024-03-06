import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return(
        <nav className='navbar-container'>
            <h1 className='logo'>Task Flow</h1>
            <div>
                <Link to={'/login'}>
                    <button className='side-medium-margin login-signup-button '>Login</button>
                </Link>
                <Link to={'/register'}>
                    <button className='side-medium-margin login-signup-button '>Sign Up</button>
                </Link>
            </div>
        </nav>
    )
}

export default Navbar