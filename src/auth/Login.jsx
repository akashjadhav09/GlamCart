import './css/LoginCss.css'

export default function LogInForm () {

    return(
        <div className='login-wrapper__outer'>
            <div className='login-main-wrapper__outer'>
                <div className='poster-wrapper'>
                    <img className='login-poster' src='../../public/assets/images/LoginPoster.jpg' alt='login-poster' />
                </div>
                <div className='login-wrapper-inner__main'>
                   <div className='detail-wrapper__outer'>
                        <div className='site-logo-wrapper'>
                            <img className='site-logo' src='../../public/assets/icons/site-icon.jpg' alt='site-logo' />
                            <span>Glam Cart</span>
                        </div>
                        <div className='welcome-message-wrapper'>Welcome Back</div>
                        <div className='instructions-wrapper'>Please login to your account</div>
                   </div>
                    <div className='credential-wrapper'>
                        <h4>Username</h4>
                        <input  type="text" className="user-input input-type__username"/>

                        <h4>Password</h4>
                        <input  type="password" className="user-input input-type__password"/>
                    </div>
                    <div className='forgot-password-msg'>Forgot Password?</div>
                    <button className='login-button'>Login</button>
                    <div className='signin-required-wrapper'>
                        <div className='signin-required-msg'>Dont't have an account?<span> Signup</span></div>
                    </div>
                </div>
            </div>
        </div>
    )
}