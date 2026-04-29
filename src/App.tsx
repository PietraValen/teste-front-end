import { Header } from './layout/Header';
import { Hero } from './sections/Hero';
import { Categories } from './sections/Categories';
import { ProductShelf } from './sections/ProductShelf';
import { Banners } from './sections/Banners';
import { Brands } from './sections/Brands';
import { Footer } from './layout/Footer';
import './styles/global.scss';

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <main>
        <Hero />
        <Categories />
        <ProductShelf />
        <Banners />
        <Brands />
      </main>
      <Footer />
    </div>
  );
}

export default App;
