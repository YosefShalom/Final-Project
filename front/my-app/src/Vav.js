import React from 'react';
import './css/tooplate.css';
import './css/bootstrap.min.css';
import './css/materialize.min.css';
import background from './img/input-bg-04.jpg';

const Vav = () => {
  return (
    <div className="container"style={{ backgroundImage: `url(${background})` }}>
    <div className="row tm-register-row tm-mb-35">
        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 tm-login-l">
            <form action="" method="post" className="tm-bg-black p-5 h-100">
                <div className="input-field">
                    <input placeholder="Username" id="username" name="username" type="text" className="validate"/>
                </div>
                <div className="input-field mb-5">
                    <input placeholder="Password" id="password" name="password" type="password" className="validate"/>
                </div>
                <div className="tm-flex-lr">
                    <a href="#" className="white-text small">Forgot Password?</a>
                    <button type="submit" className="waves-effect btn-large btn-large-white px-4 black-text rounded-0">Login</button>
                </div>
            </form>
        </div>
        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 tm-login-r">
            <header className="font-weight-light tm-bg-black p-5 h-100">
                <h3 className="mt-0 text-white font-weight-light">Your Login</h3>
                <p>className aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
                <p className="mb-0">Vestibulum neque neque, porttitor quis lacinia eu, iaculis id dui. Mauris quis velit lectus.</p>
            </header>
        </div>
    </div>
     <div className="row">
        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 ml-auto mr-0 text-center">
            <a href="register.html" className="waves-effect btn-large btn-large-white px-4 black-text rounded-0">Create New Account</a>
        </div>
    </div>
    <footer className="row tm-mt-big mb-3">
        <div className="col-xl-12 text-center">
            <p className="d-inline-block tm-bg-black white-text py-2 tm-px-5">
                Copyright &copy; 2018 Company Name 
                
                - <a rel="nofollow" href="http://www.tooplate.com/view/2105-input">Input</a> by 
                <a rel="nofollow" href="http://tooplate.com" className="tm-footer-link">Tooplate</a>
            </p>
        </div>
    </footer> 
</div>

  )
}

export default Vav