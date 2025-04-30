import Button from '../components/Button/Button';

export default function HomePage() {
  return (
    <>
      <div className="container main-container">
        <h1>Welcome to the Recipe App</h1>
        <Button variant='grey' size="small">SIGN IN</Button>
      </div>
    </>
  );
}
