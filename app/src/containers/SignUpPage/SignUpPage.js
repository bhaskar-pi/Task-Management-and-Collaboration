import {InputField, SelectField} from '../../components/InputFiled/InputField'
import RedirectToSignupOrLogin from '../../components/RedirectToSignupOrLogin/RedirectToSignupOrLogin'
import { RoleOptions } from '../../constants'
import './SignUpPage.css'

const SignUpPage = () => {
    return(
        <div className='signup-page'>
            <h1 className='heading small-margin'>Sign Up</h1>
            <div className='input-fields-side-by-side'>
                <InputField className='side-medium-margin' type='text' placeholder='Greek for Geeks' id='businessName' label='Business Name' />
                <SelectField className='side-medium-margin'  options={RoleOptions} label="Role" id='selectOptions' />
                <InputField className='side-medium-margin'  type='text' label='Username' id='username' placeholder='John Doe' />
                <InputField className='side-medium-margin'  type='email' label='Email' id='email' placeholder='john.doe@email.com' />
                <InputField className='side-medium-margin align-self-start'  type='password' label="Password" id='password' placeholder='&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;' />
            </div>
            <button className='small-margin submit-button '>Sign Up</button>
            <RedirectToSignupOrLogin text="If already user," path='/login' redirectLinkText='login' />
        </div>
    )
}

export default SignUpPage