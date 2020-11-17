import { ClassNames } from "./class-names.function";

describe("ClassNames", () => {
  test("item item", () => {
    expect(ClassNames("item", "item")).toEqual("item item");
  });
});
