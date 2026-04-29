import './style.scss';
import techIcon from '../../assets/tech.png';
import supermarketIcon from '../../assets/supermarket.png';
import drinksIcon from '../../assets/bebidas.png';
import toolsIcon from '../../assets/ferramentas.png';
import healthIcon from '../../assets/saude.png';
import sportsIcon from '../../assets/CORRIDA.png';
import fashionIcon from '../../assets/Vestimenta.png';

const categories = [
  { name: 'Tecnologia', icon: techIcon, active: true },
  { name: 'Supermercado', icon: supermarketIcon, active: false },
  { name: 'Bebidas', icon: drinksIcon, active: false },
  { name: 'Ferramentas', icon: toolsIcon, active: false },
  { name: 'Saúde', icon: healthIcon, active: false },
  { name: 'Esportes e Fitness', icon: sportsIcon, active: false },
  { name: 'Moda', icon: fashionIcon, active: false },
];

export const Categories = () => {
  return (
    <section className="categories">
      <div className="container categories__inner">
        {categories.map((cat, i) => (
          <div key={i} className={`categories__item ${cat.active ? 'active' : ''}`}>
            <div className="categories__icon">
              <img src={cat.icon} alt={cat.name} style={{ width: 48, height: 48, objectFit: 'contain' }} />
            </div>
            <p className="categories__name">{cat.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
