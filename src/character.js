/* eslint-disable no-unused-vars */

export class Character {
  constructor(name, health, endurance, fortitude, attackPower){
    this.name = name;
    this.currentHealth = health;
    this.maxHealth = health;
    this.currentEndurance = endurance;
    this.maxEndurance = endurance;
    this.currentFortitude = fortitude;
    this.maxFortitude = fortitude;
    this.attackPower = attackPower; 
  }

  takeDamage(damage) {
    this.currentHealth -= damage;
    this.checkDeath();
  }

}

export class Student extends Character {
  constructor(name, health, endurance, fortitude, attackPower) {
    super(name, health, endurance, fortitude, attackPower);
    this.level = 1;
    this.currentExp = 0;
    this.maxExp = 100;
  }

  basicAttack(enemy) {
    console.log(`${this.name} used coding! ${enemy.name} took ${this.attackPower} damage!`);
    // subtract # from endurance.
    enemy.takeDamage(this.attackPower);
  }

  checkDeath() {
    if (this.currentHealth <= 0) {
      this.currentHealth = 0;
      console.log(`${this.name} has dropped out of Epicodus!`);
    }
  }

  gainExp(enemy) {
    this.currentExp += enemy.enemyExp;
    this.checkLevelUp();
  }
  
  checkLevelUp(){
    if (this.currentExp >= this.maxExp) {
      let rollover = this.currentExp - this.maxExp;
      this.currentExp = rollover;
      this.levelUp();
    }
  }

  levelUp() {
    this.level++;
    this.checkLevelUp();
  }

  specialAttack(enemy) {
    enemy.takeDamage(this.attackPower + 20);
    console.log(`${this.name} uses Hyewon's GitHub! ${enemy.name} took ${this.attackPower + 20} damage`);
  }

  rest() {
    this.currentEndurance += 20;
    if(this.currentEndurance > this.maxEndurance){
      this.currentEndurance = this.maxEndurance;
    }
    console.log(`${this.name} took a smoke break. Endurance +20`);
  }
}

export class Enemy extends Character {
  constructor(name, health, endurance, fortitude, attackPower, enemyExp, attackString) {
    super(name, health, endurance, fortitude, attackPower);
    this.enemyExp = enemyExp;
    this.basicAttackString = attackString;
  }

  basicAttack(enemy) {
    console.log(`${this.name} used ${this.basicAttackString}! ${enemy.name} took ${this.attackPower} damage!`);
    // subtract # from endurance.
    enemy.takeDamage(this.attackPower);
  }

  checkDeath() {
    if (this.currentHealth <= 0) {
      this.currentHealth = 0;
      console.log(`${this.name} has been unit-tested!`);
    }
  }

}