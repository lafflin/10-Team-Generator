const Employee = require("../lib/Employee");

test("Can set name via constructor", () => {
	const name = "Max";
	const a = new Employee(name);
	expect(a.name).toBe(name);
});

test("Can set id via constructor", () => {
	const id = "7";
	const b = new Employee("Max", id);
	expect(b.id).toBe(id);
});

test("Can set email via constructor", () => {
	const email = "test@gmail.com";
	const c = new Employee("Max", 7, email);
	expect(c.email).toBe(email);
});

// add tests for getname, getId, getEmail, and getRole
