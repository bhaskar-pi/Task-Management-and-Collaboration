import {Link} from 'react-router-dom'

const RedirectToSignupOrLogin = (props) =>{
    const{text, redirectLinkText, path} = props
    return(
        <p className='small-margin-top'>
            {text} {' please'} {redirectLinkText} 
            <Link className='link highlight' to={path}>{' here'}</Link>
            
        </p>
    )
}

export default RedirectToSignupOrLogin