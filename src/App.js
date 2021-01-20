import logo from './logo.svg';
import './App.css';
import products from "./products.js";

function App() {
  const PictureSource = "./guitarimg.jpg";
  document.title = "ScrapGuitar";

  const productList = products.map((product) => (

          <tr>
            <td><img className = "center" src={product.image} /></td> 
            <td>{product.name}</td>
              <td> {product.price} </td>
          </tr>

  ));
  return (
    <div className="App">
      <header className="App-header">
      <p className = "App"> 
         Welcome to the one and only used guitars shop in the country, in which you can find good equipment that suits your budget. We can go as low as your budget can go. 
      </p>
        <img src={PictureSource} className="center" alt="logo" />
        <h3>Our products</h3>
        <table>
          {productList}
        </table>
      </header>
    </div>
  );
}

export default App;
