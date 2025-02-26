const fs = require("fs");
const crypto = require("crypto");

const start = Date.now();
process.env.UV_THREADPOOL_SIZE = 3;

setTimeout(() => console.log("Timer 1 finished"), 0);

setImmediate(() => console.log("Immediate 1 finished"));

fs.readFile("text-file.txt", () => {
  console.log("I/O finished");
  console.log("-------------------------");

  setTimeout(() => console.log("Timer 2 finished"), 0);
  setTimeout(() => console.log("Timer 3 finished"), 3000);
  setImmediate(() => console.log("Immediate 2 finished"));

  process.nextTick(() => console.log("Process.nextTick"));

  //sync version of crypto which results in blocking code
  /*
  crypto.pbkdf2Sync("password", "salt", 10000, 1024, "sha512");
  console.log(Date.now() - start, "Password encrypyted");

  crypto.pbkdf2Sync("password", "salt", 10000, 1024, "sha512");
  console.log(Date.now() - start, "Password encrypyted");

  crypto.pbkdf2Sync("password", "salt", 10000, 1024, "sha512");
  console.log(Date.now() - start, "Password encrypyted");

  crypto.pbkdf2Sync("password", "salt", 10000, 1024, "sha512");
  console.log(Date.now() - start, "Password encrypyted");

  crypto.pbkdf2Sync("password", "salt", 10000, 1024, "sha512");
  console.log(Date.now() - start, "Password encrypyted");
*/

  //Async version
  crypto.pbkdf2("password", "salt", 10000, 1024, "sha512", () => {
    console.log(Date.now() - start, "Password encrypyted");
  });
  crypto.pbkdf2("password", "salt", 10000, 1024, "sha512", () => {
    console.log(Date.now() - start, "Password encrypyted");
  });
  crypto.pbkdf2("password", "salt", 10000, 1024, "sha512", () => {
    console.log(Date.now() - start, "Password encrypyted");
  });
  crypto.pbkdf2("password", "salt", 10000, 1024, "sha512", () => {
    console.log(Date.now() - start, "Password encrypyted");
  });
});

console.log("Hello from the top level code");
