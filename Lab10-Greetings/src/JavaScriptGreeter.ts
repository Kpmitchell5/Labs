import { Greeter } from "./Greeter";

class JavaScriptGreeter extends Greeter {
  constructor(greeting: string) {
    super(greeting);
  }
  greet(name: string): string {
    return `console.log(${super.greet(name)})`;
  }
}

const newgreet: JavaScriptGreeter = new JavaScriptGreeter("Hello");
console.log(newgreet.greet("Grant"));
export { JavaScriptGreeter };
