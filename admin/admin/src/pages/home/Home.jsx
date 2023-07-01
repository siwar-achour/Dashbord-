import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar";
import Widget from "../../components/widget/Widget";
import Chartresult from "../../components/charttheorical/Chartresult";
import Chartcomminuty from "../../components/chartcomminuty/Chartcomminuty";
import Table from "../../components/table/Table";
import "./home.scss";

const Home = () => {
  return (
   
    <div className="home">
     <Sidebar/>
     <div className="homeContainer">
      <Navbar/>
     <div className="widgets">
      <Widget type="user"/>
      <Widget type="order"/>
      <Widget type="earning"/>
      <Widget type="balance"/>
    </div>
    <div className="charts">
      <Chartcomminuty/>
     
      <Chartresult aspect={1/ 1} />

        </div>
    
    </div>
    </div>
    
  )
}

export default Home