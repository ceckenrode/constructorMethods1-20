function Tamagotchi() {
  this.hungry = false,
    this.sick = false,
    this.age = 0,

    this.feed = function() {
      if (this.hungry) {
        console.log("That was yummy!");
      } else {
        console.log("No thanks, I'm full.");
        this.hungry = true;
      }
    },

    this.sleep = function() {
      console.log("zzzzzzzzZZZZZZZZZ");
    },

    this.medicate = function() {
      if (this.sick) {
        console.log("I feel much better!");
        this.sick = false;
      } else {
        console.log("No thanks, I feel fine.");
        this.sick = true;
      }
    },

    this.increaseAge = function() {
      this.age += 1;
      console.log("Happy Birthday to me! I am " + this.age + " years old!");
    }
    
};

var cat = new Tamagotchi();
cat.meow = function() {
  console.log("Meow!");
}

cat.scratchThatChair = function() {
  console.log("Stop scratching that chair!!!");
}

var dog = new Tamagotchi();
dog.bark = function() {
  console.log("ruff ruff!");
}

dog.goOutside = function() {
  console.log("I own that tree now!");
}

cat.meow();
cat.scratchThatChair();
dog.bark();
dog.goOutside();
cat.increaseAge();
cat.medicate();
cat.medicate();
cat.sleep();
cat.feed();
cat.feed();
