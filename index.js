// all of the requires
const Employee = require("./lib/Employee");
const Intern = require("./lib/Intern.js");
const Engineer = require("./lib/Engineer.js");
const Manager = require("./lib/Manager.js");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

// empty array to store the created employees
let createdEmployees = [];

// inquirer prompt for manager info
inquirer
	.prompt([
		{
			message: "What is the name of the manager?",
			type: "input",
			name: "name",
		},
		{
			message: "What is the managers employee Id?",
			type: "input",
			name: "id",
		},
		{
			message: "What is the managers email?",
			type: "input",
			name: "email",
		},
		{
			message: "What is the managers office number?",
			type: "input",
			name: "officeNumber",
		},
	])
	// takes the stuff from the questions, creates a new manager with the info
	.then((manager) => {
		let newManager = new Manager(
			manager.name,
			manager.id,
			manager.email,
			manager.officeNumber
		);
		// then pushes the new manager to the empty array
		createdEmployees.push(newManager);
	});

// also need a sample of the HTML doc created in dist folder
