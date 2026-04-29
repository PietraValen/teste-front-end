import { useState, useRef } from 'react';
import { useProducts } from '../../hooks/useProducts';
import { ProductCard } from '../../components/ProductCard';
import { ProductModal } from '../../components/ProductModal';
import { Overlay } from '../../components/Overlay';
import type { Product } from '../../@types/product';
import './style.scss';

const tabs = ['CELULAR', 'ACESSÓRIOS', 'TABLETS', 'NOTEBOOKS', 'TVS', 'VER TODOS'];

export const ProductShelf = () => {
  const { products, loading, error } = useProducts();
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <section className="product-shelf">
      <div className="container">
        <div className="product-shelf__header">
          <h2 className="product-shelf__title">Produtos relacionados</h2>
          
          <ul className="product-shelf__tabs">
            {tabs.map(tab => (
              <li 
                key={tab} 
                className={`product-shelf__tab ${activeTab === tab ? 'active' : ''}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </li>
            ))}
          </ul>
        </div>

        {loading ? (
          <p className="product-shelf__loading">Carregando produtos...</p>
        ) : error ? (
          <p className="product-shelf__error">Erro: {error}</p>
        ) : (
          <div className="product-shelf__carousel-wrapper">
            <button className="product-shelf__arrow left" onClick={scrollLeft}>&lt;</button>
            <div className="product-shelf__grid" ref={carouselRef}>
              {products.map((product, i) => (
                <div className="product-shelf__card-wrapper" key={i}>
                  <ProductCard product={product} onClick={() => setSelectedProduct(product)} />
                </div>
              ))}
            </div>
            <button className="product-shelf__arrow right" onClick={scrollRight}>&gt;</button>
          </div>
        )}
      </div>

      <Overlay isOpen={!!selectedProduct} onClick={() => setSelectedProduct(null)}>
        {selectedProduct && (
          <ProductModal 
            isOpen={!!selectedProduct} 
            onClose={() => setSelectedProduct(null)} 
            product={selectedProduct} 
          />
        )}
      </Overlay>
    </section>
  );
};
