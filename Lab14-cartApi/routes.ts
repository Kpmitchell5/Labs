import { Router, Request, Response } from "express";
import { Item } from "./item";

// hard coded data
let itemArray: Item[] = [
  { id: 1, quantity: 20, price: 10, product: "Eggs", isActive: true },
  { id: 2, quantity: 5, price: 15, product: "Quinoa", isActive: true },
  { id: 3, quantity: 2, price: 20.75, product: "Steak", isActive: true },
  { id: 4, quantity: 2000, price: 1.2, product: "Gum", isActive: true },
];

export const itemRouter = Router();

// CRUD create read update delete

itemRouter.get("/", async (req: Request, res: Response): Promise<Response> => {
  if (req.query.maxPrice !== undefined) {
    let underArray = itemArray.filter(
      (x) => x.price <= Number(req.query.maxPrice) && x.isActive
    );
    return res.status(200).json(underArray);
  }
  //prefix is the parameter
  else if (req.query.prefix !== undefined) {
    let startsWithArray = itemArray.filter(
      (x) => x.product.startsWith(String(req.query.prefix)) && x.isActive
    );
    return res.status(200).json(startsWithArray);
  } else if (req.query.pageSize !== undefined) {
    return res
      .status(200)
      .json(
        itemArray.filter((x) => x.isActive).slice(0, Number(req.query.pageSize))
      );
  } else {
    return res.status(200).json(itemArray.filter((x) => x.isActive));
  }
});

// URI parameter
itemRouter.get(
  "/:id",
  async (req: Request, res: Response): Promise<Response> => {
    let itemIWantToFind = itemArray.find((x) => x.id === Number(req.params.id));

    if (itemIWantToFind === undefined) {
      return res.status(404).send("ID not found");
    } else {
      return res.status(200).json(itemIWantToFind);
    }
  }
);

itemRouter.post("/", async (req: Request, res: Response): Promise<Response> => {
  let newItem: Item = {
    id: GetNextId(),
    quantity: Number(req.body.quantity),
    price: Number(req.body.price),
    product: String(req.body.product),
    isActive: Boolean(req.body.isActive),
  };
  itemArray.push(newItem);

  return res.status(201).json(newItem);
});

itemRouter.put(
  "/:id",
  async (req: Request, res: Response): Promise<Response> => {
    // find the item by the id
    let itemFound = itemArray.find((x) => x.id === Number(req.params.id));
    if (itemFound !== undefined) {
      // update the properties of the item based on what is sent in the body of the request
      itemFound.price = Number(req.body.price);
      itemFound.product = String(req.body.product);
      itemFound.quantity = Number(req.body.quantity);
      itemFound.isActive = Boolean(req.body.isActive);
      // return a status of 200, with the updated item in json format
      return res.status(200).json(itemFound);
    } else {
      return res.status(404).send("Hey I didn't find it bro");
    }
  }
);

// hard delete
itemRouter.delete(
  "/:id",
  async (req: Request, res: Response): Promise<Response> => {
    let itemFound = itemArray.find((x) => x.id === Number(req.params.id));

    if (itemFound === undefined) {
      return res.status(404).send("Who Dat?");
    } else {
      // itemArray = itemArray.filter((x) => x.id !== Number(req.params.id));

      itemFound.isActive = false;
      console.log(itemArray);
      return res.status(204).send("Deleted");
    }
  }
);

function GetNextId() {
  // spread operator (...)
  return Math.max(...itemArray.map((x) => x.id)) + 1;
}
