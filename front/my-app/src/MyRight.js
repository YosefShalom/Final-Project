import React, { useEffect, useState } from 'react';
import Ncart from './Ncart';
import backgroundcart from './img/input-bg-03.jpg';





const MyRight = () => {
    const [flights, setFlights] = useState([])
    const [cart, setCart] = useState([])


    useEffect(() => {
        const get_all_Flights = async () => {
            // let aTok = JSON.parse(localStorage.getItem("token")).access;
            // console.log(String(aTok));
            let response = await fetch("http://127.0.0.1:8000/get_all_Flights/", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    // Authorization: "Bearer " + String(aTok),
                },
            });
            let data = await response.json();
            setFlights(data)

            if (response.status === 200) {
                console.log(data);
                console.log("get data");
            } else if (response.statusText === "Unauthorized") {
                console.log("user not logged");
            }
        };

        get_all_Flights()
    }, [])


    const buy = (id) => {
        console.log(flights[id]._id);
        setCart([...cart, flights[id]]);
        console.table(cart);



    };
    return (
        // <Ncart cart={cart}></Ncart>
        <div>

            <button className="fancy" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasBottom" aria-controls="offcanvasBottom"><span className="top-key"></span>
                <span className="text">Open Cart</span>
                <span className="bottom-key-1"></span>
                <span className="bottom-key-2"></span>
                </button>

            <div className="offcanvas offcanvas-bottom" tabIndex="-1" id="offcanvasBottom" aria-labelledby="offcanvasBottomLabel" style={{ backgroundImage: `url(${backgroundcart})` }}>
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasBottomLabel">Offcanvas bottom</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body small">
                    <div><Ncart setCart={setCart} cart={cart}></Ncart></div>
                </div>
            </div>
            
            {/* <div><Ncart cart={cart}></Ncart></div> */}
            {/* <Ncart cart={cart}></Ncart> */}
            <div className="col-sm-9" >
                <div className="row row-cols-1 row-cols-md-4 g-4">
                    {/* <Ncart cart={cart}></Ncart> */}
                    {flights.map((flight, ind) => <div key={ind}>
                        <div className="col">
                            <div className="card" style={{ backgroundImage: `url(${backgroundcart})` }}>
                                <img className="card-img" src="https://picsum.photos/200/300" alt='...'></img>
                                <div className="card-info">
                                    <h1 className="text-title">{flight.Fname}</h1>
                                    <h3 className="text-body">{flight.desc}</h3>
                                    <hr></hr>
                                    Departure Time<h3 className="text-body">{flight.Departure_Time}</h3>
                                    Landing Time<h3 className="text-body">{flight.Landing_Time}</h3>

                                </div>
                                <div className="card-footer">
                                    <span className="text-title">{flight.price}</span>
                                    <div className="card-button" onClick={() => buy(ind)}>
                                        <svg className="svg-icon" viewBox="0 0 20 20">
                                            <path d="M17.72,5.011H8.026c-0.271,0-0.49,0.219-0.49,0.489c0,0.271,0.219,0.489,0.49,0.489h8.962l-1.979,4.773H6.763L4.935,5.343C4.926,5.316,4.897,5.309,4.884,5.286c-0.011-0.024,0-0.051-0.017-0.074C4.833,5.166,4.025,4.081,2.33,3.908C2.068,3.883,1.822,4.075,1.795,4.344C1.767,4.612,1.962,4.853,2.231,4.88c1.143,0.118,1.703,0.738,1.808,0.866l1.91,5.661c0.066,0.199,0.252,0.333,0.463,0.333h8.924c0.116,0,0.22-0.053,0.308-0.128c0.027-0.023,0.042-0.048,0.063-0.076c0.026-0.034,0.063-0.058,0.08-0.099l2.384-5.75c0.062-0.151,0.046-0.323-0.045-0.458C18.036,5.092,17.883,5.011,17.72,5.011z"></path>
                                            <path d="M8.251,12.386c-1.023,0-1.856,0.834-1.856,1.856s0.833,1.853,1.856,1.853c1.021,0,1.853-0.83,1.853-1.853S9.273,12.386,8.251,12.386z M8.251,15.116c-0.484,0-0.877-0.393-0.877-0.874c0-0.484,0.394-0.878,0.877-0.878c0.482,0,0.875,0.394,0.875,0.878C9.126,14.724,8.733,15.116,8.251,15.116z"></path>
                                            <path d="M13.972,12.386c-1.022,0-1.855,0.834-1.855,1.856s0.833,1.853,1.855,1.853s1.854-0.83,1.854-1.853S14.994,12.386,13.972,12.386z M13.972,15.116c-0.484,0-0.878-0.393-0.878-0.874c0-0.484,0.394-0.878,0.878-0.878c0.482,0,0.875,0.394,0.875,0.878C14.847,14.724,14.454,15.116,13.972,15.116z"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>)}
                    
                </div>
                <button className="fancy" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasBottom" aria-controls="offcanvasBottom"><span className="top-key"></span>
                <span className="text">Open Cart</span>
                <span className="bottom-key-1"></span>
                <span className="bottom-key-2"></span>
                </button>

            </div>
           
        </div>

    )
}

export default MyRight