const Manager = require("../lib/Manager.js");

// testing officeNumber, getRole()
test("Can set the office number via constructor", () => {
	const officeNumber = "024";
	const o = new Manager("Max", 7, "test@gmail.com", officeNumber);
	expect(o.officeNumber).toBe(officeNumber);
});

test("getRole() should return 'manager'", () => {
	const d = new Manager("Max", 7, "test@gmail.com", "UC Berkeley Extension");
	expect(d.getRole()).toBe("manager");
});
