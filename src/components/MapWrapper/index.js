import style from './style.module.scss';
import ReactMapGL from 'react-map-gl';
import { config } from '../../lib/config';

const MapWrapper = () => {
  return (
    <div className="map-container">
      <ReactMapGL mapboxApiAccessToken={config.MAPBOX_TOKEN} />
    </div>
  );
};

export default MapWrapper;
