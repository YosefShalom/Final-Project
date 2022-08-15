import React, {  useState } from 'react';


const DelFlight = () => {
    const [fID, setFID] = useState("")
    const [dele, setDele] = useState("")

    const delete_Flights = async () => {
        let aTok = JSON.parse(localStorage.getItem("token")).access;
        if (String(aTok) === "undefined") {
            console.log("user not logged");
            alert("user not logged");
            return
            }
        // console.log(String(aTok));
        let response = await fetch("http://127.0.0.1:8000/delete_Flights/" + fID, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + String(aTok),
            },
        });
        let data = await response.json();
        setDele(data)

        if (response.status === 200) {
            console.log(data);
            console.log("DELETE data");
            alert(data)
        } else if (response.statusText === "Unauthorized") {
            console.log("user not logged");
        }
    };
  return (
   
        <div className="container" >
            <div>
                <div>
                    <div>
                        <div className="input-field">
                            <input placeholder="Flight ID" id="fID" name="fID" type="number" className="validate" value={fID} onChange={(e) => setFID(e.target.value)} />
                        </div>
                        <div className="tm-flex-lr">
                            <button className="cta"  onClick={() => delete_Flights(fID)} >
                            <span>DELETE</span>
                            <svg viewBox="0 0 13 10" height="10px" width="15px">
                                {/* <path d="M1,5 L11,5"></path> */}
                                <polyline points="8 1 12 5 8 9"></polyline>
                            </svg>
                        </button>
                        </div>
                    </div>
                </div>
                <div>
                    <header className="font-weight-light tm-bg-black p-5 h-100">
                        <h1 className="mt-0 text-white font-weight-light">Here you cen DELETE a Flihgt by her ID</h1>
                        <h3 className="mt-0 text-white font-weight-light">DELETE Flight </h3>
                        <h1 className="mt-0 text-white font-weight-light">{dele}</h1>
                        <h1 className="mb-0  text-white font-weight-light">you delete flight {dele} </h1>
                    </header>
                </div>
            </div>

            
        </div>
    
  )
}

export default DelFlight