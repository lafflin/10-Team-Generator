// page for the rendering of the HTML
// contains manager at head, followed by engineer and interns
// all of these are in their own cards
// when email is clicked, should open in default mail app
// when github is clicked should open up persons github in a new tab

// const path = require("path");
// const fs = require("fs");

// const templates = path.resolve(__dirname, "../templates");
const renderTeam = (createdEmployees) => {
	const renderManager = (Manager) => {
		return `
<div class="card employee-card">
			<div class="card-header">
				<h2 class="card-title">${Manager.getName()}</h2>
				<h3 class="card-title">
					${Manager.getRole()}
				</h3>
			</div>
			<div class="card-body">
				<ul class="list-group">
					<li class="list-group-item">ID: ${Manager.getId()}</li>
					<li class="list-group-item">
						Email: <a href="mailto:${Manager.getEmail()}">${Manager.getEmail()}</a>
					</li>
					<li class="list-group-item">
						Office number: ${Manager.getOfficeNumber()}
					</li>
				</ul>
			</div>
		</div>
	`;
	};
	const renderEngineers = (Engineer) => {
		return `	
		<div class="card employee-card">
			<div class="card-header">
				<h2 class="card-title">${Engineer.getName()}</h2>
				<h3 class="card-title">
					${Engineer.getRole()}
				</h3>
			</div>
			<div class="card-body">
				<ul class="list-group">
					<li class="list-group-item">ID: ${Engineer.getId()}</li>
					<li class="list-group-item">
						Email: <a href="mailto:${Engineer.getEmail()}">${Engineer.getEmail()}</a>
					</li>
					<li class="list-group-item">
						GitHub:
						<a
							href="https://github.com/${Engineer.getGithub()}"
							target="_blank"
							>${Engineer.getGithub()}</a
						>
					</li>
				</ul>
			</div>`;
	};
	const renderInterns = (Intern) => {
		return `<div class="card employee-card">
			<div class="card-header">
				<h2 class="card-title">${Intern.getName()}</h2>
				<h3 class="card-title">
					${Intern.getRole()}
				</h3>
			</div>
			<div class="card-body">
				<ul class="list-group">
					<li class="list-group-item">ID: ${Intern.getId()}</li>
					<li class="list-group-item">
						Email: <a href="mailto:${Intern.getEmail()}">${Intern.getEmail()}</a>
					</li>
					<li class="list-group-item">School: ${Intern.getSchool()}</li>
				</ul>
			</div>
		</div>`;
	};

	const currentGeneration = [];

	currentGeneration.push(
		createdEmployees
			.filter((Employee) => Employee.getRole() === "Manager")
			.map((Manager) => renderManager(Manager))
	);
	currentGeneration.push(
		createdEmployees
			.filter((Employee) => Employee.getRole() === "Engineer")
			.map((Engineer) => renderEngineers(Engineer))
			.join("")
	);
	currentGeneration.push(
		createdEmployees
			.filter((Employee) => Employee.getRole() === "Intern")
			.map((Intern) => renderInterns(Intern))
			.join("")
	);

	return currentGeneration.join("");
};

module.exports = renderTeam;
