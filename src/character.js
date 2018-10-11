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
}

export class Student extends Character {
  constructor(name, health, endurance, fortitude, attackPower) {
    super(name, health, endurance, fortitude, attackPower);
    this.level = 1;
    this.currentExp = 0;
    this.maxExp = 0;
  }
}

export class Enemy extends Character {
  constructor(name, health, endurance, fortitude, attackPower, enemyExp) {
    super(name, health, endurance, fortitude, attackPower);
    this.enemyExp = enemyExp;
  }

}