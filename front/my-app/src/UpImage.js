import React, { useState } from 'react'

const UpImage = () => {

    const [image, setImage] = useState("")
    const [cname, setCname] = useState("")
    // const [file, setFile] = useState();
    const add_Countries = async (e) => {

        console.log(image)
        // setImage(URL.createObjectURL(image));
        // setImage(URL.createObjectURL(image));
        // console.log(image);

        let aTok = JSON.parse(localStorage.getItem("token")).access;
        console.log(String(aTok));
        let response = await fetch("http://127.0.0.1:8000/add_Countries/", {
            method: "post",
            headers: {
                // "Content-Type": "image/avif",
                "Content-Type": "application/json",
                Authorization: "Bearer " + String(aTok),
            },
            body: JSON.stringify({

                Name: cname,
                image: image,


            }),
        });
        let data = await response.json();
        console.log();

        if (response.status === 200) {
            console.log(data);
            console.log("get data");
        } else if (response.statusText === "Unauthorized") {
            console.log("logoutUser();");
        }
    };

    // function handleChange(e) {
    //     console.log(e.target.files);
    //     setFile(URL.createObjectURL(e.target.files[0]));
    // }
    return (
        <div>
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
                                <input placeholder="image" id="image" name="image" type="file" className="validate" value={image} onChange={(e) => setImage(e.target.value)}/>
                            </div>

                            <div className="input-field">
                                <input placeholder="cuntrey name" id="cname" name="cname" type="text" className="validate" value={cname} onChange={(ev) => setCname(ev.target.value)} />
                            </div>


                            <div className="text-right mt-4">
                                <button className="cta" onChange={add_Countries} onClick={() => add_Countries()} >
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

            {/* <img src="https://i.stack.imgur.com/dy62M.png" onclick="add_Countries()" width="50px" /> */}
            {/* <!-- <button onclick="add_Countries()">add Countries</button>    --> */}
        </div>
    )
}

export default UpImage