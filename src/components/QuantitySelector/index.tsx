import './style.scss';

interface QuantitySelectorProps {
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
}

export const QuantitySelector: React.FC<QuantitySelectorProps> = ({
  quantity,
  onIncrease,
  onDecrease,
}) => {
  return (
    <div className="quantity-selector">
      <button 
        type="button" 
        className="quantity-selector__btn" 
        onClick={onDecrease}
        disabled={quantity <= 1}
        aria-label="Diminuir quantidade"
      >
        <svg width="12" height="2" viewBox="0 0 12 2" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11 1L1 1" stroke="#3A048C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
      <span className="quantity-selector__value">{quantity}</span>
      <button 
        type="button" 
        className="quantity-selector__btn" 
        onClick={onIncrease}
        aria-label="Aumentar quantidade"
      >
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6 1V11M11 6L1 6" stroke="#3A048C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
    </div>
  );
};
