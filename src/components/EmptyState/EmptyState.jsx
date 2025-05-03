import './EmptyState.scss';

function EmptyState({ message }) {
  return (
    <section className="section">
      <div className="container">
        <p className="message">{message}</p>
      </div>
    </section>
  );
}

export default EmptyState;
