import { useState } from 'react'
import { InputField } from '../../components/InputFiled/InputField'
import RedirectToSignupOrLogin from '../../components/RedirectToSignupOrLogin/RedirectToSignupOrLogin'
import { loginApi } from '../../services/api'
import './LoginPage.css'
import {toast} from 'react-toastify'
import { useNavigate } from 'react-router-dom'

const LoginPage = () => {
    const navigate = useNavigate()
    const [credentials, setCredentials] = useState({
        email: '',
        password: ''
    })

    const onChange = (e) => {
        e.preventDefault()
        setCredentials({...credentials, [e.target.name]:e.target.value})
    }

    const Login = async() => {
        const response = await loginApi(credentials)
        if (response.data.login){
            toast.success(response.data.login)
            navigate('/dashboard')
        }else{
            toast.error(response.data.error.messaga)
        }
    }

    return(
        <div className='login-page display-center h-100vh'>
            <h1 className='heading'>Login</h1>
            <div className='display-column'>
                <InputField onChange={onChange} type='email' placeholder='john.doe@email.com' label="Email" id="email" />
                <InputField onChange={onChange} type='password' placeholder='&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;' label='Password' id='password' />
            </div>
            <button className='submit-button' onClick={Login}>Login</button>
            <RedirectToSignupOrLogin text="If not registered, " redirectLinkText='register' path='/register' />
        </div>
    )
}

export default LoginPage