import { useState } from 'react';
import './App.css';
import Nav from './comp/Nav';
import Slider from './comp/Slider';
import Product from './comp/Product';

function App() {
  return (
    <div className="App bg-stone-50">
      <div className="drawer min-h-screen">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <Nav />

          <Slider />

          <div className="product-container gap-4 flex p-2 mt-4 justify-center">
            <Product/>
            <Product />
            <Product />
            <Product />
          </div>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-base-100 text-base-content">
            <li>
              <a>Sidebar Item 1</a>
            </li>
            <li>
              <a>Sidebar Item 2</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
