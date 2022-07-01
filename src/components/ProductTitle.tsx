import React from "react";
import { useContext } from "react";
import { productContext } from "../context/ProductContext";
import styles from "../styles/styles.module.css";

export interface ProductTitleProps {
  title?: string;
  className?: string;
}

export const ProductTitle = ({ title, className }: ProductTitleProps) => {
  const context = useContext(productContext);
  const { product } = context;
  return (
    <span className={`${styles.productDescription} ${className}`}>
      {title ? title : product.title}
    </span>
  );
};
