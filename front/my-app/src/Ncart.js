import React, { useEffect, useState } from 'react';
import backgroundcart from './img/input-bg-03.jpg';
import jwt_decode from "jwt-decode";
// import MyRight from './MyRight';

const Ncart = ({ cart,setCart}) => {
    const [bayer, setBayer] = useState("")
    const addorders = async (id) => {
        let aTok = JSON.parse(localStorage.getItem("token")).access;
        if (String(aTok) === "undefined") {
            console.log("user not logged");
            alert("user not logged");
            return
            }
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
            // console.log(jwt_decode(aTok));
            // setBayer(jwt_decode(aTok))
        } else if (response.statusText === "Unauthorized") {
            console.log("logoutUser();");
        }
    };
    useEffect(() => {
        const ter = async (id) => {
            let aTok = JSON.parse(localStorage.getItem("token")).access;
            if (String(aTok) === "undefined") {
                console.log("user not logged");
                alert("user not logged");
                return
                }
                // console.log(aTok)
                // console.log(jwt_decode(aTok));
                setBayer(jwt_decode(aTok))
            if (aTok.status === 200) {
                // console.log("aTok.status,");
                // console.log(jwt_decode(aTok));
                setBayer(jwt_decode(aTok))
            } else if (aTok.statusText === "Unauthorized") {
                console.log("logoutUser();");
            }
        };

        ter()
    }, [])
   
    const orderAll = () => {
        console.log(cart);
        cart.forEach(element => {
            addorders(element._id)

        })
    };
    const delfc =(id)=>{
            let elementToRemove = id
            setCart(cart => cart.filter(flight => flight._id !== elementToRemove ))
          }
    return (
        <section className="h-100 h-custom" style={{ backgroundImage: `url(${backgroundcart})`}}>
            <div className="container py-5 h-5" >
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col">
                        <div className="card"  style={{ backgroundImage: `url(${backgroundcart})`}}>
                            <div className="card-body p-0">

                                <div className="row">

                                    <div className="col-lg-7 ">
                                        <h5 className="mb-3"><i className="text-body"><i
                                            className="fas fa-long-arrow-alt-left me-2"></i>Continue shopping</i></h5>
                                        <hr />

                                        <div className="d-flex justify-content-between align-items-center mb-4">
                                            <div>
                                                <h3 className="mb-1">Shopping cart</h3>
                                                <h6 className="mb-0">You have {cart.length} in your cart</h6>
                                            </div>
                                            {/* <div>
                                                <p className="mb-0"><span className="text-muted">Sort by:</span> <a href="#!"
                                                    className="text-body">price <i className="fas fa-angle-down mt-1"></i></a></p>
                                            </div> */}
                                        </div>
                                        {cart.map((flight, ind) => <div key={ind} >

                                            <div className="card mb-3"style={{ backgroundImage: `url(${backgroundcart})`}}>
                                                <div className="card-body">
                                                    <div className="d-flex justify-content-between">
                                                        <div className="d-flex flex-row align-items-center">
                                                            <div>
                                                                <img
                                                                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img1.webp"
                                                                    className="img-fluid rounded-3" alt="Shopping item" style={{ width: `65px` }} />
                                                            </div>
                                                            <div className="ms-3">
                                                                <h5>{flight.Fname}</h5>
                                                                <p className="small mb-0">256GB, Navy Blue</p>
                                                            </div>
                                                        </div>
                                                        <div className="d-flex flex-row align-items-center">
                                                            <div style={{ width: `50px` }}>
                                                                <h5 className="fw-normal mb-0">2</h5>
                                                            </div>
                                                            <div style={{ width: `80px` }}>
                                                                <h5 className="mb-0">{flight.price}</h5>
                                                            </div>
                                                            {/* <span className="text-title">{flight.price}</span> */}
                                                            <div className="card-button" onClick={() => addorders(flight._id)}>
                                                                <svg className="svg-icon" viewBox="0 0 20 20">
                                                                    <path d="M17.72,5.011H8.026c-0.271,0-0.49,0.219-0.49,0.489c0,0.271,0.219,0.489,0.49,0.489h8.962l-1.979,4.773H6.763L4.935,5.343C4.926,5.316,4.897,5.309,4.884,5.286c-0.011-0.024,0-0.051-0.017-0.074C4.833,5.166,4.025,4.081,2.33,3.908C2.068,3.883,1.822,4.075,1.795,4.344C1.767,4.612,1.962,4.853,2.231,4.88c1.143,0.118,1.703,0.738,1.808,0.866l1.91,5.661c0.066,0.199,0.252,0.333,0.463,0.333h8.924c0.116,0,0.22-0.053,0.308-0.128c0.027-0.023,0.042-0.048,0.063-0.076c0.026-0.034,0.063-0.058,0.08-0.099l2.384-5.75c0.062-0.151,0.046-0.323-0.045-0.458C18.036,5.092,17.883,5.011,17.72,5.011z"></path>
                                                                    <path d="M8.251,12.386c-1.023,0-1.856,0.834-1.856,1.856s0.833,1.853,1.856,1.853c1.021,0,1.853-0.83,1.853-1.853S9.273,12.386,8.251,12.386z M8.251,15.116c-0.484,0-0.877-0.393-0.877-0.874c0-0.484,0.394-0.878,0.877-0.878c0.482,0,0.875,0.394,0.875,0.878C9.126,14.724,8.733,15.116,8.251,15.116z"></path>
                                                                    <path d="M13.972,12.386c-1.022,0-1.855,0.834-1.855,1.856s0.833,1.853,1.855,1.853s1.854-0.83,1.854-1.853S14.994,12.386,13.972,12.386z M13.972,15.116c-0.484,0-0.878-0.393-0.878-0.874c0-0.484,0.394-0.878,0.878-0.878c0.482,0,0.875,0.394,0.875,0.878C14.847,14.724,14.454,15.116,13.972,15.116z"></path>
                                                                </svg>
                                                                
                                                                
                                                            </div>
                                                            <div className="card-button" onClick={() => delfc(flight._id)}>
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                                                                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                                                                    <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                                                                </svg>

                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>)}
                                    </div>
                                    <div className="col-lg-5">

                                        <div className="card bg-transparent text-white rounded-3">
                                            <div className="card-body">
                                                <div className="d-flex justify-content-between align-items-center mb-4">
                                                    <h5 className="mb-0">{bayer.username}</h5>
                                                    <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp"
                                                        className="img-fluid rounded-3" style={{ width: `45px` }} alt="Avatar" />
                                                </div>

                                               

                                                <form className="mt-4">
                                                    <div className="form-outline form-white mb-4">
                                                        <input type="text" id="typeName" className="form-control form-control-lg" siez="17"
                                                            placeholder="Cardholder's Name" />
                                                        <label className="form-label" htmlFor="typeName">Cardholder's Name</label>
                                                    </div>

                                                    <div className="form-outline form-white mb-4">
                                                        <input type="text" id="typeText" className="form-control form-control-lg" siez="17"
                                                            placeholder="1234 5678 9012 3457" minLength="19" maxLength="19" />
                                                        <label className="form-label" htmlFor="typeText">Card Number</label>
                                                    </div>

                                                    <div className="row mb-4">
                                                        <div className="col-md-6">
                                                            <div className="form-outline form-white">
                                                                <input type="text" id="typeExp" className="form-control form-control-lg"
                                                                    placeholder="MM/YYYY" size="7" minLength="7" maxLength="7" />
                                                                <label className="form-label" htmlFor="typeExp">Expiration</label>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="form-outline form-white">
                                                                <input type="password" id="typeText" className="form-control form-control-lg"
                                                                    placeholder="&#9679;&#9679;&#9679;" size="1" minLength="3" maxLength="3" />
                                                                <label className="form-label" htmlFor="typeText">Cvv</label>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </form>

                                                <hr className="my-4" />

                                                <div className="d-flex justify-content-between">
                                                    <h6 className="mb-2">Subtotal</h6>
                                                    <h6 className="mb-2">$4798.00</h6>
                                                </div>

                                                <div className="d-flex justify-content-between">
                                                    <h6 className="mb-2">Shipping</h6>
                                                    <h6 className="mb-2">$20.00</h6>
                                                </div>

                                                <div className="d-flex justify-content-between mb-4">
                                                    <h6 className="mb-2">Total(Incl. taxes)</h6>
                                                    <h6 className="mb-2">$4818.00</h6>
                                                </div>

                                                <button type="button" onClick={() => orderAll()} className="btn btn-info btn-block btn-lg">
                                                    <div className="d-flex justify-content-between">
                                                        <span>$4818.00</span>
                                                        <span>Checkout <i className="fas fa-long-arrow-alt-right ms-2"></i></span>
                                                    </div>
                                                </button>

                                            </div>
                                        </div>

                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Ncart
