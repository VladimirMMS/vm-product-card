import { useEffect, useRef, useState } from "react";
import { InitialValues, onChangeArgs, Product } from "../interfaces";


interface useProductArgs {
  product: Product;
  onChange?: (args: onChangeArgs) => void
  value?: number;
  initialValues?: InitialValues
}

export const useProduct = ({onChange, product, value=0, initialValues}:useProductArgs) => {
  const [count, setcount] = useState(initialValues?.count || value);
  const isMounted = useRef(false)

  const increaseBy = (value: number) => {
    let newValue = Math.max(count + value, 0)
    if(initialValues?.maxCount ) {
      newValue = Math.min(newValue, initialValues.maxCount)
      
    }
    setcount(newValue);
    onChange && onChange({count: newValue, product})
  };
  const reset = () => {
    setcount(initialValues?.count || value)
  }
  


  useEffect(() => {
    if(!isMounted.current) return;
    setcount(value)
  }, [value])

  useEffect(() => {
    isMounted.current = true
}, [])
  

  return {
    count,
    increaseBy,
    reset,
    isMaxCountReaced: !!initialValues?.count && initialValues.maxCount === count,
    maxCount: initialValues?.maxCount,
    
  };
};
