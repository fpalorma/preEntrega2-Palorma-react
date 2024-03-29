/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [carrito, setCarrito] = useState([]);
  const cantidadEnCarrito = carrito.reduce(
    (acc, prod) => acc + prod.quantity,
    0
  );

  const vaciarCarrito = () => {
    setCarrito([]);
  };
  const precioTotal = carrito.reduce(
    (acc, prod) => acc + prod.quantity * prod.price,
    0
  );

  return (
    <CartContext.Provider
      value={{
        carrito,
        setCarrito,
        cantidadEnCarrito,
        vaciarCarrito,
        precioTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}