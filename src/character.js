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