import React, { useState } from 'react';
import  './css/materialize.min.css' ;


const AdAirCmp = () => {
    const [ACname, setACname] = useState("")
    const [desc, setDesc] = useState("")
    const [contry_id, setContry_id] = useState("")
    const [contry_name, setContry_name] = useState("")
    const [newAir, setNewAir] = useState([])

    const addAirComp = async () => {
        let aTok = JSON.parse(localStorage.getItem("token")).access;
        // console.log(String(aTok));
        console.log("one");
        let response = await fetch("http://127.0.0.1:8000/add_Airline_Companies/", {
            method: "post",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + String(aTok),
            },
            body: JSON.stringify({
                ACname: ACname,
                desc: desc,
                contry_id: contry_id,
                contry_name: contry_name,
                // user: user,
            }),
        });
        console.log("response.status ");
        let data = await response.json();
        setNewAir(data);
        console.log(newAir );
        

        if (response.status === 200) {
            console.log(data);
            console.log("get data");
        } else if (response.statusText === "Unauthorized") {
            console.log("logoutUser();");
        }
    };
    return (
        
        // ACname:<input value={ACname} onChange={(e) => setACname(e.target.value)} />
        // desc:<input value={desc} onChange={(e) => setDesc(e.target.value)} />
        // contry_id:<input value={contry_id} onChange={(e) => setContry_id(e.target.value)} />
        // contry_name:<input  value={contry_name} onChange={(e) => setContry_name(e.target.value)} />
        // <button onClick={() => addAirComp()}>addAirComp</button>
       
            <div className="container" >
            <div className="row tm-register-row tm-mb-35">
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 tm-login-l">
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
                            <input placeholder="Airline Compeny Name" id="ACname" name="ACname" type="text" className="validate" value={ACname} onChange={(e) => setACname(e.target.value)} />
                        </div>
                        <div className="input-field">
                            <input placeholder="Airline desc" id="desc" name="desc" type="text" className="validate" value={desc} onChange={(e) => setDesc(e.target.value)} />
                        </div>
                        <div className="input-field">
                            <input placeholder="contry_id" id="contry_id" name="contry_id" type="number" className="validate" value={contry_id} onChange={(e) => setContry_id(e.target.value)} />
                        </div>
                        <div className="input-field">
                            <input placeholder="Contry Name" id="contry_name" name="contry_name" type="text" className="validate" value={contry_name} onChange={(e) => setContry_name(e.target.value)} />
                        </div>
                        {/* <div className="input-field">
                            <input placeholder="Address" id="address" name="address" type="text" className="validate" />
                        </div>
                        <div className="input-field">
                            <input placeholder="District/Province" id="district" name="district" type="text" className="validate" />
                        </div>
                        <div className="row">
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6 pl-0 tm-pr-xs-0">
                                <select name="city">
                                    <option value="-">Your City</option>
                                    <option value="Bangkok">Bangkok</option>
                                    <option value="Yangon">Yangon</option>
                                    <option value="Mumbai">Mumbai</option>
                                    <option value="Singapore">Singapore</option>
                                </select>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6 pr-0 tm-pl-xs-0">
                                <div className="input-field">
                                    <input placeholder="Zip Code" id="zipcode" name="zipcode" type="text" className="validate" />
                                </div>
                            </div>
                        </div> */}
                        <button className="cta" onClick={() => addAirComp()}>
                            <span>Join Y&M</span>
                            <svg viewBox="0 0 13 10" height="10px" width="15px">
                                {/* <path d="M1,5 L11,5"></path> */}
                                <polyline points="8 1 12 5 8 9"></polyline>
                            </svg>
                        </button>
                        {/* <div className="text-right mt-4">
                            <button type="submit" className="waves-effect btn-large btn-large-white px-4 black-text" onClick={() => addAirComp()}></button>
                        </div> */}
                    </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 tm-login-r">
                    <header className="font-weight-light tm-bg-black p-5 h-100">
                        <h3 className="mt-0 text-white">Add Airline Compeny</h3>
                        <h5 className="grey-text">Here you can add airlines through which you can start issuing flights to whichever destination you choose and start earning</h5>
                        <p className="grey-text">Our site will provide you with different and special customers from all over the world and customers with deep pockets who are willing to pay for their well-being and the little pleasures of life.
                        </p>
                    </header>

                </div>
            </div>
            {/* <footer className="row tm-mt-big mb-3">
            <h1>{newAir.contry_name}</h1>
            </footer> */}
        </div>

    )
}

export default AdAirCmp