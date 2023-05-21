import Home  from "./pages/home/Home";
import Login  from "./pages/login/Login";
import List  from "./pages/list/List";
import New from "./pages/new/New";
import Document from "./components/document/Document";
import Single from "./pages/single/Single";
import Mapview from "./pages/mapview/Mapview";
import Mapviewinactif from "./pages/mapviewinactif/Mapviewinactif";
//import Document from "./components/document/Document";
import "./style/dark.scss"
import {  BrowserRouter, Routes ,  Route , } from "react-router-dom";
import {useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import { vehiculeInputs ,driverInputs, ClientInputs , rideInputs , docInputs} from "./formSourse";
import Listride from "./pages/listride/Listride";
import Listdriver from "./pages/listdriver/Listdriver";
import Newride from "./pages/newride/Newride";
import Singleride from "./pages/singleride/Singleride";
//import Listdoc from "./pages/listdoc/Listdoc";
import Newdoc from "./pages/newdoc/Newdoc";
import Singledoc from "./pages/singledoc/Singledoc";
import Listvehicule from "./pages/listvehicule/Listvehicule";
import Newvehicule from "./pages/newvehicule/Newvehicule";
import Singlevehicule from "./pages/singlevehicule/Singlevehicule";
import Singledriver from "./pages/singledriver/Singledriver";
import Newdriver from "./pages/newdriver/Newdriver";
import Upload from "./components/upload/Upload";
import Listearning from "./pages/listearning/Listearning";
import Listcode from "./pages/listcode/Listcode";
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
          <Route path="login" element={<Login/>} />
          <Route path="clients">
              <Route index element={<List />}/>
              <Route path=":ClientId" element={<Single/>} />
              <Route path="test" element={<Single/>} />
              <Route path="new" element={<New inputs={ClientInputs} title="Add New Client"/>} />
           
          </Route>
          <Route path="maps" element={<Mapview/>}/>
          <Route path="mapinactifs" element={<Mapviewinactif/>}/>
          <Route path="documents" element={<Document/>}/>
          <Route path="upload" element={<Upload/>}/>
          
          
          <Route path="drivers">
              <Route index element={<Listdriver/>}/>
              <Route path=":DriverId" element={<Singledriver/>} />
              <Route path="singledriver" element={<Singledriver/>} />
           
              <Route path="viewdriver" element={<Newdriver inputs={driverInputs} title="Add New Driver"/>} />
          </Route>
           
          <Route path="rides">
              <Route index element={<Listride/>}/>
              <Route path=":RideId" element={<Singleride/>} />
              <Route path="test" element={<Singleride/>} />
              <Route path="newride" element={<Newride inputs={rideInputs} title="Add New Ride"/>} />
          </Route>

           
          <Route path="vehicules">
              <Route index element={<Listvehicule/>}/>
              <Route path=":vehiculeId" element={<Singlevehicule/>} />
              <Route path="vehiculeview" element={<Singlevehicule/>} />
              <Route path="newvehicule" element={<Newvehicule inputs={vehiculeInputs} title="Add New Vehicule"/>} />
          </Route>
          
          <Route path="documents">
              <Route index element={<Document/>}/>
              <Route path=":RideId" element={<Singledoc/>} />
              <Route path="test" element={<Singledoc/>} />
              <Route path="newride" element={<Newdoc inputs={docInputs} title="Add New Documents"/>} />
          </Route>
          <Route path="earnings">
              <Route index element={<Listearning/>}/>
              <Route path=":vehiculeId" element={<Singlevehicule/>} />
              <Route path="vehiculeview" element={<Singlevehicule/>} />
              <Route path="newvehicule" element={<Newvehicule inputs={vehiculeInputs} title="Add New Vehicule"/>} />
          </Route>
          <Route path="code">
              <Route index element={<Listcode/>}/>
              <Route path=":vehiculeId" element={<Singlevehicule/>} />
              <Route path="vehiculeview" element={<Singlevehicule/>} />
              <Route path="newvehicule" element={<Newvehicule inputs={vehiculeInputs} title="Add New Vehicule"/>} />
          </Route>
          </Route>
        </Routes>
      
    </BrowserRouter>
    
    
    </div>
  );
}

export default App;
