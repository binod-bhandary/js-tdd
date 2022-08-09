const findGreatestNumber = require("./operation");

test("greatest number between 8 and 10 is 10", () => {
    expect(findGreatestNumber(8,10)).toBe(10);
})