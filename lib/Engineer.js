const Employee = require("./Employee.js");

class Engineer extends Employee {
	constructor(name, id, email, github) {
		// super to reduce the amount of code I have to rewrite
		super(name, id, email);
		this.github = github;
	}
	getName() {
		return this.name;
	}
	getId() {
		return this.id;
	}
	getEmail() {
		return this.email;
	}
	getGithub() {
		return this.github;
	}
	getRole() {
		return "Engineer";
	}
}
module.exports = Engineer;
