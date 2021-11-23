import L from 'leaflet';

// user icon，顏色：紫色，尺寸：medium
export const userPositionSVG = new L.Icon({
  // iconUrl: require('../../assets/mapIcons/user-position.svg').default,
  iconUrl: `https://api.geoapify.com/v1/icon/?type=material&color=%235c30b5&icon=street-view&iconType=awesome&scaleFactor=2&apiKey=${process.env.REACT_APP_GEOAPIFY_KEY}`,
  iconSize: [31, 46], // size of the icon
  shadowSize: null, // size of the shadow
  iconAnchor: [15.5, 42], // point of the icon which will correspond to marker's location
  shadowAnchor: null, // the same for the shadow
  popupAnchor: [0, -40], // 這個不能為 null，會有 error
  className: '',
});

// 租車 icon，顏色：綠色，尺寸：x-large
export const rentStationSVG = new L.Icon({
  iconUrl: `https://api.geoapify.com/v1/icon/?type=material&color=%23138609&size=x-large&icon=biking&iconType=awesome&scaleFactor=2&apiKey=${process.env.REACT_APP_GEOAPIFY_KEY}`,
  iconSize: [46, 69], // size of the icon
  shadowSize: null, // size of the shadow
  iconAnchor: [15.5, 42], // point of the icon which will correspond to marker's location
  shadowAnchor: null, // the same for the shadow
  popupAnchor: [8, -40], // 這個不能為 null，會有 error
  className: '',
});

// 還車 icon，顏色：橘色，尺寸：x-large
export const returnStationSVG = new L.Icon({
  iconUrl: `https://api.geoapify.com/v1/icon/?type=material&color=%23f8920a&size=x-large&icon=biking&iconType=awesome&scaleFactor=2&apiKey=${process.env.REACT_APP_GEOAPIFY_KEY}`,
  iconSize: [46, 69], // size of the icon
  shadowSize: null, // size of the shadow
  iconAnchor: [15.5, 42], // point of the icon which will correspond to marker's location
  shadowAnchor: null, // the same for the shadow
  popupAnchor: [8, -40], // 這個不能為 null，會有 error
  className: '',
});

// 車子 icon 為 0，顏色：紅色，尺寸：medium
export const emptyStationSVG = new L.Icon({
  iconUrl: `https://api.geoapify.com/v1/icon/?type=material&color=%23f82d0a&icon=times&iconType=awesome&scaleFactor=2&apiKey=${process.env.REACT_APP_GEOAPIFY_KEY}`,
  iconSize: [31, 46], // size of the icon
  shadowSize: null, // size of the shadow
  iconAnchor: [15.5, 42], // point of the icon which will correspond to marker's location
  shadowAnchor: null, // the same for the shadow
  popupAnchor: [0, -40], // 這個不能為 null，會有 error
  className: '',
});
