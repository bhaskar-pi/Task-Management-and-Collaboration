import { InputField } from '../../components/InputFiled/InputField'
import RedirectToSignupOrLogin from '../../components/RedirectToSignupOrLogin/RedirectToSignupOrLogin'
import './LoginPage.css'

const LoginPage = () => {
    return(
        <div className='login-page display-center h-100vh'>
            <h1 className='heading'>Login</h1>
            <div className='display-column'>
                <InputField type='email' placeholder='john.doe@email.com' label="Email" id="email" />
                <InputField type='password' placeholder='&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;' label='Password' id='password' />
            </div>
            <button className='submit-button'>Login</button>
            <RedirectToSignupOrLogin text="If not registered, " redirectLinkText='sign up' path='/signup' />
        </div>
    )
}

export default LoginPage