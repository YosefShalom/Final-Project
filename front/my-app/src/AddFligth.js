import React, { useState } from 'react';




const AddFligth = () => {
    const [Fname, setFname] = useState("")
    const [desc, setDesc] = useState("")
    const [price, setPrice] = useState("")
    const [airId, setAirId] = useState("")
    const [origId, setOrigId] = useState("")
    const [desId, setDesId] = useState("")
    const [depIme, setDepIme] = useState("")
    const [landT, setLandT] = useState("")
    const [ticets, setTicets] = useState("")
    const addFlights = async () => {
        var DepIme = document.getElementById("depIme").value;
        var ToDate = new Date();
        console.log(DepIme);
        if (new Date(DepIme).getTime() <= ToDate.getTime()) {
            alert("The Date must be Bigger or Equal to today date");
            // console.log(alert);
            return
       }
        let aTok = JSON.parse(localStorage.getItem("token")).access;
        console.log(String(aTok));
        let response = await fetch("http://127.0.0.1:8000/add_Flights/", {
            method: "post",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + String(aTok),
            },
            body: JSON.stringify({
                Fname: Fname,
                desc: desc,
                price: price,
                Airline_Company_id: airId,
                Origin_Country_id: origId,
                Destination_Country_id: desId,
                Departure_Time: depIme,
                Landing_Time: landT,
                Remaining_Tickets: ticets,
            }),
        });
        let data = await response.json();

        if (response.status === 200) {
            console.log(data);
            console.log("get data");
        } else if (response.statusText === "Unauthorized") {
            console.log("logoutUser();");
        }



    };
  return (
   
    <div className="container">
            <div >
                <div >
                    <div  action="" >
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
                            <input placeholder="Airline Compeny ID" id="airId" name="airId" type="number" className="validate" value={airId} onChange={(e) => setAirId(e.target.value)} />
                        </div>
                        <div className="input-field">
                            <input placeholder="origin contry ID" id="origId" name="origId" type="number" className="validate" value={origId} onChange={(e) => setOrigId(e.target.value)} />
                        </div>
                        <div className="input-field">
                            <input placeholder="deteniton contry ID" id="desId" name="desId" type="number" className="validate" value={desId} onChange={(e) => setDesId(e.target.value)} />
                        </div>
                        <div className="input-field">
                            <input placeholder="Depurter Time" id="depIme" name="depIme" type="date" className="validate" value={depIme} onChange={(e) => setDepIme(e.target.value)} />
                        </div>
                        <div className="input-field">
                            <input placeholder="Depurter Time" id="landT" name="landT" type="date" className="validate" value={landT} onChange={(e) => setLandT(e.target.value)} />
                        </div>
                        <div className="input-field">
                            <input placeholder="Flihgt Name" id="Fname" name="Fname" type="text" className="validate" value={Fname} onChange={(e) => setFname(e.target.value)} />
                        </div>
                        <div className="input-field">
                            <input placeholder="Flihgt Desc" id="desc" name="desc" type="text" className="validate" value={desc} onChange={(e) => setDesc(e.target.value)} />
                        </div>
                        <div className="input-field">
                            <input placeholder="Reminig Ticets" id="ticets" name="ticets" type="number" className="validate" value={ticets} onChange={(e) => setTicets(e.target.value)} />
                        </div>
                        <div className="input-field">
                            <input placeholder="Price" id="price" name="price" type="number" className="validate" value={price} onChange={(e) => setPrice(e.target.value)} />
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
                        <button className="cta" onClick={() => addFlights()}>
                            <span>add Flight</span>
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
                <div >
                    <header className="font-weight-light tm-bg-black p-5 h-50">
                        <h3 className="mt-0 text-white">Add Flights</h3>
                        <h5 className="grey-text">jljljl</h5>
                        <h5 className="grey-text">Our site will provide you with different and special customers from all over the world and customers with deep pockets who are willing to pay for their well-being and the little pleasures of life.
                        </h5>
                        
                    </header>
                    
                    
                
                    

                </div>
            </div>
           
            {/* <footer className="row tm-mt-big mb-3">
            <h1>{newAir.contry_name}</h1>
            </footer> */}
        </div>
   
  )
}

export default AddFligth