import { add, subtract, multiplication, division, exponentiation } from "../calculator";

test("adds two numbers correctly", () => {
  expect(add(2, 3)).toBe(5);
});

test("subtracts two numbers correctly", () => {
  expect(subtract(5, 3)).toBe(2);
});

// Add more test cases for the other calculator functions
test("multiplicar dos números", () => {
    expect(multiplication(3, 5)).toBe(15);
});
test("dividir un múmero", () => {
    expect(division(333, 3)).toBe(111);
});
test("dividir un múmero", () => {
    expect(division(5, 0)).toBe('Error: División entre cero');
});
test("elevar un número", () => {
    expect(exponentiation(4, 3)).toBe(64);
});