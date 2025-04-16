import Header from './components/Header.jsx';
import Shop from './components/Shop.jsx';
import Product from './components/Product.jsx';
import { DUMMY_PRODUCTS } from './dummy-products.js';
import CartContextProvider from './store-context/shoppincCartContext.jsx';

function App() {

  return (
    <CartContextProvider>
      {/* When using older version than React 19, use CartContext.Provider */}
      <Header />
      <Shop onAddItemToCart={handleAddItemToCart} >
        {DUMMY_PRODUCTS.map((product) => (
          <li key={product.id}>
            <Product {...product} />
          </li>
        ))}
      </Shop>
    </CartContextProvider>
  );
}

export default App;
