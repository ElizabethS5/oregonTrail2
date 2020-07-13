class Hunter extends Traveler {
  constructor(name) {
    super(name);
    this.food = 2;
  }

  hunt() {
    this.food += 5;
    return this;
  }

  eat() {
    if (this.food > 1) {
      this.food -= 2;
    } else {
      this.food = 0;
      this.isHealthy = false;
    }
    return this;
  }

  giveFood(traveler, numUnitsOfFood) {
    if (this.food >= numUnitsOfFood) {
      traveler.food += numUnitsOfFood;
      this.food -= numUnitsOfFood;
    }
    return this;
  }
}
