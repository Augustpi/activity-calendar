import { colorShade } from "../utils/helpers";
test("Color matching control", () => {
  expect(colorShade("#00fe00", -150)).toBe("#006800");
});
