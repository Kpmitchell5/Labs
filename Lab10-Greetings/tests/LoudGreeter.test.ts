import { LoudGreeter } from "../src/LoudGreeter";

describe("LoudGreeter class", () => {
  test("test without calling addVolume with the greet method", () => {
    const greeter: LoudGreeter = new LoudGreeter("Hello");
    expect(greeter.greet("Gina")).toBe("Hello, Gina!!!");
  });
  test("test calling addVolume with the greet method", () => {
    const greeter: LoudGreeter = new LoudGreeter("Hello");
    greeter.addVolume();
    expect(greeter.greet("Gina")).toBe("Hello, Gina!!!!");
  });
  test("test calling addVolume 2 times with the greet method", () => {
    const greeter: LoudGreeter = new LoudGreeter("Hello");
    greeter.addVolume();
    greeter.addVolume();
    expect(greeter.greet("Gina")).toBe("Hello, Gina!!!!!");
  });
  test("test calling addVolume 4 times with the greet method", () => {
    const greeter: LoudGreeter = new LoudGreeter("Hello");
    greeter.addVolume();
    greeter.addVolume();
    greeter.addVolume();
    greeter.addVolume();
    expect(greeter.greet("Gina")).toBe("Hello, Gina!!!!!!!");
  });
});
