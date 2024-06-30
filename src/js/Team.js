export class Team1 {
  constructor(characters) {
    this.characters = characters;
    this.index = 0;
  }

  [Symbol.iterator]() {
    return this;
  }

  next() {
    if (this.index < this.characters.length) {
      return { value: this.characters[this.index++], done: false };
    } else {
      return { value: undefined, done: true };
    }
  }
}

export class Team2 {
  constructor(characters) {
    this.characters = characters;
    this.index = 0;
  }

  *[Symbol.iterator]() {
    while (this.index < this.characters.length) {
      yield this.characters[this.index++];
    }
  }
}
