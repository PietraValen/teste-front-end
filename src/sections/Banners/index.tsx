import './style.scss';
import parceirosBg from '../../assets/parceiros.png';
import { Button } from '../../components/Button';

export const Banners = () => {
  return (
    <section className="banners">
      <div className="container banners__inner">
        <div className="banners__card" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${parceirosBg})` }}>
          <div className="banners__content">
            <h2 className="banners__title">Parceiros</h2>
            <p className="banners__text">Lorem ipsum dolor sit amet, consectetur</p>
            <Button className="banners__btn">CONFIRA</Button>
          </div>
        </div>
        <div className="banners__card" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${parceirosBg})` }}>
          <div className="banners__content">
            <h2 className="banners__title">Parceiros</h2>
            <p className="banners__text">Lorem ipsum dolor sit amet, consectetur</p>
            <Button className="banners__btn">CONFIRA</Button>
          </div>
        </div>
      </div>
    </section>
  );
};
