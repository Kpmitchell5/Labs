import { Greeter } from "./Greeter";

class HtmlGreeter extends Greeter {
  tagName: string;
  constructor(greeting: string, tagName: string = "h1") {
    super(greeting);
    this.tagName = tagName;
  }
  greet(name: string): string {
    return `<${this.tagName}>${super.greet(name)}</${this.tagName}>`;
  }
}

const newHtmlGreeter: HtmlGreeter = new HtmlGreeter("Hey", "h1");
console.log(newHtmlGreeter.greet("Lisa"));

export { HtmlGreeter };
