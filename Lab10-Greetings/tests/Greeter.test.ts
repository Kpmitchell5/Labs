import { Greeter } from "../src/Greeter";

describe("Greeter class", () => {
  test("the greeting property is properly set by the constructor", () => {
    const greeter: Greeter = new Greeter("Hello");
    expect(greeter.greeting).toBe("Hello");
  });
});
test("greet has a parameter of name and returns greeting and name", () => {
  const greet: Greeter = new Greeter("Hello");
  const result = greet.greet("James");
  expect(result).toBe("Hello, James!");
});
