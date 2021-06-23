const { TestWatcher } = require("@jest/core");
const getTimezoneOffsetHours = require("./getTimezoneOffsetHours");

describe("getTimezoneOffsetHours", () => {
  test("getTimezoneOffsetHours return -540", () => {
    expect(getTimezoneOffsetHours()).toBe(-540);
  });
});
