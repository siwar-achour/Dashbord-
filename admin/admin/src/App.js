import Home  from "./pages/home/Home";
//import Login  from "./pages/login/Login";
import List  from "./pages/list/List";
import New from "./pages/new/New";

import Single from "./pages/single/Single";
import Mapview from "./pages/mapview/Mapview";
 //import Maps from "./components/map/Map";
import "./style/dark.scss"
import {  BrowserRouter, Routes ,  Route , } from "react-router-dom";
import {useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import { driverInputs, userInputs , rideInputs , docInputs} from "./formSourse";
import Listride from "./pages/listride/Listride";
import Listdriver from "./pages/listdriver/Listdriver";
import Newride from "./pages/newride/Newride";
import Singleride from "./pages/singleride/Singleride";
import Listdoc from "./pages/listdoc/Listdoc";
import Newdoc from "./pages/newdoc/Newdoc";
import Singledoc from "./pages/singledoc/Singledoc";

//import Listride from "../../components/tableride/Tableride";
//require('leaflet/dist/leaflet.css');
function App() {
  
 
  const {darkMode} = useContext(DarkModeContext)
    return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
      
        <Routes>
          <Route  path="/" >
          <Route index element={<Home/>} />
          <Route path="login" element={<Home/>} />
          <Route path="users">
              <Route index element={<List />}/>
              <Route path=":UserId" element={<Single/>} />
              <Route path="test" element={<Single/>} />
              <Route path="new" element={<New inputs={userInputs} title="Add New User"/>} />
           
          </Route>
          <Route path="maps" element={<Mapview/>}/>
        
             
          
          <Route path="drivers">
              <Route index element={<Listdriver/>}/>
              <Route path=":DriverId" element={<Single/>} />
              <Route path="test" element={<Single/>} />
              <Route path="new" element={<New inputs={driverInputs} title="Add New Driver"/>} />
          </Route>
           
          <Route path="rides">
              <Route index element={<Listride/>}/>
              <Route path=":RideId" element={<Singleride/>} />
              <Route path="test" element={<Singleride/>} />
              <Route path="newride" element={<Newride inputs={rideInputs} title="Add New Ride"/>} />
          </Route>
          
          <Route path="documents">
              <Route index element={<Listdoc/>}/>
              <Route path=":RideId" element={<Singledoc/>} />
              <Route path="test" element={<Singledoc/>} />
              <Route path="newride" element={<Newdoc inputs={docInputs} title="Add New Documents"/>} />
          </Route>
          </Route>
        </Routes>
      
    </BrowserRouter>
    
    
    </div>
  );
}

export default App;