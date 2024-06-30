import { canIterate } from "../canIterate";

test("iterate map", () => {
  expect(canIterate(new Map())).toBe(true);
});

test("iterate set", () => {
  expect(canIterate(new Set())).toBe(true);
});

test("iterate map", () => {
  expect(canIterate(null)).toBe(false);
});

test("iterate map", () => {
  expect(canIterate(10)).toBe(false);
});

test("iterate map", () => {
  expect(canIterate("Netology")).toBe(true);
});
