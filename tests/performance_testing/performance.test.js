const { exec } = require("child_process");
const path = require("path");
const app = require('../../src/server'); // Import your server
let server;

beforeAll((done) => {
  const PORT = 3000;
  server = app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    done();
  });
});

afterAll((done) => {
  server.close(done);
});

test("K6 performance test for user registration", (done) => {
  const k6Script = path.join(__dirname, "k6_test.js");

  exec(`k6 run ${k6Script}`, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error: ${error.message}`);
      return done(error);
    }
    if (stderr) {
      console.warn(`Warning: ${stderr}`);
    }
    console.log(`K6 Output: ${stdout}`);
    done();
  });
}, 60000); // Set a higher timeout if needed
