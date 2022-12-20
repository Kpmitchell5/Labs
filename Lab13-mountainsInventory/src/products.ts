export interface Product {
  name: string;
  price: number;
}

let products: Product[] = [
  { name: "Coats", price: 500.0 },
  { name: "Rope", price: 100.99 },
  { name: "Food", price: 50.76 },
  { name: "Climbing gear", price: 1000.53 },
];

export const calcAverageProductPrice = (products: Product[]): number => {
  let sum = 0;
  for (let product of products) {
    sum = product.price + sum;
  }
  return sum / products.length;
};
const average: number = calcAverageProductPrice(products);
console.log(average);
