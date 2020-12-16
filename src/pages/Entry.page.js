import React from 'react'
import "./entry.style.css";


export const Login = () => {
    return (
            <section className="mainlogin">
   <div id="login">
        <div className="container">
            <div id="login-row" className="row justify-content-center align-items-center">
                <div id="login-column">
                    <div className="login-box">
                        <form className="login-form form" action="" method="post">
                            <div className="logoimg text-center">
                              <img src={process.env.PUBLIC_URL + '/images/logo.png'} className="img-fluid" alt="studyroo-logo"></img>
                              <h2>Hello! Welcome to the studyroo <br/>Education System</h2>
                            </div>
                            <div className="form-group">
                                <label for="username" className="text-lb">User Name</label><br/>
                                <input type="text" name="username" placeholder="User Name" id="username" className="form-control"/>
                            </div>
                            <div className="form-group">
                                <label for="password" className="text-lb">Password</label><br/>
                                <input type="text" name="password" placeholder="Enter your Password" id="password" className="form-control"/>
                            </div>
                            <div className="form-group resiterlink">
                              <div className="chck">
                                <input type="checkbox" id="box-2"/>
                              <label for="box-2">Remember Me </label>
                              </div>
                               
                               <a className="forgettext" href="!#">Forgot Password?</a>
                            </div>
                         
                             <div className="footersingbtn">
                               <input type="submit" name="submit" className="btn getin-btn" value="Sign in"/>
                             </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
        
    )
}
