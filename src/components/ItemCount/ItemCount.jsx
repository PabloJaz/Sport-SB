import React from 'react'
import { useState } from 'react';

function ItemCount() {
  const [cantidad, setCantidad] = useState(0);

  const sumarUno = () => {
    if (cantidad < 10) {
      setCantidad(cantidad + 1);
    }
  };

  const restarUno = () => {
    if (cantidad > 0) {
      setCantidad(cantidad - 1);
    }
  };

  return (
    <div>
      <p>Remera MOD1</p>
      <button onClick={restarUno}>-</button>
      <button onClick={() => alert(`Cantidad: ${cantidad}`)}>
        {`Cantidad: ${cantidad}`}
      </button>
      <button onClick={sumarUno}>+</button>
      
    </div>
  );
}

export default ItemCount;
