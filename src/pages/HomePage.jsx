import Button from '../components/Button/Button';
import Loader from '../components/Loader/Loader';

export default function HomePage() {
  return (
    <>
      <div className="container main-container">
        <h1>Welcome to the Recipe App</h1>
        <Button size="small">SIGN IN</Button>
      </div>
    </>
  );
}
