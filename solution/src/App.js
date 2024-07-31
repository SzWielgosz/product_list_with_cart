import ShopItem from './components/ShopItem';
import Cart from './components/Cart';
import "./App.css"


function App() {
  return (
    <div className="App">
      <header>
        <h1>Desserts</h1>
      </header>
      <main>
        <section className="shop-items">
          <ShopItem name="Pistachio Baklava" imgSrc="assets/images/image-baklava-desktop.jpg" altText="Baklava" price="6.50" />
          <ShopItem name="Salted Caramel Brownie" imgSrc="assets/images/image-brownie-desktop.jpg" altText="Brownie" price="7.50" />
          <ShopItem name="Red Velvet Cake" imgSrc="assets/images/image-cake-desktop.jpg" altText="Cake" price="8.00" />
          <ShopItem name="Vanilla Bean Crème Brûlée" imgSrc="assets/images/image-creme-brulee-desktop.jpg" altText="CremeBrulee" price="5.50" />
          <ShopItem name="Macaron Mix of Five" imgSrc="assets/images/image-macaron-desktop.jpg" altText="Macaron" price="4.00" />
          <ShopItem name="Lemon Meringue Pie" imgSrc="assets/images/image-meringue-desktop.jpg" altText="Meringue" price="5.00" />
          <ShopItem name="Vanilla Panna Cotta" imgSrc="assets/images/image-panna-cotta-desktop.jpg" altText="PannaCotta" price="4.50" />
          <ShopItem name="Classic Tiramisu" imgSrc="assets/images/image-tiramisu-desktop.jpg" altText="Tiramisu" price="5.50" />
          <ShopItem name="Waffle with Berries" imgSrc="assets/images/image-waffle-desktop.jpg" altText="Waffle" price="6.50" />
        </section>
        <aside>
            <Cart />
        </aside>
      </main>
    </div>
  );
}

export default App;
