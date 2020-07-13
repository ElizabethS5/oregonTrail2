class Traveler {
  constructor(name) {
    this.name = name;
    this.food = 1;
    this.isHealthy = true;
    this.face = null;
    // this.generate();
  }

  hunt() {
    this.food += 2;
    return this;
  }

  eat() {
    if (this.food) {
      this.food -= 1;
    } else {
      this.isHealthy = false;
    }
    // this.checkHealth();
    return this;
  }

  generate() {
    this.person = document.createElement("div");
    this.person.classList.add("person");
    this.face = document.createElement("div");
    this.face.classList.add("face");

    this.face.append("🙂");

    this.person.append(this.face);
    this.person.append(this.name);
    document.querySelector("main").append(this.person);
  }

  checkHealth() {
    if (!this.isHealthy) {
      this.face.innerHTML = "🤒";
    } else {
      this.face.innerHTML = "🙂";
    }
  }
}
