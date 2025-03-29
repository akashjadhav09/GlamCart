import './css/SignUpCss.css'

export default function SignUpForm (){
    return(
        <div className='signup-main-wrapper__outer'>
            <div className='signup-wrapper__outer'>
                <div className='poster-wrapper'>
                    <img className='signup-poster' src='../../public/assets/images/LoginPoster.jpg' alt='signup-poster' />
                </div>
                <div className='signup-wrapper-inner__main'>
                   <div className='detail-wrapper__outer'>                       
                        <div className='create-account-message'>Create an account</div>
                        <div className='instructions-wrapper'>Already have an account? <span> Login</span></div>
                   </div>
                    <div className='credential-wrapper'>
                        <div className='user-name-detail-wrapper'>
                           <div className='first-name-wrapper'>
                            <h4>First Name</h4>
                            <input  type="text" className="user-input input-type__username" required/>
                           </div>

                           <div className='last-name-wrapper'>
                            <h4>Last Name</h4>
                            <input  type="text" className="user-input input-type__username"/>
                           </div>                            
                        </div>
                   
                        <h4>Username</h4>
                        <input  type="text" className="user-input input-type__username" required/>

                        <h4>Password</h4>
                        <input  type="password"  minLength="4" className="user-input input-type__password" required/>
                    </div>                    
                    <div className='term-condition-wrapper'>
                        <input type='checkbox'/> <span>I agree to the Terms & Conditions</span>
                    </div>
                    <button className='signup-button'>Create Account</button>                
                </div>
            </div>
        </div>
    )
}