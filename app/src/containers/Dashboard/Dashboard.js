import { useEffect, useState } from 'react'
import './Dashboard.css'
import { getDashboard, logoutApi } from '../../services/api'
import { useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'

const Dashboard = () => {

    const [user, setUser] = useState({
        // businessName: '',
        // email: '',
        // username: ''
    })

    const navigate = useNavigate()

    // console.log(Cookies.get('refreshToken'), 'tok')

    useEffect(() => {
        const getDashboarData = async () => {
            const res = await getDashboard();
            console.log(res)
            setUser(res.data.user)
            if (!res.data.isAuthorized) {
                navigate('/login');
            }
        };

        getDashboarData();
    }, [navigate]);

    const logout = async() => {
        Cookies.remove('refreshToken', 'accessToken')
        navigate('/login')
    }

    return(
        <div className='display-center h-100vh'>
            <h1>Dashboard</h1>
            <p>Business Name : {user.businessName}</p>
            <p>User Name : {user.username}</p>
            <p>Email : {user.email}</p>
            <button onClick={logout}>Logout</button>
        </div>
    )
}

export default Dashboard