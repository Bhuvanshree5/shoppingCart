// tests/security/security.test.js
const request = require('supertest');
const app = require('../../src/server');

test('should not allow SQL injection', async () => {
    const response = await request(app)
        .post('/register')
        .send({ name: "' OR 1=1 --", age: 30 });

    expect(response.status).toBe(400);
});
