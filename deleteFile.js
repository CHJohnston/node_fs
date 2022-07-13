/*- Inside of deleteFile.js
  - Require the fs module
  - Implement the fs.unlink()
  - Run node deleteFile.js*/

const fs = require("fs");

fs.unlink("delete.txt", (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("Successfully deleted file.");
});
