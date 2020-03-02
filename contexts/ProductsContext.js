import React, { createContext, useState } from 'react';

export const ProductContext = createContext();

const ProductContextProvider = props => {
  const products = [
    {
      id: 0,
      name: 'iPhone 6S',
      description:
        'Kogi skateboard tattooed, whatever portland fingerstache coloring book mlkshk leggings flannel dreamcatcher.',
      imageUrl: 'http://www.icentar.me/phone/6s/images/goldbig.jpg',
      price: 799
    },
    {
      id: 1,
      name: 'iPhone 5S',
      description:
        'Kogi skateboard tattooed, whatever portland fingerstache coloring book mlkshk leggings flannel dreamcatcher.',
      imageUrl: 'http://www.icentar.me/phone/5s/images/silverbig.png',
      price: 349
    },
    {
      id: 2,
      name: 'Macbook',
      description:
        'Kogi skateboard tattooed, whatever portland fingerstache coloring book mlkshk leggings flannel dreamcatcher.',
      imageUrl: 'http://www.icentar.me/mac/macbook/images/pro.jpg',
      price: 1499
    },
    {
      id: 3,
      name: 'Macbook Air',
      description:
        'Kogi skateboard tattooed, whatever portland fingerstache coloring book mlkshk leggings flannel dreamcatcher.',
      imageUrl: 'http://www.icentar.me/mac/mbair/images/air.jpg',
      price: 999
    },
    {
      id: 4,
      name: 'Macbook Air 2013',
      description:
        'Kogi skateboard tattooed, whatever portland fingerstache coloring book mlkshk leggings flannel dreamcatcher.',
      imageUrl: 'http://www.icentar.me/mac/mbair/images/air.jpg',
      price: 599
    },
    {
      id: 5,
      name: 'Macbook Air 2012',
      description:
        'Kogi skateboard tattooed, whatever portland fingerstache coloring book mlkshk leggings flannel dreamcatcher.',
      imageUrl: 'http://www.icentar.me/mac/mbair/images/air.jpg',
      price: 499
    },
    {
      id: 6,
      name: 'Macbook Air 2012',
      description:
        'Kogi skateboard tattooed, whatever portland fingerstache coloring book mlkshk leggings flannel dreamcatcher.',
      imageUrl: 'http://www.icentar.me/mac/mbair/images/air.jpg',
      price: 499
    },
    {
      id: 7,
      name: 'Macbook Air 2012',
      description:
        'Kogi skateboard tattooed, whatever portland fingerstache coloring book mlkshk leggings flannel dreamcatcher.',
      imageUrl: 'http://www.icentar.me/mac/mbair/images/air.jpg',
      price: 499
    }
  ];
  const [pdts, setPdts] = useState(products);
  const [cart, updateCart] = useState([]);
  const addProdToCart = p => {
    const newCartItem = {
      name: p.name,
      id: p.id,
      price: p.price
    };
    const updatedCart = newCartItem;
    updateCart([updatedCart, ...cart]);
  };
  const removeProdFromCart = id => {
    updateCart(cart.filter(item => item.id !== id));
  };
  const calcTotalCostInCart = cart => {
    return cart.reduce((acc, item) => {
      return acc + item.price;
    }, 0);
  };
  return (
    <ProductContext.Provider
      value={{
        pdts,
        addProdToCart,
        cart,
        removeProdFromCart,
        calcTotalCostInCart
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductContextProvider;
