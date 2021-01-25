const Manager = require("../lib/Manager");

test("Creates Manager Obj", () => {
  const manager = new Manager("Dave", "54", "example@manager.com", "2");

  expect(manager).toEqual(expect.any(Object));
});

test("Manager params are bing used properly", () => {
  const manager = new Manager("Dave", "54", "example@manager.com", "2");

  expect(manager.name).toBe("Dave");
  expect(manager.id).toBe("54");
  expect(manager.email).toBe("example@manager.com");
  expect(manager.officeNumber).toBe("2");
});

test("Get manager role via getRole()", () => {
  const manager = new Manager("Dave", "54", "example@manager.com", "2");

  expect(manager.getRole()).toBe("Manager");
});
