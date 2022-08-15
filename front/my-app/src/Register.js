import React, { useState } from 'react';


const Register = () => {
    const [username, setuUername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [newUser, setNewUser] = useState([])
    const addUser = async () => {
        // let aTok = JSON.parse(localStorage.getItem("token")).access;
        // console.log(String(aTok));
        let response = await fetch("http://127.0.0.1:8000/addUser/", {
            method: "post",
            headers: {
                "Content-Type": "application/json",
                // Authorization: "Bearer " + String(aTok),
            },
            body: JSON.stringify({
                username: username,
                email: email,
                password: password,

            }),
        });
        let data = await response.json();
        setNewUser(data)
        console.log(newUser.username)

        if (response.status === 200) {
            // console.log(data);
            console.log("User Aded");
        } else if (response.statusText === "Unauthorized") {
            console.log("logoutUser();");
            alert("משהו לא בסדר");
        
        }
        // setuUername("")
        // setEmail("")
        // setPassword("")
    };
    return (
        <div className="container">
            <div >
                <div >
                    <div>
                        <div className="mb-2">
                            <label className="mr-4">
                                <input className="with-gap" name="title" type="radio" value="mr" />
                                <span>Mr.</span>
                            </label>
                            <label className="mr-4">
                                <input className="with-gap" name="title" type="radio" value="ms" />
                                <span>Ms.</span>
                            </label>
                            <label>
                                <input className="with-gap" name="title" type="radio" value="mrs" />
                                <span>Mrs.</span>
                            </label>
                        </div>

                        <div className="input-field">
                            <input placeholder="Username" id="username" name="username" type="text" className="validate" value={username} onChange={(e) => setuUername(e.target.value)} />
                        </div>

                        <div className="input-field">
                            <input placeholder="Email" id="email" name="email" type="email" className="validate" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="input-field">
                            <input placeholder="Password" id="password" name="password" type="password" className="validate" value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>

                        <div className="text-right mt-4">
                            <button className="cta" onClick={() => addUser()} >
                                <span>REGISTER</span>
                                <svg viewBox="0 0 13 10" height="10px" width="15px">
                                    <path d="M1,5 L11,5"></path>
                                    <polyline points="8 1 12 5 8 9"></polyline>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
               

            </div>

           
        </div >
    )
}

export default Register