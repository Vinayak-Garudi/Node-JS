const data = require("./data");
const os = require("os");
const fs = require("fs");

console.log("data... ", data.people + " " + data.ages);

console.log("os...", os.platform(), os.homedir());

// reading files
fs.readFile("./docs/blog1.txt", (err, data) => {
  if (err) {
    console.log(err);
  }
  console.log(data.toString());
});

console.log("after read file...");

// writing files
fs.writeFile("./docs/blog1.txt", "hello again blog 1", () => {
  console.log("file has been written");
});

fs.writeFile("./docs/blog2.txt", "hello blog 2", () => {
  console.log("new file has been written");
});

// directories
if (!fs.existsSync("./assets")) {
  fs.mkdir("./assets", (err) => {
    if (err) {
      console.log(err);
    }
    console.log("folder created");
  });
} else {
  fs.rmdir("./assets", (err) => {
    if (err) {
      console.log(err);
    }
    console.log("folder removed");
  });
}

// delete and create files
if (fs.existsSync("./docs/tempFile.txt")) {
  fs.unlink("./docs/tempFile.txt", (err) => {
    if (err) {
      console.log(err);
    }
    console.log("file deleted");
  });
} else {
  fs.writeFile("./docs/tempFile.txt", "Temporary Content", (err) => {
    if (err) {
      console.log(err);
    }
    console.log("Temp file created");
  });
}

// streaming
const readStream = fs.createReadStream("./docs/blog3.txt", {
  encoding: "utf-8",
});
const writeStream = fs.createWriteStream("./docs/blog4.txt");
const writeStream2 = fs.createWriteStream("./docs/blog5.txt");

readStream.on("data", (chunk) => {
  console.log("NEW CHUNK");
  console.log(chunk);
  writeStream.write("\nNEW CHUNK\n");
  writeStream.write(chunk);
});


// piping
readStream.pipe(writeStream2)