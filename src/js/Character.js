export class Character {
  constructor(name, type, attack, defence) {
    if (name.length < 2 || name.length > 10) {
      throw new Error("Incorrect name");
    }
    if (
      ["Bowerman", "Swordsman", "Magician", "Daemon", "Undead", "Zombie"].indexOf(
        type
      ) === -1
    ) {
      throw new Error("Invalid type");
    }

    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
    this.attack = undefined;
    this.defence = undefined;
  }
}
