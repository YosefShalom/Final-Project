import React, { useEffect, useState } from 'react';

import bacCard from './img/input-bg-03.jpg';

const GetTick = () => {
    const [tickets, setTickets] = useState([])
    useEffect(() => {
        const get_all_tickets = async () => {
            let aTok = JSON.parse(localStorage.getItem("token")).access;
            // console.log(String(aTok));
            if (String(aTok) === "undefined") {
                console.log("user not logged");
                alert("user not logged");
                return
                }
            let response = await fetch("http://127.0.0.1:8000/tickets/", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: "Bearer " + String(aTok),
                },
            });
            let data = await response.json();
            setTickets(data)

            if (response.status === 200) {
                console.log(data);
                console.log("get data");
            } else if (response.statusText === "Unauthorized") {
                console.log("user not logged");
                alert("Unauthorized");
                return
                
            }
        };

        get_all_tickets()
    }, [])
    const delete_tickets = async (id) => {
        let aTok = JSON.parse(localStorage.getItem("token")).access;
        console.log(id);
        let response = await fetch("http://127.0.0.1:8000/tickets/" + id, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + String(aTok),
            },
        });
        let data = await response.json();

        if (response.status === 200) {
            console.log(data);
            alert("Ticket DELETED")
            console.log("DELETE data");
        } else if (response.statusText === "Unauthorized") {
            console.log("user not logged");
        }
    };
    return (
        <div className="col-sm-9">
            <div className="row row-cols-1 row-cols-md-4 g-4">
                {/* <Ncart cart={cart}></Ncart> */}
                {tickets.map((ticket, ind) => <div>
                    <div className="col ">
                        <div className="card " style={{ backgroundImage: `url(${bacCard})`}}>
                            <img className="card-img" src="https://picsum.photos/200/300" alt='...'></img>
                            <div className="card-info">
                                <h1 className="text-title">{ticket._id}</h1>
                                Customer_ld<h3 className="text-body">{ticket.Customer_ld}</h3>
                                <hr></hr>
                                Flight ID<h2 className="text-body">{ticket.Flight_ld}</h2>
                                {/* Landing Time<h3 className="text-body">{ticket.Landing_Time}</h3> */}

                            </div>
                            
                            <div className="card-footer">
                                <span className="text-title">DEL</span>
                                <div className="card-button" onClick={() => delete_tickets(ticket._id)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                                            <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                                        </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>)}
            </div>


        </div>
    )
}

export default GetTick