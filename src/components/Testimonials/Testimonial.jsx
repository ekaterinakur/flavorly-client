const Testimonial = ({ testimonial }) => {
  return (
    <div key={testimonial.id} className="testimonial">
      <div className="testimonial-content">
        <h3 className="testimonial-content-text">{testimonial.testimonial}</h3>
        <p className="testimonial-content-author">{testimonial.author ?? 'Fourth Change'}</p>
      </div>
    </div>
  );
};

export { Testimonial };
