// k6_test.js
import http from "k6/http";
import { check, sleep } from "k6";

export let options = {
  stages: [
    { duration: "10s", target: 10 },  
    { duration: "30s", target: 50 },  
    { duration: "10s", target: 0 },   
  ],
};

export default function () {
  const res = http.post("http://localhost:3000/register", JSON.stringify({
    name: "TestUser",
    email: "testuser@example.com",
    password: "password123",
  }), { headers: { "Content-Type": "application/json" } });

  check(res, { "status is 201": (r) => r.status === 201 });
  sleep(1);
}
