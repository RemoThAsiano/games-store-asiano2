import { createContext, useContext, useState } from "react";

export const CartContext = createContext ({});

export const useCartContext = () => useContext(CartContext)

const CartContextProvider = ({ children }) => {
    const [cartList, setCartList] = useState([]);

        const isInCart = (id) => {
            return cartList.some(item => item.id === id)
        }

        const addToCart = (item, quantity) => {
            if (isInCart(item.id)) {
              return setCartList(
                cartList.map((product) =>
                  product.id === item.id
                    ? { ...product, quantity: product.quantity + quantity }
                    : product
                )
              );
            }
            setCartList([...cartList, { ...item, quantity }]);
          };

          const removeAll = () => {
              setCartList([])
          };

          const deleteById = (id) => {
            setCartList(cartList.filter((item) => item.id !== id));
          };

          const removeOneUnit = (id) => {
            if (unitsPerProduct(id) === 1) {
              return deleteById(id);
            }
            setCartList(
              cartList.map((product) =>
                product.id === id
                  ? { ...product, quantity: product.quantity - 1 }
                  : product
              )
            );
          };

          const totalCount = () => {
              return cartList.reduce((total, item) => total + item.quantity, 0);
          }

          const totalPrice = () => {
              return cartList.reduce(
                  (total, item) => total + item.quantity * item.price, 0);
          };

          const unitsPerProduct = (id) => {
              return cartList.find((item) => item.id === id).quantity;
          }
  return (
    <CartContext.Provider value={{ cartList,
    addToCart,
    removeAll,
    deleteById,
    totalCount,
    totalPrice,
    unitsPerProduct,
    removeOneUnit }}>
        { children }
    </CartContext.Provider>
  )
}

export default CartContextProvider;

// export const CartContextProvider = ({ children }) => {
//     const [productsList, setProductsList] = useState([]);

//     const addProduct = (product, quantity) => {
//         setProductsList([product,...productsList])
        
//     }

//     const removeProduct = (id) => {
//         setProductsList(productsList.filter(i => i.id !== id))
//     }
    
//     const removeAll = () => {
//         setProductsList([])
//     }

//     const isInCart = (id) => {
//         productsList.some(product => product.id === id)

//     }

//     const totalCount = () => {
//         return productsList.reduce((total, product) => total + product.quantity, 0); 
//     };


//     const totalPrice = () => {
//         return productsList.reduce((total,product) => total + product.quantity * product.price,
//         0
//         );
//     }

//     return (
//         <CartContext.Provider value={{
//             products: productsList,
//             addProduct,
//             removeProduct,
//             removeAll,
//             isInCart,
//             totalCount,
//             totalPrice
//         }}>
//             {children}
//         </CartContext.Provider>
//     )
// }

// export default CartContextProvider;