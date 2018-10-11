import { Character, Student, Enemy } from "../src/character.js";

describe('Character', function() {

  it('should properly construct a Character class', function() {
    let character = new Character("Chan", 100, 100, 100, 5);
    expect(character.name).toEqual("Chan");
    expect(character.currentHealth).toEqual(100);
    expect(character.currentEndurance).toEqual(100);
    expect(character.currentFortitude).toEqual(100);
    expect(character.attackPower).toEqual(5);
  });
    
});

describe('Student', function() {
  it('should properly construct a Student class', function() {
    let chan = new Student("Chan", 100, 100, 100, 5);
    expect(chan.name).toEqual("Chan");
    expect(chan.currentHealth).toEqual(100);
    expect(chan.currentEndurance).toEqual(100);
    expect(chan.currentFortitude).toEqual(100);
    expect(chan.attackPower).toEqual(5);
    expect(chan.level).toEqual(1);
    expect(chan.currentExp).toEqual(0);
    expect(chan.maxExp).toEqual(100);
  });
});

describe('Enemy', function(){
  it('should properly construct a Enemy class', function(){
    let enemy = new Enemy("Intro", 100, 100, 100, 5, 10, "wrong syntax");
    expect(enemy.name).toEqual("Intro");
    expect(enemy.currentHealth).toEqual(100);
    expect(enemy.currentEndurance).toEqual(100);
    expect(enemy.currentFortitude).toEqual(100);
    expect(enemy.attackPower).toEqual(5);
    expect(enemy.enemyExp).toEqual(10);
    expect(enemy.basicAttackString).toEqual("wrong syntax");
  });
});

describe('basicAttack and takeDamage', function() {
  it('should test basicAttack() and takeDamage() functions', function() {
    let chan = new Student("Chan", 100, 100, 100, 5);
    let enemy = new Enemy("Intro", 100, 100, 100, 5, 10, "wrong syntax");
    chan.basicAttack(enemy);
    enemy.basicAttack(chan);
    expect(chan.currentHealth).toEqual(95);
    expect(enemy.currentHealth).toEqual(95);
  });
});

describe('checkDeath for Enemy', function(){
  it('should test if checkDeath() when currentHealth === 0', function(){
    let chan = new Student("Chan", 100, 100, 100, 101);
    let enemy = new Enemy("Intro", 100, 100, 100, 5, 10, "wrong syntax");
    chan.basicAttack(enemy);
    expect(enemy.currentHealth).toEqual(0);
  });
});

describe('checkDeath for Student', function(){
  it('should test if checkDeath() when currentHealth === 0', function(){
    let chan = new Student("Chan", 100, 100, 100, 5);
    let enemy = new Enemy("Intro", 100, 100, 100, 101, 10, "wrong syntax");
    enemy.basicAttack(chan);
    expect(chan.currentHealth).toEqual(0);
  });
});

describe('Level up for player', function(){
  it('should check if the player is ready for a level up', function(){
    let chan = new Student("Chan", 100, 100, 100, 100);
    chan.levelUp();
    expect(chan.level).toEqual(2);
  });
});

describe('checkLevelUp() and gainEXP for Student', function() {
  it('should test checkLevelUp() and gainExp()', function() {
    let chan = new Student("Chan", 100, 100, 100, 5);
    let enemy = new Enemy("Intro", 100, 100, 100, 101, 250, "wrong syntax");
    chan.gainExp(enemy);
    expect(chan.level).toEqual(3);
  });
});

describe('specialAttack() damage', function() {
  it('should test if specialAttack() does additional damage', function() {
    let chan = new Student("Chan", 100, 100, 100, 5);
    let enemy = new Enemy("Intro", 100, 100, 100, 5, 10,  "wrong syntax");
    chan.specialAttack(enemy);
    expect(enemy.currentHealth).toEqual(75);
  });
});

describe('rest() for student', function() {
  it('should test if rest() add additional endurance to the student', function(){
    let chan = new Student("Chan", 100, 100, 100, 5);
    chan.currentEndurance = 80;
    expect(chan.currentEndurance).toEqual(80);
    chan.rest();
    expect(chan.currentEndurance).toEqual(100);
  })
})