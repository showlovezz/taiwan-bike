import { faRestroom } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import React, { useCallback } from 'react';
import { useMap } from 'react-leaflet';
import './styles.scss';

const UserPosition = ({ setPosition, setLoading }) => {
  const map = useMap();
  const handleClick = useCallback(() => {
    setLoading(true);

    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(geoPosition => {
        const lat = geoPosition.coords.latitude;
        const lng = geoPosition.coords.longitude;

        setPosition([lat, lng]);
        map.setView([lat, lng], 16);

        setLoading(false);
      });
    } else {
      setLoading(false);
      throw Error('Unable user position.');
    }
  }, [map, setPosition, setLoading]);

  return (
    <div className="user-position" onClick={handleClick}>
      <FontAwesomeIcon icon={faRestroom} />
    </div>
  );
};

UserPosition.propTypes = {
  setPosition: PropTypes.func.isRequired,
  setLoading: PropTypes.func.isRequired,
};

export default UserPosition;
