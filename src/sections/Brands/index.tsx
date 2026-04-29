import './style.scss';
import logoBrand from '../../assets/logo.png';

export const Brands = () => {
  // Repeating the same logo 5 times as a mock for brand slider
  const brands = Array(5).fill(logoBrand);

  return (
    <section className="brands">
      <div className="container">
        <h2 className="brands__title">Navegue por marcas</h2>
        <div className="brands__grid">
          {brands.map((logo, index) => (
            <div key={index} className="brands__item">
              <img src={logo} alt="Marca" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
