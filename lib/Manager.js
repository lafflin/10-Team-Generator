const Employee = require("./Employee");

class Manager extends Employee {
	constructor(name, id, email, officeNumber) {
		// super to reduce the amount of code I have to rewrite
		super(name, id, email);
		this.officeNumber = officeNumber;
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
	getRole() {
		return "manager";
	}
}
module.exports = Manager;
