import React, { useState } from 'react';
import MyNav from './MyNav';
import {  Link } from "react-router-dom";

const MyHeder = () => {
    // const [cart, setCart] = useState([])
    const [oricounid, setOricounid] = useState("")
    const [dci, setDci] = useState("")
    const [dti, setDti] = useState("")
    const [flights, setFlights] = useState([])

    const get_Flights_by_parameters = async () => {
        
        // let aTok = JSON.parse(localStorage.getItem("token")).access;
        // console.log(aTok);
        console.log(oricounid)

        let response = await fetch("http://127.0.0.1:8000/get_Flights_by_parameters/" + oricounid + "/" + dci + "/" + dti, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        let data = await response.json();

        // console.log(response);
        setFlights(data);
        // console.log(data);


        if (response.status === 200) {
            // console.log(data);
            console.log("get data");
        } else if (response.statusText === "Unauthorized") {
            console.log("user not logged");
        }
    };
    const addorders = async (id) => {
        let aTok = JSON.parse(localStorage.getItem("token")).access;
        // console.log(String(aTok));
        let response = await fetch("http://127.0.0.1:8000/tickets/", {
            method: "post",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + String(aTok),
            },
            body: JSON.stringify({
                // "pid": id,
                Flight_ld: id,
                // "amount": 3,
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
    // const orderAll = () => {
    //     console.log(cart);
    //     cart.forEach(element => {
    //         addorders(element._id)

    //     })
    // };
    // const buy = (id) => {
    //     console.log(flights[id]._id);
    //     setCart([...cart, flights[id]]);
    //     console.table(cart);



    // };



    return (
        // className="p-5 bg-primary text-white text-center"
        < div>
        
            {/* origin_country_id:<input value={oricounid} onChange={(e) => setOricounid(e.target.value)} />
                Destination_Country_id:<input value={dci} onChange={(e) => setDci(e.target.value)} />
                Departure_Time:<input type='date' value={dti} onChange={(e) => setDti(e.target.value)} />
                origin_country_id:<input id="oricounid" />
                Destination_Country_id:<input id="Dci" />
                Departure_Time:<input type="date" id="Dti" />
        
                <button onClick={() => get_Flights_by_parameters()}>get_Flights_by_parameters</button> */}
            <MyNav></MyNav>


            <div id="booking" className="section">
                <div className="section-center">
                    <div className="container">
                        <div className="row">
                            <div className="booking-form">
                                <form>
                                    {/* <div className="form-group">
                                        <div className="form-checkbox">
                                            <label htmlFor="roundtrip">
                                                <input type="radio" id="roundtrip" name="flight-type"/>
                                                    <span></span>Roundtrip
                                            </label>
                                            <label htmlFor="one-way">
                                                <input type="radio" id="one-way" name="flight-type"/>
                                                    <span></span>One way
                                            </label>
                                            <label htmlFor="multi-city">
                                                <input type="radio" id="multi-city" name="flight-type"/>
                                                    <span></span>Multi-City
                                            </label>
                                        </div>
                                    </div> */}
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <span className="form-label">Flying from</span>
                                                {/* <input className="form-control" type="text" placeholder="City or airport"/> */}
                                                <input className="form-control" type="text" placeholder="origin_country_id" value={oricounid} onChange={(e) => setOricounid(e.target.value)} />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <span className="form-label">Flyning to</span>
                                                {/* <input className="form-control" type="text" placeholder="City or airport"/> */}
                                                <input className="form-control" type="text" placeholder="Destination_Country_id" value={dci} onChange={(e) => setDci(e.target.value)} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-3">
                                            <div className="form-group">
                                                <span className="form-label">Departing</span>
                                                {/* <input className="form-control" type="date" required/> */}
                                                <input className="form-control" type="date" value={dti} onChange={(e) => setDti(e.target.value)} />
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="form-group">
                                                <span className="form-label">Returning</span>
                                                <input className="form-control" type="date" />
                                            </div>
                                        </div>
                                        <div className="col-md-2">
                                            <div className="form-group">
                                                <span className="form-label">Adults (18+)</span>
                                                <select className="form-control">
                                                    <option>1</option>
                                                    <option>2</option>
                                                    <option>3</option>
                                                </select>
                                                <span className="select-arrow"></span>
                                            </div>
                                        </div>
                                        <div className="col-md-2">
                                            <div className="form-group">
                                                <span className="form-label">Children (0-17)</span>
                                                <select className="form-control">
                                                    <option>0</option>
                                                    <option>1</option>
                                                    <option>2</option>
                                                </select>
                                                <span className="select-arrow"></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-3">
                                            <div className="form-group">
                                                <span className="form-label">Travel className</span>
                                                <select className="form-control">
                                                    <option>Economy className</option>
                                                    <option>Business className</option>
                                                    <option>First className</option>
                                                </select>
                                                <span className="select-arrow"></span>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="form-btn">
                                                {/* <button  onClick={() => get_Flights_by_parameters()}>Show flights</button> */}
                                                <button type="button" className='btn btn-success' onClick={() => get_Flights_by_parameters()}>flights</button>
                                                {/* <Link className="nav-link" to="/Logreg">Login</Link> */}
                                            </div>
                                        </div>
                                        
                                        

                                    </div>
                                    
                                    
                                </form>
                            </div>
                            
                            {flights.map((flight, ind) => <div key={flights}>
                                <hr></hr>

                                <div className="container" >
                                    <div className="row tm-register-row tm-mb-35">
                                        <div >
                                            <header className="font-weight-light tm-bg-black p-5 h-100">

                                                <h3 className="mt-0 text-black font-weight-light">{flight.Fname}</h3>

                                                <h6 className="mt-0 text-black font-weight-light">{flight.desc}</h6>
                                                <h8 className="mt-0 text-black font-weight-light">Vestibulum neque neque, porttitor quis lacinia eu, iaculis id dui. Mauris quis velit lectus.</h8>
                                                <div className="card-footer" style={{ backgroundColor: ' rgba(0, 0, 0, 0.3)' }}>
                                                    <span className="text-title ">{flight.price}</span>
                                                    <div className="card-button" onClick={() => addorders(flight._id)}>QuikBuy
                                                        <svg className="svg-icon" viewBox="0 0 20 20">
                                                            <path d="M17.72,5.011H8.026c-0.271,0-0.49,0.219-0.49,0.489c0,0.271,0.219,0.489,0.49,0.489h8.962l-1.979,4.773H6.763L4.935,5.343C4.926,5.316,4.897,5.309,4.884,5.286c-0.011-0.024,0-0.051-0.017-0.074C4.833,5.166,4.025,4.081,2.33,3.908C2.068,3.883,1.822,4.075,1.795,4.344C1.767,4.612,1.962,4.853,2.231,4.88c1.143,0.118,1.703,0.738,1.808,0.866l1.91,5.661c0.066,0.199,0.252,0.333,0.463,0.333h8.924c0.116,0,0.22-0.053,0.308-0.128c0.027-0.023,0.042-0.048,0.063-0.076c0.026-0.034,0.063-0.058,0.08-0.099l2.384-5.75c0.062-0.151,0.046-0.323-0.045-0.458C18.036,5.092,17.883,5.011,17.72,5.011z"></path>
                                                            <path d="M8.251,12.386c-1.023,0-1.856,0.834-1.856,1.856s0.833,1.853,1.856,1.853c1.021,0,1.853-0.83,1.853-1.853S9.273,12.386,8.251,12.386z M8.251,15.116c-0.484,0-0.877-0.393-0.877-0.874c0-0.484,0.394-0.878,0.877-0.878c0.482,0,0.875,0.394,0.875,0.878C9.126,14.724,8.733,15.116,8.251,15.116z"></path>
                                                            <path d="M13.972,12.386c-1.022,0-1.855,0.834-1.855,1.856s0.833,1.853,1.855,1.853s1.854-0.83,1.854-1.853S14.994,12.386,13.972,12.386z M13.972,15.116c-0.484,0-0.878-0.393-0.878-0.874c0-0.484,0.394-0.878,0.878-0.878c0.482,0,0.875,0.394,0.875,0.878C14.847,14.724,14.454,15.116,13.972,15.116z"></path>
                                                        </svg>
                                                    </div>
                                                </div>
                                            </header>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 ml-auto mr-0 text-center">
                                            <Link className="waves-effect btn-large btn-large-white px-4 black-text rounded-0" to="/Register" >REGISTER</Link>
                                        </div>

                                    </div>
                                    
                                </div>
                            </div>)}
                            
                

                        </div>
                        
                        

                    </div>
                    
                    
                </div>

            </div>


            {/* <MyRight></MyRight> */}

        </div >


    )
}

export default MyHeder