import React, { useEffect, useState } from 'react';
import {Outlet,
     Link
} from "react-router-dom";
import jwt_decode from "jwt-decode";



const Logreg = () => {
    const [bayer, setBayer] = useState("")
    const logout = async () => {
        // console.log("bef");
        let newTock ={refresh: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90e…dlIn0.30bzxPxs8fXCWEKr8gkpudhXMPp4xHmZBeGPXTbY4PY'}
        let aTok = JSON.parse(localStorage.getItem("token"));
            if (String(aTok) === "undefined") {
                // console.log(aTok);
                // alert("user not logged");
                // return
            }else{(localStorage.setItem("token",JSON.stringify(newTock)));alert("user logout");}
                
        
    };
    const delete_User = async (uID) => {
        
        let aTok = JSON.parse(localStorage.getItem("token")).access;
        if (String(aTok) === "undefined") {
            console.log("user not logged");
            alert("user not logged");
            return
            }
        // console.log(String(aTok));
        let response = await fetch("http://127.0.0.1:8000/delete_User/" + uID, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + String(aTok),
            },
        });
        let data = await response.json();

        if (response.status === 200) {
            console.log(data);
            console.log("get data");
        } else if (response.statusText === "Unauthorized") {
            console.log("user not logged");
        }
        let newTock ={refresh: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90e…dlIn0.30bzxPxs8fXCWEKr8gkpudhXMPp4xHmZBeGPXTbY4PY'}
        let vTok = JSON.parse(localStorage.getItem("token"));
            if (String(vTok) === "undefined") {
                // console.log(vTok);
                alert("user not logged");
                return
            }else{(localStorage.setItem("token",JSON.stringify(newTock)));alert("user deleted and logout");}
    };
    
    useEffect(() => {
        const ter = async () => {
            let aTok = JSON.parse(localStorage.getItem("token")).access;
            if (String(aTok) === "undefined") {
                // console.log(aTok);
                alert("user not logged");
                return
                }
                // console.log(aTok)
                // console.log(jwt_decode(aTok));
                setBayer(jwt_decode(aTok))
        };

        ter()
    }, [])

    
    return (
       
        <div className="container" >
            <div className="row tm-register-row tm-mb-35">
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 tm-login-l">
                    <div action="" className="tm-bg-black p-5 h-100">
                        <Outlet />
                    </div>
                </div>
                
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 tm-login-r">
                    <header className="font-weight-light tm-bg-black p-5 h-100">
                        <figure className="snip0057 blue">
                            <figcaption>
                                <h2>welcome <span>{bayer.username}</span></h2>
                                <p>Hi and welcome to our website here you can login/register, once you log in to your account you will see through me your tickets and other personal or public details</p>
                                <div className="icons"><Link to="/GetTick"><i className="ion-ios-color-filter"></i></Link><Link to="/Logreg" ><i className="ion-beer"></i></Link><Link to="/Logreg" ><i className="ion-ios-trash-outline"  onClick={() => delete_User(bayer.user_id)} ></i></Link><Link to="/Logreg" ><i onClick={() => logout()} className="ion-log-out"></i></Link></div>
                            </figcaption>
                            <div className="image"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample4.jpg" alt="sample3" /></div>
                            <div className="position">User Support</div>
                        </figure>
                    </header>
                </div>
                
            </div>

            <div className="row">
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 ml-auto mr-0 text-center">
                    <Link className="cta" to="/Logreg/Register">
                        <span>Join Y&M</span>
                        <svg viewBox="0 0 13 10" height="10px" width="15px">
                            {/* <path d="M1,5 L11,5"></path> */}
                            <polyline points="8 1 12 5 8 9"></polyline>
                        </svg>
                    </Link>
                    
                    <Link className="cta" to="/Logreg/LoginForm">
                        <span>Login</span>
                        <svg viewBox="0 0 13 10" height="10px" width="15px">
                            {/* <path d="M1,5 L11,5"></path> */}
                            <polyline points="8 1 12 5 8 9"></polyline>
                        </svg>
                    </Link>
                    <Link className="cta" to="/Logreg/UpImage">
                        <span>UpImage</span>
                        <svg viewBox="0 0 13 10" height="10px" width="15px">
                            {/* <path d="M1,5 L11,5"></path> */}
                            <polyline points="8 1 12 5 8 9"></polyline>
                        </svg>
                    </Link>
                    

                    
                </div>
            </div>
            
        </div>
    )
}

export default Logreg