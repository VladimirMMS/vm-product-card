# VM-Product-Card

Este es un paquete de pruebas de desplieque en NPM

### Vladimir Mercado

## Ejemplo

```
import ProductCard, {ProductButtons, ProductImage, ProductTitle} from "vm-product-card";

```

```
<ProductCard
    product={product}
    initialValues={{
      count: 4,
      maxCount: 10
    }}
  >
    {
      ({count, maxCount, reset, increaseBy, isMaxCountReaced}) => (
        <>
          <ProductImage />
          <ProductTitle/>
          <ProductButtons />
        </>
      )
    }
</ProductCard>
```
