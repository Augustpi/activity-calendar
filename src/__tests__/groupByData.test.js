import { groupByData } from "../utils/helpers";
const data = [1, 2, 2, 3];
test("Group by data", () => {
  expect(groupByData(data)["2"]).toBe(2);
});
