const Employee = require("../lib/Employee");

// testing name, id, email, and all employee functions
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

test("Can get employee name via getName()", () => {
	const name = "Max";
	const a = new Employee(name);
	expect(a.getName()).toBe(name);
});

test("Can get employee id via getId()", () => {
	const id = "7";
	const b = new Employee("Max", id);
	expect(b.getId()).toBe(id);
});

test("Can get employee email via getEmail()", () => {
	const email = "test@gmail.com";
	const c = new Employee("Max", 7, email);
	expect(c.getEmail()).toBe(email);
});

test("getRole() should return 'employee'", () => {
	const d = new Employee("Max", 7, "test@gmail.com");
	expect(d.getRole()).toBe("employee");
});
