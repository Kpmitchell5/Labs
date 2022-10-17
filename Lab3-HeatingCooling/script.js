let actualTemp = 50;
let desiredTemp = 70;

if (actualTemp < desiredTemp) {
  console.log("Run heat");
} else if (actualTemp > desiredTemp) {
  console.log("Run A/C");
} else {
  console.log("Standby");
}

// Extended Challenge
let targetUnit = "F";
let tempCelsius = 32;

switch (targetUnit) {
  case "F":
    console.log((tempCelsius * 9) / 5 + 32);
    break;
  case "K":
    console.log(tempCelsius - 273.15);
    break;
  case "C":
    console.log(tempCelsius);
    break;
}
