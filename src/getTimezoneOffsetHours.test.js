const { TestWatcher } = require("@jest/core");
const getTimezoneOffsetHours = require("./getTimezoneOffsetHours");

describe("getTimezoneOffsetHours", () => {
  test("getTimezoneOffsetHours return -9", () => {
    expect(getTimezoneOffsetHours()).toBe(-9);
  });
});
