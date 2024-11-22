import { useState } from "react";
import "./Products.css";

function Products() {
  const [userdate, setUserdate] = useState("");
  const [productCode, setProductCode] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [stock, setStock] = useState("");
  const [unitPrice, setUnitPrice] = useState("");
  const [deliveryTime, setDeliveryTime] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(
      "Enviando os dados:\n" +
        "Data: " + userdate + "\n" +
        "Código do Produto: " + productCode + "\n" +
        "Descrição do Produto: " + productDescription + "\n" +
        "Estoque: " + stock + "\n" +
        "Valor Unitário: " + unitPrice + "\n" +
        "Prazo de Entrega: " + deliveryTime
    );
  };

  const handleClear = () => {
    setUserdate("");
    setProductCode("");
    setProductDescription("");
    setStock("");
    setUnitPrice("");
    setDeliveryTime("");
  };

  return (
    <div className="container">
      <h1>SGL</h1>
       <h2>PRODUTOS</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-box">
         <label>
          <input
            type="date"
            value={userdate}
            placeholder="Data"
            onChange={(e) => setUserdate(e.target.value)}
          />
          </label>
        </div>
        <div className="input-box">
        <label>
           <input
            type="text"
            placeholder="Código do produto"
            value={productCode}
            onChange={(e) => setProductCode(e.target.value)}
          />
          </label>
        </div>
        <div className="input-box">
        <label>
          <input
            type="text"
            value={productDescription}
            placeholder="Descrição do Produto:"
            onChange={(e) => setProductDescription(e.target.value)}
          />
          </label>
        </div>
        <div className="input-box">
        <label>
          <input
            type="number"
            value={stock}
            placeholder="Estoque:"
            onChange={(e) => setStock(e.target.value)}
          />
          </label>
        </div>
        <div className="input-box">
        <label>
          <input
            type="text"
            value={unitPrice}
            placeholder="Valor Unitário:"
            onChange={(e) => setUnitPrice(e.target.value)}
          />
          </label>
        </div>
        <div className="input-box">
        <label>
          <input
            type="text"
            value={deliveryTime}
            placeholder="Prazo de Entrega:"
            onChange={(e) => setDeliveryTime(e.target.value)}
          />
          </label>
        </div>
        <button type="submit" className="btn btn-incluir">Incluir Item</button>
                <button type="button" className="btn btn-excluir" onClick={handleClear}>Excluir Iten</button>
      </form>
    </div>
  );
}

export default Products;
