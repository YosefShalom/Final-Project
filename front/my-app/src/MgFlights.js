import React from 'react';
import {Outlet ,Link} from "react-router-dom";


export const MgFlights = () => {
    return (
        <div className="container" >
            <div className="row tm-register-row tm-mb-35">
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 tm-login-l">
                    <div action="" className="tm-bg-black p-5 h-100">
                        <div className="col-sm-4">
                            <ul className="nav nav-pills flex-column">
                                {/* <li className="nav-item"> */}
                                    <Link className="cta" to="/MgFlights/AddFligth">
                                        <span>AddFlight</span>
                                        <svg viewBox="0 0 13 10" height="10px" width="15px">
                                            {/* <path d="M1,5 L11,5"></path> */}
                                            
                                        </svg>
                                    </Link>
                                {/* </li> */}
                                <Link className="cta" to="/MgFlights/UpdFligth">
                                        <span>UpdFlight</span>
                                        <svg viewBox="0 0 13 10" height="10px" width="15px">
                                            {/* <path d="M1,5 L11,5"></path> */}
                                            
                                        </svg>
                                    </Link>
                                    <Link className="cta" to="/MgFlights/DelFlight">
                                        <span>DelFlight</span>
                                        <svg viewBox="0 0 13 10" height="10px" width="15px">
                                            {/* <path d="M1,5 L11,5"></path> */}
                                            
                                        </svg>
                                    </Link>
                                <li className="nav-item">
                                    <i className="nav-link disabled" >Disabled</i>
                                </li>
                            </ul>
                            <hr className="d-sm-none" />
                        </div>
                    </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 tm-login-r">
                    <header className="font-weight-light tm-bg-black p-5 h-100">
                    <Outlet />
                    </header>
                </div>
            </div>

            <div className="row">
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 ml-auto mr-0 text-center">
                    <Link className="cta" to="/Logreg/Register">
                        <span>Join YM</span>
                        <svg viewBox="0 0 13 10" height="10px" width="15px">
                            {/* <path d="M1,5 L11,5"></path> */}
                            <polyline points="8 1 12 5 8 9"></polyline>
                        </svg>
                    </Link>

                    {/* <a href="register.html" className="waves-effect btn-large btn-large-white px-4 black-text rounded-0">Create New Account</a> */}
                    {/* <Link  className="form-control btn btn-primary submit px-3" to="/Register" >REGISTER</Link> */}
                </div>
            </div>
            
        </div>
    )
}
export default MgFlights