import ClipLoader from 'react-spinners/ClipLoader';
import './Loader.scss';

function Loader() {
  return (
    <div className="loader">
      <ClipLoader size={30} />
    </div>
  );
}

export default Loader;
