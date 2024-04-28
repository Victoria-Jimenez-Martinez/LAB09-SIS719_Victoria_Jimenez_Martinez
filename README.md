## Cambios al trabajar con TSX

Si trabajáramos con TSX en lugar de JSX, los cambios principales estarían relacionados con la adición de tipos estáticos. Para el componente `Card`, el tipo del estado `product` podría verse así:

```typescript
interface Product {
  title: string;
  description: string;
  images: string[];
  price: number;
  brand: string;
}
```
Esto proporciona un esquema claro de los datos esperados para cada producto y ayuda a garantizar la consistencia y seguridad en el manejo de los datos del producto en la aplicación TypeScript/TSX.

```typescript
import type {Product} "./product"

const data:Product = await response.json();

```