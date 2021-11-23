import PropTypes from 'prop-types';
import React from 'react';
import { Marker } from 'react-leaflet';
import LoadingView from '../../LoadingView';
import { userPositionSVG } from '../icon';

const UserMarker = ({ position, loading }) => {
  return loading === true ? <LoadingView /> : <Marker position={position} icon={userPositionSVG} />;
};

UserMarker.propTypes = {
  position: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default UserMarker;
