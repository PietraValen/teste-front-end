import { useState } from 'react';
import './style.scss';

interface SearchBarProps {
  onSearch: (term: string) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [term, setTerm] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(term);
  };

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={term} 
        onChange={e => setTerm(e.target.value)} 
        placeholder="O que você está procurando?" 
      />
      <button type="submit">Buscar</button>
    </form>
  );
};
