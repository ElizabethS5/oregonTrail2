class Wagon {
  constructor(capacity) {
    this.capacity = capacity;
    this.passengers = [];
    // this.element = null;
    // this.wagonDiv = null;
    // this.generate();
    // console.log(this.element);
  }

  getAvailableSeatCount() {
    return this.capacity - this.passengers.length;
  }

  join(traveler) {
    if (this.getAvailableSeatCount()) {
      // let seats = Array.from(this.wagonDiv.childNodes);
      // let firstOpenSeat = seats.find((seat) => seat.childNodes.length === 0);
      // firstOpenSeat.appendChild(traveler.person);
      this.passengers.push(traveler);
    }
  }

  shouldQuarantine() {
    return !this.passengers.every((traveler) => traveler.isHealthy);
  }

  totalFood() {
    return this.passengers.reduce((a, b) => a + b.food, 0);
  }

  generate() {
    const containerDiv = document.createElement("div");
    containerDiv.classList.add("wagonContainer");
    const oxDiv = document.createElement("div");
    oxDiv.classList.add("ox");
    oxDiv.append("🐂", document.createElement("br"), "🐂");
    containerDiv.append(oxDiv);
    this.wagonDiv = document.createElement("div");
    this.wagonDiv.classList.add("wagon");
    for (let i = 0; i < this.capacity; i++) {
      const seat = document.createElement("div");
      seat.classList.add("seat");
      this.wagonDiv.append(seat);
    }
    containerDiv.append(this.wagonDiv);
    this.element = containerDiv;
  }
}
