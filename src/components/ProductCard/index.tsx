import type { Product } from '../../@types/product';
import { formatPrice } from '../../utils/formatPrice';
import { Button } from '../Button';
import './style.scss';

interface ProductCardProps {
  product: Product;
  onClick: () => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onClick }) => {
  const oldPrice = product.price * 1.1; // Figma mockup
  const installment = product.price / 2;

  // Renderiza no padrao mockup do Figma pixel perfect
  return (
    <div className="product-card" onClick={onClick}>
      <div className="product-card__image-container">
        <img src={product.photo} alt={product.productName} className="product-card__image" />
      </div>
      
      <div className="product-card__info">
        <p className="product-card__desc">{product.descriptionShort}</p>
        
        <p className="product-card__old-price">{formatPrice(oldPrice)}</p>
        <p className="product-card__price">{formatPrice(product.price)}</p>
        
        <p className="product-card__installment">
          ou 2x de {formatPrice(installment)} sem juros
        </p>
        
        <p className="product-card__shipping">Frete grátis</p>
      </div>

      <button className="product-card__btn" onClick={(e) => {
        e.stopPropagation();
        onClick();
      }}>Comprar</button>
    </div>
  );
};
