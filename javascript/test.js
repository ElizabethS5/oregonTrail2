let wagon = new Wagon(2);
// Create three travelers
let henrietta = new Traveler("Henrietta");
let juan = new Traveler("Juan");
let maude = new Traveler("Maude");
console.log(
  `result: ${wagon.getAvailableSeatCount()} expected: 2 because the wagon starts with 2 seats`
);
wagon.join(henrietta);
console.log(`result: ${wagon.getAvailableSeatCount()} expected: 1`);
wagon.join(juan);
wagon.join(maude); // There isn't room for her!
console.log(`result: ${wagon.getAvailableSeatCount()} expected: 0`);
henrietta.hunt(); // get more food
juan.eat();
juan.eat(); // juan is now hungry (sick)
console.log(juan);
console.log(
  `result: ${wagon.shouldQuarantine()} expected: true since juan is sick`
);
console.log(`result: ${wagon.totalFood()} expected: 3`);
