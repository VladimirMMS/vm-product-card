import styles from "../styles/styles.module.css";
import { useProduct } from "../hooks/useProduct";
import { InitialValues, onChangeArgs, Product, ProductCartHandlers } from "../interfaces";
import { productContext } from "../context/ProductContext";
import React from "react";

export interface Props {
  product: Product;
  children: (args: ProductCartHandlers) => JSX.Element
  className?: string
  style?: React.CSSProperties
  onChange?: (args: onChangeArgs) => void
  value?: number;
  initialValues?: InitialValues
}

export function ProductCard({ children, product, className, style, onChange, value, initialValues }: Props) {
  const { count, increaseBy, maxCount, reset , isMaxCountReaced} = useProduct({ onChange, product, value, initialValues })
  const { Provider } = productContext;
  return (
    <Provider value={{
      count,
      increaseBy,
      product,
      maxCount
    }
    }>
      <div className={`${styles.productCard} ${className}`} style={style}>
        {children({
          count,
          isMaxCountReaced,
          maxCount,
          product,
          increaseBy,
          reset

        })}
      </div>
    </Provider>
  );
}

