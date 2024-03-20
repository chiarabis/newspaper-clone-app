import { Link } from 'react-router-dom'
import './form.css';

export default function Form( {login, subscribe, onCloseForm} ) {

    const handleCloseClick = () => {
        onCloseForm()
    }


    return (
    <>
       {login && (
              <div className='body-overlay'>
                <div className='login-container'>
                    <h3>Login</h3>
                    <button className='login-close-button' onClick={handleCloseClick}><img src='/close.png'/></button>

                    <form>
                        <div className="flex-column">
                            <div className='login-input-container'>
                                <label>Your email:</label>
                                <input type='email' placeholder="Email" />
                            </div>

                            <div className='login-input-container'>
                                <label>Your password:</label>
                                <input type="password" placeholder="Password" />
                            </div>
                        </div>
                        
                        <button type="submit" className='login-button'>Sign in</button>
                        
                        <div className='login-footer'>
                            <span>Not registered? </span>
                            <Link>Create account</Link>
                        </div>
                        
                    </form>
                </div>
              </div>
            )}

            {subscribe && (
              <div className='body-overlay'>
                <div className='login-container'>
                    <img src="/letter.png" alt="letter-icon" style={{width: '40px', marginBottom: '0.5rem'}}/>
                    <h3>Subscribe to our newsletter</h3>

                    <button className='login-close-button' onClick={handleCloseClick}><img src='/close.png'/></button>

                    <form>
                        <div className="flex-column">
                            <div className='login-input-container'>
                                <label>Your email:</label>
                                <input type='email' placeholder="Email" />
                            </div> 
                        </div>
                        
                        <button type="submit" className='login-button'>Subscribe</button>
                        
                    </form>
                </div>
              </div>
            )} 
    </>
    )
}
