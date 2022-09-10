// page for the rendering of the HTML
// contains manager at head, followed by engineer and interns
// all of these are in their own cards
// when email is clicked, should open in default mail app
// when github is clicked should open up persons github in a new tab

const path = require("path");
const fs = require("fs");

const templates = path.resolve(__dirname, "../templates");
const render = (data) => {
	return `
  <!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<link
			rel="stylesheet"
			href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css"
			integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx"
			crossorigin="anonymous"
		/>
		<title>Team</title>
	</head>
	<body>
		<h1>My Team</h1>
		<div class="card employee-card">
			<div class="card-header">
				<h2 class="card-title">{{ Manager.name }}</h2>
				<h3 class="card-title">
					<i class="fas fa-mug-hot mr-2"></i>{{ role }}
				</h3>
			</div>
			<div class="card-body">
				<ul class="list-group">
					<li class="list-group-item">ID: {{ Manager.id }}</li>
					<li class="list-group-item">
						Email: <a href="mailto:{{ Manager.email }}">{{ Manager.email }}</a>
					</li>
					<li class="list-group-item">
						Office number: {{ Manager.officeNumber }}
					</li>
				</ul>
			</div>
		</div>
		<div class="card employee-card">
			<div class="card-header">
				<h2 class="card-title">{{ engineer.name }}</h2>
				<h3 class="card-title">
					<i class="fas fa-glasses mr-2"></i>{{ engineer.getRole() }}
				</h3>
			</div>
			<div class="card-body">
				<ul class="list-group">
					<li class="list-group-item">ID: {{ engineer.id }}</li>
					<li class="list-group-item">
						Email: <a href="mailto:{{ engineer.email }}">{{ engineer.email }}</a>
					</li>
					<li class="list-group-item">
						GitHub:
						<a
							href="https://github.com/{{ engineer.github }}"
							target="_blank"
							>{{ engineer.github }}</a
						>
					</li>
				</ul>
			</div>
		</div>
		<div class="card employee-card">
			<div class="card-header">
				<h2 class="card-title">{{ intern.name }}</h2>
				<h3 class="card-title">
					<i class="fas fa-user-graduate mr-2"></i>{{ intern.getRole() }}
				</h3>
			</div>
			<div class="card-body">
				<ul class="list-group">
					<li class="list-group-item">ID: {{ intern.id }}</li>
					<li class="list-group-item">
						Email: <a href="mailto:{{ intern.email }}">{{ intern.email }}</a>
					</li>
					<li class="list-group-item">School: {{ intern.school }}</li>
				</ul>
			</div>
		</div>
	</body>
</html>
  `;
};
module.exports = render;
