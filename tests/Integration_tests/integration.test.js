
const request = require('supertest');
const app = require('../../src/server');

let server;

beforeAll((done) => {
    const PORT = process.env.TEST_PORT || 4000; // Use a different port for tests
    server = app.listen(PORT, () => {
        done();
    });
});

afterAll((done) => {
    server.close(done);
});

test('should add user and retrieve from database', async () => {
    const user = { name: 'Bob', email: 'testAuto@gmail.com',password:'password66' };
    const registerResponse = await request(server).post('/register').send(user);
    expect(registerResponse.statusCode).toBe(201);
    
});
 test('should add user and retrieve from database', async () => {
    const user = { name: '', email: 'testAuto@gmail.com',password:'password66' };
    const registerResponse = await request(server).post('/register').send(user);
    expect(registerResponse.statusCode).toBe(400);})
