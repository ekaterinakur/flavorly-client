import ClipLoader from 'react-spinners/ClipLoader';
import './Loader.scss';

function Loader({ padding = '1rem' }) {
  return (
    <div className="loader" style={{ padding }}>
      <ClipLoader size={30} />
    </div>
  );
}

export default Loader;
