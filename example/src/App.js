import "./App.css";
import { useState } from "react";

const Header = () => {
  return <div>Header</div>;
};

const Footer = () => {
  return <div>Footer</div>;
};

const ProductItem = (product) => {
  const [passed, setPassed] = useState(false);
  return (
    <li className={passed ? "passed" : ""} key={product}>
      {product} <button onClick={() => setPassed(true)}>pass</button>{" "}
      <button onClick={() => setPassed(false)}>Unpassed</button>
    </li>
  );
};

const ProductList = () => {
  const products = ["Go", "React", "JavaScript"];
  return <ul>{products.map((product) => ProductItem(product))}</ul>;
};

const App = () => {
  return (
    <>
      <Header />
      <ProductList />
      <Footer />
    </>
  );
};

export default App;
