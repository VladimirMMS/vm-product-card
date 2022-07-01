import { useContext } from "react";
import styles from "../styles/styles.module.css";
import noImage from '../assets/no-image.jpg'
import { productContext } from "../context/ProductContext";
import React from "react";


export interface Props {
  img?: string;
  className?: string;
}

export const ProductImage = ({ img = '', className }: Props) => {
  const context = useContext(productContext);
  const { product } = context;
  return (
    <img
      className={`${styles.productImg} ${className}`}
      src={img ? img : product.img ? product.img : noImage}
      alt="Product"
    />
  )
}

