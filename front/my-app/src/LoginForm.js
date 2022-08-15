import React, { useState } from 'react';
// import background from './img/input-bg-04.jpg';

// import jwt_decode from "jwt-decode";



const LoginForm = () => {
    const [user, setUser] = useState("")
    const [pwd, setPwd] = useState("")
    // const [newUser, setNewUser] = useState("")

    const login = async () => {
        // console.log("bef");
        let token = await fetch("http://127.0.0.1:8000/token/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username: user,
                password: pwd,
            }),
        });
        let theToken = await token.json();
        if (token.status === 200) {
            console.log("token next");
            // console.log(jwt_decode(theToken.access));
            // setNewUser(jwt_decode(theToken.access))
            // console.log(theToken);
            localStorage.setItem("token", JSON.stringify(theToken));
            setUser("")
            setPwd("")
        } else {
            console.log("user not logged");
            alert("משהו לא בסדר");

        }
        

        // localStorage.setItem("tokenr", JSON.stringify(theToken.refresh));
    };
    return (
        <div className="container" >
            
            <div >
                <div >
                    <div >
                        <div className="input-field">
                            <input placeholder="Username" id="username" name="username" type="text" className="validate" value={user} onChange={(e) => setUser(e.target.value)} />
                        </div>
                        <div className="input-field mb-5">
                            <input placeholder="Password" id="password" name="password" type="password" className="validate" value={pwd} onChange={(e) => setPwd(e.target.value)} />
                        </div>
                        <div className="tm-flex-lr">
                            <i className="white-text small">Forgot Password?</i>
                            <button className="cta" onClick={() => login()} >
                                <span>Login</span>
                                <svg viewBox="0 0 13 10" height="10px" width="15px">
                                    {/* <path d="M1,5 L11,5"></path> */}
                                    <polyline points="8 1 12 5 8 9"></polyline>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginForm