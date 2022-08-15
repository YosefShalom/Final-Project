import React, { useState } from 'react';

const AddStaff = () => {
    const [Stafusername, setStafUsername] = useState("")
    const [Stafemail, setStafEmail] = useState("")
    const [Stafpassword, setStafPassword] = useState("")
    const [StafnewUser, setStafNewUser] = useState([])
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [newUser, setNewUser] = useState([])
    const addStafUser = async () => {
        let aTok = JSON.parse(localStorage.getItem("token")).access;
        // console.log(String(aTok));
        let response = await fetch("http://127.0.0.1:8000/addstaffUser/", {
            method: "post",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + String(aTok),
            },
            body: JSON.stringify({
                username: Stafusername,
                email: Stafemail,
                password: Stafpassword,

            }),
        });
        let data = await response.json();
        setStafNewUser(data)
        console.log(StafnewUser)

        if (response.status === 200) {
            // console.log(data);
            console.log("get data");
        } else if (response.statusText === "Unauthorized") {
            console.log("logoutUser();");
        }
        setStafUsername("")
        setStafEmail("")
        setStafPassword("")
    };
    const addsuperuserUser = async () => {
        let aTok = JSON.parse(localStorage.getItem("token")).access;
        console.log(String(aTok));
        let response = await fetch("http://127.0.0.1:8000/addsuperuserUser/", {
            method: "post",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + String(aTok),
            },
            body: JSON.stringify({
                username: username,
                email: email,
                password: password,

            }),
        });
        let data = await response.json();
        setNewUser(data)
        console.log(newUser)

        if (response.status === 200) {
            // console.log(data);
            console.log("get data");
        } else if (response.statusText === "Unauthorized") {
            console.log("logoutUser();");
        }
        setUsername("")
        setEmail("")
        setPassword("")
    };
    return (
        <div className="container">
            <div className="row tm-register-row">
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 tm-register-col-l">
                    <header className="mb-5" >
                    <div action="" className="tm-bg-black p-5 h-100">
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
                            <input placeholder="Username" id="Stafusername" name="Stafusername" type="text" className="validate" value={Stafusername} onChange={(e) => setStafUsername(e.target.value)} />
                        </div>
                        
                        <div className="input-field">
                            <input placeholder="Email" id="Stafemail" name="Stafemail" type="email" className="validate" value={Stafemail} onChange={(e) => setStafEmail(e.target.value)} />
                        </div>
                        <div className="input-field">
                            <input placeholder="Password" id="Stafpassword" name="Stafpassword" type="password" className="validate" value={Stafpassword} onChange={(e) => setStafPassword(e.target.value)} />
                        </div>
                        
                        <div className="text-right mt-4">
                            <button className="cta" onClick={() => addStafUser()} >
                                <span>addStafUser</span>
                                <svg viewBox="0 0 13 10" height="10px" width="15px">
                                    <path d="M1,5 L11,5"></path>
                                    <polyline points="8 1 12 5 8 9"></polyline>
                                </svg>
                            </button>
                        </div>
                    </div>
                    </header>

                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 tm-register-col-l">
                    <header className="mb-5" >
                    <div action="" className="tm-bg-black p-5 h-100">
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
                            <input placeholder="Username" id="username" name="username" type="text" className="validate" value={username} onChange={(e) => setUsername(e.target.value)} />
                        </div>
                        
                        <div className="input-field">
                            <input placeholder="Email" id="email" name="email" type="email" className="validate" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="input-field">
                            <input placeholder="Password" id="password" name="password" type="password" className="validate" value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        
                        <div className="text-right mt-4">
                            <button className="cta" onClick={() => addsuperuserUser()} >
                                <span>addsuperuserUser</span>
                                <svg viewBox="0 0 13 10" height="10px" width="15px">
                                    <path d="M1,5 L11,5"></path>
                                    <polyline points="8 1 12 5 8 9"></polyline>
                                </svg>
                            </button>
                        </div>
                    </div>
                    </header>

                </div>
            </div >
            {/* <footer className="row tm-mt-big mb-3">
            <div className="col-xl-12">
                <p className="text-center grey-text text-lighten-2 tm-footer-text-small">
                    Copyright &copy; 2018 Company Name

                    - <a rel="nofollow" href="http://www.tooplate.com/view/2105-input">Input</a> by
                    <a rel="nofollow" href="http://tooplate.com" className="tm-footer-link">Tooplate</a>
                </p>
            </div>
        </footer> */}
        </div >
    )
}

export default AddStaff