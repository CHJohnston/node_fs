/*Inside of createFile.js: 
- Require the fs module
- Implement the fs.writeFile() function, creating a txt file called HelloWorld.txt, with Hello, World! inside
- ? Use the async version
- Run node createFile.js to create the file */
const fs = require("fs");

fs.writeFile("HelloWorld.txt", "Hello, World!", (err) => {
  if (err) {
    return console.log(err);
  }
  console.log("Successfully wrote file.");
});
