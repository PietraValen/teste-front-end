import './style.scss';

export const Hero = () => {
  return (
    <section className="hero">
      <div className="container hero__inner">
        <h2 className="hero__title">
          Venha conhecer nossas<br/>promoções
        </h2>
        <p className="hero__subtitle">
          <span>50% Off</span> nos produtos
        </p>
        <button className="hero__btn">Ver produto</button>
      </div>
    </section>
  );
};
