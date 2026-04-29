import { useState, useEffect } from 'react';
import type { Product } from '../@types/product';
import productsData from '../../produtos.json';

export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Simulating API fetch
    const fetchProducts = async () => {
      try {
        setLoading(true);
        // Em um cenário real seria: await api.get('/products')
        if (productsData.success) {
          setProducts(productsData.products);
        } else {
          throw new Error('Falha ao carregar produtos');
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Erro desconhecido');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return { products, loading, error };
};
