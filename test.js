setTimeout(() => {
  console.log("Time Up!");
  clearInterval(int);
}, 3000);

const int = setInterval(() => {
  console.log("Time Running...");
}, 1000);

console.log("dirname...", __dirname);
console.log("filename...", __filename);
