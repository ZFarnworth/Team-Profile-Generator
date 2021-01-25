const Employee = require("../lib/Employee");

test("Creates Employee Obj", () => {
  const employee = new Employee("Zfarnworth", "10", "example@gmail.com");

  expect(employee).toEqual(expect.any(Object));
});

test("Employee Params are being used properly", () => {
  const employee = new Employee("Zfarnworth", "10", "example@gmail.com");

  expect(employee.name).toBe("Zfarnworth");
  expect(employee.id).toBe("10");
  expect(employee.email).toBe("example@gmail.com");
});

test("Get employee Name", () => {
  const employee = new Employee("Zfarnworth", "10", "example@gmail.com");

  expect(employee.getName()).toEqual(
    expect.stringContaining(employee.name.toString())
  );
});

test("Get employee ID", () => {
  const employee = new Employee("Zfarnworth", "10", "example@gmail.com");

  expect(employee.getId()).toEqual(
    expect.stringContaining(employee.id.toString())
  );
});

test("Get employee email", () => {
  const employee = new Employee("Zfarnworth", "10", "example@gmail.com");

  expect(employee.getEmail()).toEqual(
    expect.stringContaining(employee.email.toString())
  );
});

test("Get employee role", () => {
  const employee = new Employee("Zfarnworth", "10", "example@gmail.com");

  expect(employee.getRole()).toBe("Employee");
});
