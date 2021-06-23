const getTimezoneOffsetHours = require("../src/getTimezoneOffsetHours");

describe("getTimezoneOffsetHours", () => {
  test("getTimezoneOffsetHours return -540", () => {
    expect(getTimezoneOffsetHours()).toBe(-540);
  });
});
