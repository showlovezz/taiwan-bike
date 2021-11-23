import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { MapContainer, TileLayer, ZoomControl } from 'react-leaflet';
import UserMarker from '../../components/Leaflet/UserMarker';
import UserPosition from '../../components/Leaflet/UserPosition';
import './styles.scss';

const FindBikePage = () => {
  // Taipei Train Station Position
  const [position, setPosition] = useState([25.046273, 121.517498]);
  const [loading, setLoading] = useState(false);

  return (
    <section className="find-bike">
      <Container>
        <MapContainer center={position} zoom={15} className="find-bike__map" zoomControl={false}>
          <TileLayer
            url={`https://api.mapbox.com/styles/v1/vita-ora/${process.env.REACT_APP_MAPBOX_ID}/tiles/512/{z}/{x}/{y}?access_token=${process.env.REACT_APP_MAPBOX_KEY}`}
            attribution='Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery &copy; <a href="https://www.mapbox.com/">Mapbox</a>'
          />
          <ZoomControl position="topright" />
          <UserMarker position={position} loading={loading} />
          <UserPosition setPosition={setPosition} setLoading={setLoading} />
        </MapContainer>
      </Container>
    </section>
  );
};

export default FindBikePage;
