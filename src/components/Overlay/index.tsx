import { type ReactNode } from 'react';
import './style.scss';

interface OverlayProps {
  children: ReactNode;
  onClick?: () => void;
  isOpen: boolean;
}

export const Overlay: React.FC<OverlayProps> = ({ children, onClick, isOpen }) => {
  if (!isOpen) return null;

  return (
    <div className="overlay" onClick={onClick}>
      {children}
    </div>
  );
};
