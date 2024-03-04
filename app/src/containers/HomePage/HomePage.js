import Navbar from '../../components/Navbar/Navbar'
import './HomePage.css'

const HomePage = () => {
    return (
        <div className='homepage-container'>
            <Navbar/>
            <div className='display-center h-90'>
                <h1 className='small-margin'>Team's Task Collaboration and Management</h1>
                <p className='small-margin'>Empower your team with a sophisticated task management and collaboration platform. 
                    Streamline tasks, enhance communication, and boost productivity effortlessly.
                </p>
                <button className='small-margin'>Get Started</button>
            </div>
        </div>
    )
}

export default HomePage