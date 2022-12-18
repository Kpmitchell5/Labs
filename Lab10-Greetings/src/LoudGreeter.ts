import { Greeter } from "./Greeter";

class LoudGreeter extends Greeter {
  private extra: string = "!!";
  greet(name: string): string {
    return `${super.greet(name)}${this.extra}`;
  }
  addVolume(): void {
    this.extra += "!";
  }
}

const newExclamation: LoudGreeter = new LoudGreeter("Hello");
console.log(newExclamation.greet("Gina"));

export { LoudGreeter };
