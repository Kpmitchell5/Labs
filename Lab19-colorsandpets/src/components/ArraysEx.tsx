import { useState } from "react";
import { Pet } from "../models/pet";

export function ArraysEx() {
  const [colors, setColors] = useState<string[]>([
    "red",
    "orange",
    "purple",
    "blue",
  ]);

  const [pets, setPets] = useState<Pet[]>([
    { name: "Nova", type: "dog", id: 1 },
    { name: "Orion", type: "cat", id: 2 },
    { name: "Polly", type: "bird", id: 3 },
    { name: "Snek", type: "snake", id: 4 },
  ]);

  function addColor(color: string): void {
    setColors([...colors, color]);
  }

  return (
    <div>
      <h1>Colors</h1>
      <ol>
        {colors.map((color, index) => (
          <li key={index}>{color}</li>
        ))}
      </ol>
      <button onClick={() => addColor("Violet")}>Violet</button>
      <button onClick={() => addColor("Green")}>Green</button>
      <button onClick={() => addColor("Yellow")}>Yellow</button>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          {pets.map((pet) => (
            <tr key={pet.id}>
              <td>{pet.name}</td>
              <td>{pet.type}</td>
            </tr>
          ))}
          ;
        </tbody>
      </table>
    </div>
  );
}
