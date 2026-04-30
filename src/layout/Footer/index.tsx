import { Button } from '../../components/Button';
import logoImg from '../../assets/logo.png';
import './style.scss';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__newsletter">
        <div className="footer__newsletter-inner">
          <div className="footer__newsletter-text">
            <h2>Inscreva-se na nossa newsletter</h2>
            <p>Assine a nossa newsletter e receba as novidades e conteúdos exclusivos da Econverse.</p>
          </div>
          <form className="footer__newsletter-form">
            <div className="footer__inputs">
              <input type="text" className="footer__input" placeholder="Digite seu nome" required />
              <input type="email" className="footer__input" placeholder="Digite seu e-mail" required />
              <button type="submit" className="footer__btn">INSCREVER</button>
            </div>
            <label className="footer__newsletter-checkbox">
              <input type="checkbox" required /> Aceito os termos e condições
            </label>
          </form>
        </div>
      </div>

      <div className="footer__main">
        <div className="footer__main-inner">
          <div className="footer__column footer__column--about">
            <img src={logoImg} alt="Econverse" className="footer__logo" />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div className="footer__socials">
              <a href="#" aria-label="Instagram">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="#" aria-label="Facebook">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="#" aria-label="LinkedIn">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
            </div>
          </div>

          <div className="footer__column">
            <h3>Institucional</h3>
            <ul>
              <li><a href="#">Sobre Nós</a></li>
              <li><a href="#">Movimento</a></li>
              <li><a href="#">Trabalhe conosco</a></li>
            </ul>
          </div>

          <div className="footer__column">
            <h3>Ajuda</h3>
            <ul>
              <li><a href="#">Suporte</a></li>
              <li><a href="#">Fale Conosco</a></li>
              <li><a href="#">Perguntas Frequentes</a></li>
            </ul>
          </div>

          <div className="footer__column">
            <h3>Termos</h3>
            <ul>
              <li><a href="#">Termos e Condições</a></li>
              <li><a href="#">Política de Privacidade</a></li>
              <li><a href="#">Troca e Devolução</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
    </footer>
  );
};
