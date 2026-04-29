import type { Product } from '../../@types/product';
import { formatPrice } from '../../utils/formatPrice';
import { Button } from '../Button';
import './style.scss';

interface ProductCardProps {
  product: Product;
  onClick: () => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onClick }) => {
  // Simulação de preço antigo (10% a mais) e parcelamento (2x)
  const oldPrice = product.price * 1.1;
  const installment = product.price / 2;

  return (
    <div className="product-card">
      <div className="product-card__image-container">
        <img src={product.photo} alt={product.productName} className="product-card__image" />
      </div>
      
      <div className="product-card__info">
        <h3 className="product-card__title">{product.productName}</h3>
        <p className="product-card__desc">{product.descriptionShort}</p>
        
        <p className="product-card__old-price">{formatPrice(oldPrice)}</p>
        <p className="product-card__price">{formatPrice(product.price)}</p>
        
        <p className="product-card__installment">
          ou 2x de {formatPrice(installment)} sem juros
        </p>
        
        <p className="product-card__shipping">Frete grátis</p>
      </div>

      <Button className="product-card__btn" onClick={onClick}>Comprar</Button>
    </div>
  );
};
