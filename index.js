// all of the requires
const Employee = require("./lib/Employee");
const Intern = require("./lib/Intern.js");
const Engineer = require("./lib/Engineer.js");
const Manager = require("./lib/Manager.js");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const render = require("./lib/htmlRenderer");

// empty array to store the created employees
let createdEmployees = [];

// function to write the html file
function writeHTML(fileName, data) {
	fs.writeFile(fileName, data, (err) => {
		console.error(err);
	});
}

// func for after the afterManager() func, to ask if the user would like to continue adding team members
const continueAdding = () => {
	inquirer
		.prompt([
			{
				message: "Would you like to continue adding team members?",
				type: "list",
				choices: ["yes", "no"],
				name: "continue",
			},
		])
		.then((answer) => {
			if (answer.continue === "yes") {
				afterManager();
			} else {
				console.log("finished!");
				// make createdEmployees the data
				// data = createdEmployees;
				html = render(createdEmployees);
				// then need to use the created HTML file and input the data to make the code
				// console.log(data);
				// then call this function with the new HTML file
				writeHTML("exampleHTML.html", html);
			}
		});
};

// func for after the manager portion is completed
const afterManager = () => {
	inquirer
		.prompt([
			{
				message: "Would you like to add an Engineer or an Intern?",
				type: "list",
				choices: ["Engineer", "Intern"],
				name: "engOrInt",
			},
		])
		.then((answer) => {
			// inquirer prompts for engineer
			if (answer.engOrInt === "Engineer") {
				inquirer
					.prompt([
						{
							message: "What is the name of the engineer?",
							type: "input",
							name: "name",
						},
						{
							message: "What is the engineer's employee Id?",
							type: "input",
							name: "id",
						},
						{
							message: "What is the engineer's email?",
							type: "input",
							name: "email",
						},
						{
							message: "What is the engineer's github?",
							type: "input",
							name: "github",
						},
					])
					// functionality for creating and adding the engineer to the employee array
					.then((engineer) => {
						let newEngineer = new Engineer(
							engineer.name,
							engineer.id,
							engineer.email,
							engineer.github
						);
						createdEmployees.push(newEngineer);
						console.log(createdEmployees);
						continueAdding();
					});
				// inquirer prompts for intern
			} else if (answer.engOrInt === "Intern") {
				inquirer
					.prompt([
						{
							message: "What is the name of the intern?",
							type: "input",
							name: "name",
						},
						{
							message: "What is the intern's employee Id?",
							type: "input",
							name: "id",
						},
						{
							message: "What is the intern's email?",
							type: "input",
							name: "email",
						},
						{
							message: "Where did the intern go to school?",
							type: "input",
							name: "school",
						},
					])
					// functionality for creating and adding the intern to the employee array
					.then((intern) => {
						let newIntern = new Intern(
							intern.name,
							intern.id,
							intern.email,
							intern.school
						);
						createdEmployees.push(newIntern);
						console.log(createdEmployees);
						continueAdding();
					});
			}
		});
};
// inquirer prompt for manager info
inquirer
	.prompt([
		{
			message: "What is the name of the manager?",
			type: "input",
			name: "name",
		},
		{
			message: "What is the manager's employee Id?",
			type: "input",
			name: "id",
		},
		{
			message: "What is the manager's email?",
			type: "input",
			name: "email",
		},
		{
			message: "What is the manager's office number?",
			type: "input",
			name: "officeNumber",
		},
	])
	// functionality for creating and adding the manager to the employee array
	.then((manager) => {
		let newManager = new Manager(
			manager.name,
			manager.id,
			manager.email,
			manager.officeNumber
		);
		createdEmployees.push(newManager);
		// call the function so that after the manager is made, we go to add more people to the team
		afterManager();
	});

// also need a sample of the HTML doc created in dist folder
