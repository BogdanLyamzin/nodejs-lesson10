const request = require("supertest");
const express = require("express");

const userRouter = require("./user");

describe("Test Users endpoint", ()=> {

    const app = express();
    app.use("/users", userRouter);

    beforeAll(()=> app.listen(3000, ()=> console.log("Server start")));

    afterAll(()=> app.close());

    test("Test GET '/users' route", async ()=> {
        const response = await request(app).get("/users");

        expect(response.statusCode).toBe(200);
        expect(Array.isArray(response.body.data.result)).toBeTruthy();
        expect(response.body.data.result[0].name).toBeString();
    })

});