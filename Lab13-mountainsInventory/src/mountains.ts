export interface Mountain {
  name: string;
  height: number;
}

let mountains: Mountain[] = [
  { name: "Kilaminjaro", height: 19341 },
  { name: "Everest", height: 29029 },
  { name: "Denali", height: 20310 },
];

export function findNameOfTallestMountain(mountains: Mountain[]): string {
  if (mountains.length) {
    let currentTallestMountain: Mountain = mountains[0];
    mountains.forEach((item) => {
      if (item.height > currentTallestMountain.height) {
        currentTallestMountain = item;
      }
    });
    return currentTallestMountain.name;
  } else {
    return "";
  }
}

const tallestMountain: string = findNameOfTallestMountain(mountains);
console.log(tallestMountain);
