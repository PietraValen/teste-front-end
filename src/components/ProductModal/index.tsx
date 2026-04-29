import { useState } from 'react';
import { QuantitySelector } from '../QuantitySelector';
import { Button } from '../Button';
import { formatPrice } from '../../utils/formatPrice';
import type { Product } from '../../@types/product';
import './style.scss';

interface ProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: Product;
}

export const ProductModal: React.FC<ProductModalProps> = ({ isOpen, onClose, product }) => {
  const [quantity, setQuantity] = useState(1);

  if (!isOpen) return null;

  return (
    <div className="product-modal" onClick={(e) => e.stopPropagation()}>
      <button className="product-modal__close" onClick={onClose} aria-label="Fechar modal">
        &times;
      </button>

      <div className="product-modal__content">
        <div className="product-modal__image-wrapper">
          <img 
            src={product.photo} 
            alt={product.productName} 
            className="product-modal__image"
          />
        </div>

        <div className="product-modal__details">
          <h2 className="product-modal__title">{product.productName}</h2>
          <p className="product-modal__price">{formatPrice(product.price)}</p>
          <p className="product-modal__description">
            {product.descriptionShort}
          </p>
          <a href="#detalhes" className="product-modal__link">Veja mais detalhes do produto &gt;</a>
          
          <div className="product-modal__actions">
            <QuantitySelector 
              quantity={quantity} 
              onIncrease={() => setQuantity(q => q + 1)} 
              onDecrease={() => setQuantity(q => Math.max(1, q - 1))} 
            />
            <Button className="product-modal__buy-btn">COMPRAR</Button>
          </div>
        </div>
      </div>
    </div>
  );
};
