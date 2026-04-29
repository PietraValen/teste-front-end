import { Button } from '../../components/Button';
import './style.scss';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__newsletter">
        <div className="container footer__newsletter-inner">
          <div className="footer__newsletter-text">
            <h2>Inscreva-se na nossa newsletter</h2>
            <p>Assine nossa newsletter e receba as novidades e conteúdos exclusivos da Econverse.</p>
          </div>
          <form className="footer__newsletter-form">
            <input type="text" placeholder="Digite seu nome" required />
            <input type="email" placeholder="Digite seu e-mail" required />
            <Button type="submit">INSCREVER</Button>
            <label className="footer__newsletter-checkbox">
              <input type="checkbox" required /> Aceito os termos e condições
            </label>
          </form>
        </div>
      </div>

      <div className="footer__main">
        <div className="container footer__main-inner">
          <div className="footer__column footer__column--about">
            <h1 style={{color: '#E30064', fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem'}}>econverse</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div className="footer__socials">
              <span>Instagram</span>
              <span>Facebook</span>
              <span>LinkedIn</span>
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
          <p>Copyright © 2024. Todos os direitos reservados. Econverse.</p>
        </div>
      </div>
    </footer>
  );
};
