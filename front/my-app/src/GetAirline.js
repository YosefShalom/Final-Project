import React, { useEffect, useState } from 'react';
import './css/airCard.css';

const GetAirline = () => {
    const [airComp, setAirComp] = useState([])

    
    const delete_AirComp = async (AiD) => {
        let aTok = JSON.parse(localStorage.getItem("token")).access;
        // console.log(String(aTok));
        let response = await fetch("http://127.0.0.1:8000/delete_Airline/" + AiD, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + String(aTok),
            },
        });
        let data = await response.json();

        if (response.status === 200) {
            console.log(data);
            console.log("DELETE data");
        } else if (response.statusText === "Unauthorized") {
            console.log("user not logged");
        }
    };
    useEffect(() => {
        const getAirComp = async () => {
            let aTok = JSON.parse(localStorage.getItem("token")).access;
            console.log(String(aTok));
            if (String(aTok) === "undefined") {
                console.log("user not logged");
                alert("user not logged");
                return
                }
            let response = await fetch("http://127.0.0.1:8000/get_Airline_Companies/", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: "Bearer " + String(aTok),
                },
            });
            let data = await response.json();
            setAirComp(data)

            if (response.status === 200) {
                console.log(data);
                console.log("get data");
            } else if (response.statusText === "Unauthorized") {
                console.log("user not logged");
            }
        };

        getAirComp()
    }, [])
    
    return (

        <div>
            {/* <button type="button" className="btn btn-primary" onClick={() => getAirComp()}></button> */}
            {/* {AirComp.length} */}
            <div className="container" >

                <div className="col-sm-11">
                    <div className="row row-cols-1 row-cols-md-4 g-4">
                        {airComp.map((airCmp, ind) => <div>
                            <div className="col">
                                <div className="cards">
                                    <div className="imgs">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="30"><path fill="none" d="M0 0h24v24H0z"></path><path d="M4.828 21l-.02.02-.021-.02H2.992A.993.993 0 0 1 2 20.007V3.993A1 1 0 0 1 2.992 3h18.016c.548 0 .992.445.992.993v16.014a1 1 0 0 1-.992.993H4.828zM20 15V5H4v14L14 9l6 6zm0 2.828l-6-6L6.828 19H20v-1.172zM8 11a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" fill="rgba(236,240,241,1)"></path></svg>
                                    </div>
                                    <h1>{airCmp.ACname}</h1>
                                    <p>
                                        <svg className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="30" height="30">
                                            <path d="M962.267429 233.179429q-38.253714 56.027429-92.598857 95.451429 0.585143 7.972571 0.585143 23.990857 0 74.313143-21.723429 148.260571t-65.974857 141.970286-105.398857 120.32-147.456 83.456-184.539429 31.158857q-154.843429 0-283.428571-82.870857 19.968 2.267429 44.544 2.267429 128.585143 0 229.156571-78.848-59.977143-1.170286-107.446857-36.864t-65.170286-91.136q18.870857 2.852571 34.889143 2.852571 24.576 0 48.566857-6.290286-64-13.165714-105.984-63.707429t-41.984-117.394286l0-2.267429q38.838857 21.723429 83.456 23.405714-37.741714-25.161143-59.977143-65.682286t-22.308571-87.990857q0-50.322286 25.161143-93.110857 69.12 85.138286 168.301714 136.265143t212.260571 56.832q-4.534857-21.723429-4.534857-42.276571 0-76.580571 53.979429-130.56t130.56-53.979429q80.018286 0 134.875429 58.294857 62.317714-11.995429 117.174857-44.544-21.138286 65.682286-81.115429 101.741714 53.174857-5.705143 106.276571-28.598857z" fill="white"></path>
                                        </svg>
                                        <svg className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="30" height="30">
                                            <path d="M123.52064 667.99143l344.526782 229.708899 0-205.136409-190.802457-127.396658zM88.051421 585.717469l110.283674-73.717469-110.283674-73.717469 0 147.434938zM556.025711 897.627196l344.526782-229.708899-153.724325-102.824168-190.802457 127.396658 0 205.136409zM512 615.994287l155.406371-103.994287-155.406371-103.994287-155.406371 103.994287zM277.171833 458.832738l190.802457-127.396658 0-205.136409-344.526782 229.708899zM825.664905 512l110.283674 73.717469 0-147.434938zM746.828167 458.832738l153.724325-102.824168-344.526782-229.708899 0 205.136409zM1023.926868 356.00857l0 311.98286q0 23.402371-19.453221 36.566205l-467.901157 311.98286q-11.993715 7.459506-24.57249 7.459506t-24.57249-7.459506l-467.901157-311.98286q-19.453221-13.163834-19.453221-36.566205l0-311.98286q0-23.402371 19.453221-36.566205l467.901157-311.98286q11.993715-7.459506 24.57249-7.459506t24.57249 7.459506l467.901157 311.98286q19.453221 13.163834 19.453221 36.566205z" fill="white"></path>
                                        </svg>
                                        <div onClick={() => delete_AirComp(airCmp._id)} >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16" >
                                                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                                                <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                                            </svg>

                                        </div>
                                    </p>
                                </div>
                                {/* <div className="card">
                            <div className="card-info">
                                <p className="title">{airCmp.ACname}</p>
                                <p className="subtitle">{airCmp.desc}</p>
                            </div>
                            <div className="card-bio">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                        </div> */}
                            </div>
                        </div>)}
                    </div>
                </div>
            </div>




        </div>
    )
}

export default GetAirline