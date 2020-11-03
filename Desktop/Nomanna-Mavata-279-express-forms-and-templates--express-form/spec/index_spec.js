var supertest = require('supertest')
const addNewVisitor = require("../src/app.js");
const newApp = require('../src/app')
const jasmine_supertest = require('jasmine-supertest') 



describe("addNewVisitor", () => {
  it("should have the addNewVisitor function called which adds new visitor data into table", () => {
    const visitor = { addNewVisitor };
    spyOn(visitor, "addNewVisitor");
    visitor.addNewVisitor(
      "Asanda Sne",
      "Lerato",
      22,
      " 2020-02-12",
      "11:30",
      "test2"
    );
    expect(visitor.addNewVisitor).toHaveBeenCalledWith(
      "Asanda Sne",
      "Lerato",
      22,
      " 2020-02-12",
      "11:30",
      "test2"
    );
  });
});


