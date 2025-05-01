import Button from '../Button/Button';
import './HeroSection.scss';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">Improve Your Culinary Talents</h1>
        <h2 className="hero-subtitle">
          Amazing recipes for beginners in the world of cooking, enveloping you
          in the aromas and tastes of various cuisines.
        </h2>
        <Button
          variant="white-border"
          size="add-recipe"
          className="hero-btn"
          onClick={() => {}}
        >
          Add recipe
        </Button>

        <div className="hero-img">
          <img
            className="hero-img-desert"
            src="/HeroImg/sub_main_img.webp"
            srcSet="/HeroImg/sub_main_img@2x.webp 2x"
            alt="desert photo"
          />
          <img
            className="hero-img-dish"
            src="/HeroImg/main_img.webp"
            srcSet="/HeroImg/main_img@2x.webp 2x"
            alt="desert photo"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
