import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import MyHeder from './MyHeder';
import MyRight from './MyRight';
import Logreg from './Logreg';
import MyLeft from './MyLeft';
import Register from './Register';
import AdAirCmp from './AdAirCmp';
import GetAirline from './GetAirline';
import AddFligth from './AddFligth';
import MgFlights from './MgFlights';
import DelFlight from './DelFlight';
import GetTick from './GetTick';
import AddStaff from './AddStaff';
import UpdFligth from './UpdFlight';
import Profile from './Profile';
import LoginForm from './LoginForm';
import UpImage from './UpImage';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} >
          {/* <Route path="prod" element={<Prod />} /> */}
          <Route path="MyHeder" element={<MyHeder />} />
          <Route path="MyRight" element={<MyRight />} />

          <Route path="Logreg" element={<Logreg />} >
            <Route
              index
              element={
                <main style={{ position: `relative` }} >
                  <div className="mt-5 p-4 bg-transparet text-white text-center ">
                    <div className="loader">
                      <svg viewBox="0 0 80 80">
                        <circle id="test" cx="40" cy="40" r="32"></circle>
                      </svg>
                    </div>

                    <div className="loader triangle">
                      <svg viewBox="0 0 86 80">
                        <polygon points="43 8 79 72 7 72"></polygon>
                      </svg>
                    </div>

                    <div className="loader">
                      <svg viewBox="0 0 80 80">
                        <rect x="8" y="8" width="64" height="64"></rect>
                      </svg>
                    </div>

                  </div>
                </main>
              }
            />
            <Route path="UpImage" element={<UpImage />} />
            <Route path="Register" element={<Register />} />
            <Route path="LoginForm" element={<LoginForm />} />
          </Route>
          <Route path="MyLeft" element={<MyLeft />} />
          {/* <Route path="Register" element={<Register />} /> */}
          <Route path="AdAirCmp" element={<AdAirCmp />} />
          <Route path="GetAirline" element={<GetAirline />} />
          <Route path="GetTick" element={<GetTick />} />
          <Route path="MgFlights" element={<MgFlights />} >
            <Route path="AddFligth" element={<AddFligth />} />
            <Route path="DelFlight" element={<DelFlight />} />
            <Route path="UpdFligth" element={<UpdFligth />} />
            

          </Route>

          {/* <Route path="AddFligth" element={<AddFligth />} /> */}
          {/* <Route path="DelFlight" element={<DelFlight />} /> */}
          <Route path="AddStaff" element={<AddStaff />} />
          {/* <Route path="UpdFligth" element={<UpdFligth />} /> */}
          <Route path="Profile" element={<Profile />} />


        </Route>
      </Routes>

    </BrowserRouter>
  </React.StrictMode>
);


