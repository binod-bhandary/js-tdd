import findGreatestNumber from "./operation_es6";

test("greatest number between 8 and 10 is 10", () => {
    expect(findGreatestNumber(8,10)).toBe(10);
})
test("greatest number between 2,3,5,20,45,75,80,98,101 is 101", () => {
    expect(findGreatestNumber(2,3,5,20,45,75,80,98,101)).toBe(101);
})
test("greatest number if 8 is 8", () => {
    expect(findGreatestNumber(8)).toBe(8);
})