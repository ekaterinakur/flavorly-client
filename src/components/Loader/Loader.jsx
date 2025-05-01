import ClipLoader from 'react-spinners/ClipLoader';
import './Loader.scss';

function Loader() {
  return (
    <div className="loader-wrapper">
      <div className="loader-box">
        <ClipLoader />
      </div>
    </div>
  );
}

export default Loader;
