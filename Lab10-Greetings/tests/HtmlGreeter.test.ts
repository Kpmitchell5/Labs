import { HtmlGreeter } from "../src/HtmlGreeter";

describe("HtmlGreeter class", () => {
  test("test with different greetings", () => {
    const greeter: HtmlGreeter = new HtmlGreeter("Hey");
    expect(greeter.greeting).toBe("Hey");
  });
  test("test with different names", () => {
    const greeter: HtmlGreeter = new HtmlGreeter("Lisa");
    expect(greeter.greet("Lisa")).toBe("Lisa");
  });
  test("test with different tagNames", () => {
    const greeter: HtmlGreeter = new HtmlGreeter("Hey", "h1");
    expect(greeter.tagName).toBe("h1");
  });
  test("test with different tagNames", () => {
    const greeter: HtmlGreeter = new HtmlGreeter("Hey", "h6");
    expect(greeter.tagName).toBe("h6");
  });
  test("test with default h1 tagName when the second constructor argument is left off", () => {
    const greeter: HtmlGreeter = new HtmlGreeter("Hey", "h1");
    expect(greeter.greet("Lisa")).toBe("<h1>Hey, Lisa!</h1>");
  });
});
