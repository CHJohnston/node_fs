/*- Inside of updateFile.js
  - Require the fs module
  - Using the appendFile() function, append some text to the end of your HelloWorld.txt
  - Run node update.js */

const fs = require("fs");

let more_text =
  "Welcome to Node.js! Let's work with the Node.js file system module ";

fs.appendFile("HelloWorld.txt", more_text, (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("Successfully appended to file.");
});
