import Home  from "./pages/home/Home";
import Login  from "./pages/login/Login";
import List  from "./pages/list/List";
import Newclient from "./pages/newclient/Newclient";
import Document from "./components/document/Document";
import Single from "./pages/single/Single";
import Mapview from "./pages/mapview/Mapview";
import Mapviewactif from "./pages/mapviewactif/Mapviewactif";
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
import Listcomminuty from "./pages/listcomminuty/Listcomminuty";
import Listearning from "./pages/listearning/Listearning";
import Listcode from "./pages/listcode/Listcode";
import Listtaxi from "./pages/listtaxi/Listtaxi";
import Listblocked from "./pages/listblocked/Listblocked";
import Listdestination from './pages/listdestination/Listdestination';
import Listclientblock from './pages/listclientblock/Listclientblock';
import Listprice from './pages/listprice/Listprice';
import Profile from './pages/profile/Profile';

import Update from "./pages/updateclient/Update";
//import Listride from "../../components/tableride/Tableride";
//require('leaflet/dist/leaflet.css');
function App() {
  
 
  const {darkMode} = useContext(DarkModeContext)
    return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
      
        <Routes>
          <Route  path="/" >
          <Route index element={<Login/>} />
          <Route path="home" element={<Home/>} />
          <Route path="clients">
              <Route index element={<List />}/>
              <Route path=":ClientId" element={<Single/>} />
              <Route path="test" element={<Single/>} />
              <Route path="viewclient" element={<Newclient inputs={ClientInputs} title="Add New Client"/>} />
               
              <Route path="update/:clientId" element={<Update inputs={ClientInputs}  title="Update Client"/>} />

         
          </Route>
          <Route path="blockeds">
              <Route index element={<Listblocked/>}/>
              <Route path=":RideId" element={<Singleride/>} />
              <Route path="test" element={<Singleride/>} />
              <Route path="newride" element={<Newride inputs={rideInputs} title="Add New Ride"/>} />
         </Route>

          <Route path="maps" element={<Mapview/>}/>
          <Route path="mapactifs" element={<Mapviewactif/>}/>
          <Route path="mapinactifs" element={<Mapviewinactif/>}/>
          <Route path="documents" element={<Document/>}/>
          <Route path="upload" element={<Upload/>}/>
           <Route path="comminuty" element={<Listcomminuty/>}/>
           <Route path="taxi" element={<Listtaxi/>}/>
           <Route path="destination" element={<Listdestination/>}/>
           <Route path="cost" element={<Listprice/>}/>
           <Route path="profile" element={<Profile/>}/>
           <Route path="clientblock" element={<Listclientblock/>}/>
          
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
              <Route path="newrides" element={<Newride inputs={rideInputs} title="Add New Ride"/>} />
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
