import http from "http";
import supertest from "supertest";
import "whatwg-fetch";

import * as db from "./db";
import requestHandler from "./requestHandler";

let server: http.Server<
  typeof http.IncomingMessage,
  typeof http.ServerResponse
>;
let request: supertest.SuperTest<supertest.Test>;

beforeAll(async () => {
  server = http.createServer(requestHandler);
  server.listen();
  request = supertest(server);
  db.reset();
  return new Promise((resolve) => setTimeout(resolve, 500));
});

afterAll((done) => {
  server.close(done);
  db.shutdown();
});

test("Fetch conversations molly", async () => {
  console.log("hit");
  await request
    .post("/api/graphql")
    .send({
      query: `{conversation(username: "molly_member"){id}}`,
    })
    .expect(200)
    .then((res) => {
      console.log(res);
      expect(res).toBeDefined();
    });
});
