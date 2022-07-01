import { useState } from "react";
import { Product, ProductInCart } from "../interfaces";

export function useShoppingCart() {
    const [shoppingCart, setShoppingCart] = useState<{
        [key: string]: ProductInCart;
      }>({});
      const onProductCountChange = ({
        count,
        product,
      }: {
        count: number;
        product: Product;
      }) => {
        setShoppingCart((prev: any) => {
          const productInCart: ProductInCart = prev[product.id] || {...product, count: 0}
          if(Math.max(productInCart.count + count, 0) > 0) {
            productInCart.count+=count
            return {
              ...prev,
              [product.id]: productInCart
            }
          }
          
          const { [product.id]: shoppingRemoved, ...restShopping } = shoppingCart;
          return {
            ...restShopping
          }
         
    
        })
          // ...prev,
          // [product.id]: { ...product, count },
        // if (count === 0) {
        //   const { [product.id]: shoppingRemoved, ...restShopping } = shoppingCart;
        //   setShoppingCart(restShopping);
        // }
      };
      return {
        shoppingCart,
        onProductCountChange
      }
    
}