const Engineer = require("../lib/Engineer");

// testing github, getGithub(), getRole()
test("Can set github via constructor", () => {
	const github = "lafflin";
	const g = new Engineer("Max", 7, "test@gmail.com", github);
	expect(g.github).toBe(github);
});

test("Can get engineer's github via getGithub()", () => {
	const github = "lafflin";
	const h = new Engineer("Max", 7, "test@gmail.com", github);
	expect(h.getGithub()).toBe(github);
});

test("getRole() should return 'engineer'", () => {
	const d = new Engineer("Max", 7, "test@gmail.com", "lafflin");
	expect(d.getRole()).toBe("engineer");
});
