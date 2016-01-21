function Pet(noise, sleepy) {
  this.noise = noise;
  this.sleepy = sleepy;
  this.makeNoise = function() {
    if (this.sleepy === false) {
      console.log(this.noise);
    }
  }
}

var dog = new Pet("woooofff!", false);
var cat = new Pet("meowwww!!!", false);

dog.makeNoise();
cat.makeNoise();
