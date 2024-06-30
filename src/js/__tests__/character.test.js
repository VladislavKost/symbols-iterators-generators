import { Character } from "../Character";

test("error short name", () => {
  expect(() => new Character("Л", "Bowerman", 40, 10)).toThrow(
    "Incorrect name"
  );
});

test("error invalid character type", () => {
  expect(() => new Character("Лучник", "Boweerman", 40, 10)).toThrow(
    "Invalid type"
  );
});
