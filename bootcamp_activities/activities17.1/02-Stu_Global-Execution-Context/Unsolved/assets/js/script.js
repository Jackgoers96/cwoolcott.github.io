// 1) Where is carNoise stored?
// GEC
const carNoise = 'Honk';
// 2) Where is goFast stored?
// GEC
const goFast = speed => {
  // 4) When is speed assigned a value? Where is this value stored?
  // Functional execution context of goFast

  // 5) Where is makeNoise stored?
  // Functional execution context of goFast
  const makeNoise = function (sound) {
    var sound2 = true;
    console.log(`My speed is at ${speed}, time to ${sound}`);
  }

  // 6) What happens in the following statement?
  // carNoise is assigned to functional execution context of makeNoise
  makeNoise(carNoise);
}

// 3) What happens in the following statement?
// Once confirmed, goFast is placed in the callback queue, 
if (confirm("Do you want to go fast?")) {
  goFast(80);
}
