// import './App.css';
import './style.css';
import './css/tooplate.css';
import './css/bootstrap.min.css';
// import './css/materialize.min.css';

import MyFooter from './MyFooter';
import MyHeder from './MyHeder';
import { Outlet } from "react-router-dom";
import backgroundall from './img/bg.jpg';

// import SideCart from './SideCart';


function App() {
  return (
    <div  style={{ backgroundImage: `url(${backgroundall})`}}>
      
      <MyHeder></MyHeder>
      {/* <Ncart></Ncart> */}
      {/* <MyNav></MyNav> */}
      <div className="container mt-5">
        <div className="row" >
          {/* <AdAirCmp></AdAirCmp> */}
          <Outlet/>
        </div>
      </div>
      <MyFooter></MyFooter>
      
    </div>
  );
}

export default App;
