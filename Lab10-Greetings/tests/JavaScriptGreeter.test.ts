import { JavaScriptGreeter } from "../src/JavaScriptGreeter";

describe("JavaScriptGreeter class", () => {
  test("the JavaScriptGreeter overrides Greeter", () => {
    const greeter: JavaScriptGreeter = new JavaScriptGreeter("Hello");
    expect(greeter.greeting).toBe("Hello");
  });
  test("the greet method return the appropriate string", () => {
    const greeter: JavaScriptGreeter = new JavaScriptGreeter("Hi");
    expect(greeter.greet("Grant")).toBe("console.log('Hi, Grant!')");
  });
});
