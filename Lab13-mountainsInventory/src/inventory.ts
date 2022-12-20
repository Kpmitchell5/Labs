import { Product } from "./products";

interface InventoryItem {
  product: Product;
  quantity: number;
}

const inventory: InventoryItem[] = [
  { product: { name: "motor", price: 10.0 }, quantity: 10 },
  { product: { name: "sensor", price: 12.5 }, quantity: 4 },
  { product: { name: "LED", price: 1 }, quantity: 20 },
];

function calcInventoryValue(inventory: InventoryItem[]): number {
  if (inventory.length) {
    return inventory.reduce((p, c) => {
      return p + c.product.price * c.quantity;
    }, 0);
  } else {
    return 0;
  }
}

const inventoryValue: number = calcInventoryValue(inventory);
console.log(inventoryValue);

export { calcInventoryValue };
