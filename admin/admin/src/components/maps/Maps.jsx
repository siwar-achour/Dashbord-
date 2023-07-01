import "mapbox-gl/dist/mapbox-gl.css";
import Map, { Popup, FullscreenControl, GeolocateControl, Marker, NavigationControl } from "react-map-gl";
import React, { useEffect, useState } from 'react';
import StarIcon from '@mui/icons-material/Star';
import LocalTaxiIcon from '@mui/icons-material/LocalTaxi';
import axios from "axios";
import './maps.scss';

function Maps() {
  const [rideInactifs, setRideInactifs] = useState([]);
  const [pins, setPins] = useState([]);
  const [viewport, setViewport] = useState({
    width: "100%",
    height: "700px",
    borderRadius: "8px",
    border: "2px solid transparent",
    projection: "globe",
    latitude: 36.8159278, // Latitude centrée sur la Tunisie
    longitude: 10.3042378, // Longitude centrée sur la Tunisie
    zoom: 10
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const rideInactifsResponse = await axios.get('/rideinactifs');
        const pinsResponse = await axios.get('/pins');
        setRideInactifs(rideInactifsResponse.data);
        setPins(pinsResponse.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  return (
    <Map
      {...viewport}
      mapboxAccessToken="pk.eyJ1Ijoic2l3YXI0NCIsImEiOiJjbGhrc2dleHAwajBwM2RzMXFmMHN3Z3dyIn0.DwGm2V9r12GMMozAntZXKQ"
      onViewportChange={setViewport}
      mapStyle="mapbox://styles/siwar44/clhkr027h01oh01p641cp7sdt"
    >
      {rideInactifs.map(p => (
        <React.Fragment key={p.id}>
          <Marker
            longitude={p.long}
            latitude={p.lat}
            offsetLeft={-20}
            offsetTop={-10}
          >
            <LocalTaxiIcon style={{ fontSize: viewport.zoom * 4, color: "red" }} />
          </Marker>
          <Popup
            longitude={p.long}
            latitude={p.lat}
            anchor="bottom"
          >
            <div>
              <label>Title</label>
              <h4 className="place">{p.title}</h4>
              <div className="lab">
                <label>Matricule</label>
              </div>
              <p className="desc">{p.Matricule}</p>
              <div className="lab">
                <label>Rating</label>
              </div>
              <div className="stars">
                <StarIcon className="stars" />
                <StarIcon className="stars" />
                <StarIcon className="stars" />
                <StarIcon className="stars" />
                <StarIcon className="stars" />
              </div>
              <div className="lab">
                <label>Information</label>
              </div>
              <span className="username">Created by <b>{p.username}</b></span>
              <span className="date">1 hour ago</span>
            </div>
          </Popup>
        </React.Fragment>
      ))}
      {pins.map(p => (
        <React.Fragment key={p.id}>
          <Marker
            longitude={p.long}
            latitude={p.lat}
            offsetLeft={-20}
            offsetTop={-10}
          >
            <LocalTaxiIcon style={{ fontSize: viewport.zoom * 4, color: "teal" }} />
          </Marker>
          <Popup
            longitude={p.long}
            latitude={p.lat}
            anchor="bottom"
          >
            <div>
              <label>Title</label>
              <h4 className="place">{p.title}</h4>
              <div className="lab">
                <label>Matricule</label>
              </div>
              <p className="desc">{p.Matricule}</p>
              <div className="lab">
                <label>Rating</label>
              </div>
              <div className="stars">
                <StarIcon className="star" />
                <StarIcon className="star" />
                <StarIcon className="star" />
                <StarIcon className="star" />
                <StarIcon className="star" />
              </div>
              <div className="lab">
                <label>Status</label>
              </div>
              <p className="desc">{p.status}</p>
              <div className="lab">
                <label>Information</label>
              </div>
              <span className="username">Created by <b>{p.username}</b></span>
              <span className="date">1 hour ago</span>
            </div>
          </Popup>
        </React.Fragment>
      ))}

      <NavigationControl position="bottom-right" />
      <FullscreenControl />
      <GeolocateControl />
    </Map>
  );
}

export default Maps;
