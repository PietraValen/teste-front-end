import './style.scss';
import checkIcon from '../../assets/check.png';
import truckIcon from '../../assets/truck.png';
import creditIcon from '../../assets/credit.png';
import logoImg from '../../assets/logo.png';
import boxIcon from '../../assets/caixa.png';
import heartIcon from '../../assets/heater.png'; // "heater" is heart misspelled
import userIcon from '../../assets/user.png';
import cartIcon from '../../assets/carrinho.png';

export const Header = () => {
  return (
    <header className="header">
      {/* Top Bar */}
      <div className="header__topbar">
        <div className="container header__topbar-inner">
          <div className="header__topbar-item">
            <img src={checkIcon} alt="Check" style={{ width: 16, marginRight: 8, verticalAlign: 'middle' }} />
            <span>Compra <strong className="highlight">100% segura</strong></span>
          </div>
          <div className="header__topbar-item">
            <img src={truckIcon} alt="Frete" style={{ width: 16, marginRight: 8, verticalAlign: 'middle' }} />
            <span><strong className="highlight">Frete grátis</strong> acima de R$ 200</span>
          </div>
          <div className="header__topbar-item">
            <img src={creditIcon} alt="Cartão" style={{ width: 16, marginRight: 8, verticalAlign: 'middle' }} />
            <span><strong className="highlight">Parcele</strong> suas compras</span>
          </div>
        </div>
      </div>

      {/* Main Bar */}
      <div className="header__main">
        <div className="container header__main-inner">
          <div className="header__logo">
            <img src={logoImg} alt="Econverse" style={{ height: 40 }} />
          </div>
          
          <div className="header__search">
            <input type="text" placeholder="O que você está buscando?" />
            <button aria-label="Buscar">
              <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            </button>
          </div>

          <div className="header__actions">
            <img src={boxIcon} alt="Pedidos" style={{ height: 24, margin: '0 12px', cursor: 'pointer' }} />
            <img src={heartIcon} alt="Favoritos" style={{ height: 24, margin: '0 12px', cursor: 'pointer' }} />
            <img src={userIcon} alt="Minha Conta" style={{ height: 24, margin: '0 12px', cursor: 'pointer' }} />
            <img src={cartIcon} alt="Carrinho" style={{ height: 24, margin: '0 12px', cursor: 'pointer' }} />
          </div>
        </div>
      </div>

      {/* Nav Bar */}
      <nav className="header__nav">
        <div className="container header__nav-inner">
          <ul>
            <li><a href="#">TODAS CATEGORIAS</a></li>
            <li><a href="#">SUPERMERCADO</a></li>
            <li><a href="#">LIVROS</a></li>
            <li><a href="#">MODA</a></li>
            <li><a href="#">LANÇAMENTOS</a></li>
            <li><a href="#" className="highlight-primary">OFERTAS DO DIA</a></li>
            <li>
              <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 4l3 12h14l3-12-6 7-4-7-4 7-6-7z" />
                  <path d="M3 20h18" />
                </svg>
                ASSINATURA
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
