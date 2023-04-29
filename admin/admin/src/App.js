import Home  from "./pages/home/Home";
import Login  from "./pages/login/Login";
import List  from "./pages/list/List";
import New from "./pages/new/New";
import Single from "./pages/single/Single";
import Mapview from "./pages/mapview/Mapview";
 //import Maps from "./components/map/Map";
import "./style/dark.scss"
import {  BrowserRouter, Routes ,  Route , } from "react-router-dom";
import {useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
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
          <Route path="users">
              <Route index element={<List/>}/>
              <Route path=":UserId" element={<Single/>} />
              <Route path="new" element={<New/>} />
           
          </Route>
          <Route path="maps" element={<Mapview/>}/>
             
          
          <Route path="products">
              <Route index element={<List/>}/>
              <Route path=":ProductId" element={<Single/>} />
              <Route path="String" element={<New/>} />
          </Route>
          </Route>
        </Routes>
      
    </BrowserRouter>
    
    
    </div>
  );
}

export default App;
