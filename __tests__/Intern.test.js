const Intern = require("../lib/Intern.js");

// testing school, getSchool(), getRole()
test("Can set school via constructor", () => {
	const school = "UC Berkeley Extension";
	const s = new Intern("Max", 7, "test@gmail.com", school);
	expect(s.school).toBe(school);
});

test("Can get intern's school via getSchool()", () => {
	const school = "UC Berkeley Extension";
	const t = new Intern("Max", 7, "test@gmail.com", school);
	expect(t.getSchool()).toBe(school);
});

test("getRole() should return 'intern'", () => {
	const d = new Intern("Max", 7, "test@gmail.com", "UC Berkeley Extension");
	expect(d.getRole()).toBe("intern");
});
