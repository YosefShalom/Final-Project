import React from 'react';
import {  Link } from "react-router-dom";
// import backgroundall from './img/bg.jpg';


const MyNav = () => {
    const logout = async () => {
        // console.log("bef");
        let newTock ={refresh: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90e…dlIn0.30bzxPxs8fXCWEKr8gkpudhXMPp4xHmZBeGPXTbY4PY'}
        let aTok = JSON.parse(localStorage.getItem("token"));
            if (String(aTok) === "undefined") {
                // console.log(aTok);
                alert("user not logged");
                // return
            }else{(localStorage.setItem("token",JSON.stringify(newTock)));alert("user logout");}
                
        
    };
    return (
        // <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        //     <div className="container-fluid">
        //         <ul className="navbar-nav">
        //             <li className="nav-item">
        //             <Link to="/prod">My Products</Link> |{" "}
        //             </li>
        //             <li className="nav-item">
        //             <Link className="nav-link" to="/MyHeder">MyHeder</Link> |{" "}
        //             </li>
        //             <li className="nav-item">
        //             <Link className="nav-link" to="/Vav">Vav</Link> |{" "}
        //             </li>
        //             <li className="nav-item">
        //             <Link className="nav-link" to="/MyRight" >MyRight</Link> |{" "}
        //             </li>
        //         </ul>
        //     </div>

        // </nav>
        <header role="banner" >
            <nav className="navbar navbar-expand-md navbar-dark " style={{ backgroundColor: 'transparent' }}>
                <div className="container"  >
                    {/* <a className="navbar-brand" href="index.html">Y&M</a> */}
                    <div >
                        <div className="scannerb">
                            <h1>The Y&S App</h1>
                        </div>
                    </div>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample05" aria-controls="navbarsExample05" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarsExample05">
                        <ul className="navbar-nav ml-auto pl-lg-5 pl-0">
                            <li className="nav-item">
                                <Link className="nav-link active" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/MyRight" >GoTo</Link>
                            </li>


                            {/* <CNavbarNav>
                                <CDropdown dark component="li" variant="nav-item">
                                    <CDropdownToggle>Dropdown</CDropdownToggle>
                                    <CDropdownMenu>
                                        <CDropdownItem href="#">Action</CDropdownItem>
                                        <CDropdownItem href="#">Another action</CDropdownItem>
                                        <CDropdownItem href="#">Something else here</CDropdownItem>
                                        <CDropdownDivider />
                                        <CDropdownItem href="#">Separated link</CDropdownItem>
                                    </CDropdownMenu>
                                </CDropdown>
                            </CNavbarNav> */}
                            <li className="nav-item dropdown" >
                                <i className="nav-link dropdown-toggle" id="dropdown04" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Manegment</i>
                                <div className="dropdown-menu" aria-labelledby="dropdown04" style={{ backgroundColor: 'transparent' }}>
                                    <Link className="dropdown-item" to="/AddStaff">Add staff/manag</Link>
                                    <Link className="dropdown-item" to="/AdAirCmp">AdAirCmp</Link>
                                    <Link className="dropdown-item" to="/GetAirline">GetAirline</Link>
                                    <Link className="dropdown-item" to="/MgFlights">MgFlights</Link>
                                    {/* <Link className="dropdown-item" to="/Ncart">Ncart</Link> */}
                                </div>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Logreg">Login</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Profile">My Profile</Link>
                            </li>

                        </ul>

                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item cta-btn">
                                <i className="nav-link" >Contact Us</i>
                            </li>
                        </ul>
                        {/* <div onClick={() => logout()}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-door-open-fill" viewBox="0 0 16 16">
                            <path d="M1.5 15a.5.5 0 0 0 0 1h13a.5.5 0 0 0 0-1H13V2.5A1.5 1.5 0 0 0 11.5 1H11V.5a.5.5 0 0 0-.57-.495l-7 1A.5.5 0 0 0 3 1.5V15H1.5zM11 2h.5a.5.5 0 0 1 .5.5V15h-1V2zm-2.5 8c-.276 0-.5-.448-.5-1s.224-1 .5-1 .5.448.5 1-.224 1-.5 1z" />
                        </svg>
                        </div> */}
                    </div>
                    <div onClick={() => logout()}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-door-open-fill" viewBox="0 0 16 16">
                            <path d="M1.5 15a.5.5 0 0 0 0 1h13a.5.5 0 0 0 0-1H13V2.5A1.5 1.5 0 0 0 11.5 1H11V.5a.5.5 0 0 0-.57-.495l-7 1A.5.5 0 0 0 3 1.5V15H1.5zM11 2h.5a.5.5 0 0 1 .5.5V15h-1V2zm-2.5 8c-.276 0-.5-.448-.5-1s.224-1 .5-1 .5.448.5 1-.224 1-.5 1z" />
                        </svg>
                        </div>
                   
                </div>
               
            </nav>
            
        </header>


    )
}

export default MyNav