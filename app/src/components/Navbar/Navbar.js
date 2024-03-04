import './Navbar.css'

const Navbar = () => {
    return(
        <nav className='navbar-container'>
            <h1 className='logo'>Task Flow</h1>
            <div>
                <button className='side-medium-margin'>Login</button>
                <button className='side-medium-margin'>Sign Up</button>
            </div>
        </nav>
    )
}

export default Navbar