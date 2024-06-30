import { Team1, Team2 } from "../Team";
import { Character } from "../Character";

test("create team1", () => {
  const char1 = new Character("Лучник", "Bowerman", 40, 10);
  const char2 = new Character("Мечник", "Swordsman", 30, 15);

  const team = new Team1([char1, char2]);

  expect(team.characters[0]).toEqual(char1);
});

test("iterate team1", () => {
  const char1 = new Character("Лучник", "Bowerman", 40, 10);
  const char2 = new Character("Мечник", "Swordsman", 30, 15);
  const team = new Team1([char1, char2]);
  let lastChar = null;
  for (const character of team) {
    lastChar = character;
  }

  expect(lastChar).toEqual(char2);
});

test("create team2", () => {
  const char1 = new Character("Лучник", "Bowerman", 40, 10);
  const char2 = new Character("Мечник", "Swordsman", 30, 15);

  const team = new Team2([char1, char2]);

  expect(team.characters[0]).toEqual(char1);
});

test("iterate team2", () => {
  const char1 = new Character("Лучник", "Bowerman", 40, 10);
  const char2 = new Character("Мечник", "Swordsman", 30, 15);
  const team = new Team2([char1, char2]);
  let lastChar = null;
  for (const character of team) {
    lastChar = character;
  }

  expect(lastChar).toEqual(char2);
});
