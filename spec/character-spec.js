import { Character } from "../src/character.js";

describe('Character', function() {

  it('should properly construct a Character class', function() {
    let character = new Character("Chan", 100, 100, 100, 5)
    expect(character.name).toEqual("Chan");
    expect(character.currentHealth).toEqual(100);
    expect(character.currentEndurance).toEqual(100);
    expect(character.currentFortitude).toEqual(100);
    expect(character.attackPower).toEqual(5);
  });
    
});
