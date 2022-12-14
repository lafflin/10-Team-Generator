# Module 10 Challenge

## Table of Contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [User Story](#user-story)
  - [Acceptance Criteria](#acceptance-criteria)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)
  ​

## Overview

This weeks challenge was create a command line team profile generator
​

### The challenge

Create a command line team profile generator using Nodejs for inquirer and tests.

## User Story

```md
AS A manager
I WANT to generate a webpage that displays my team's basic info
SO THAT I have quick access to their emails and GitHub profiles
```

## Acceptance Criteria

```md
GIVEN a command-line application that accepts user input
WHEN I am prompted for my team members and their information
THEN an HTML file is generated that displays a nicely formatted team roster based on user input
WHEN I click on an email address in the HTML
THEN my default email program opens and populates the TO field of the email with the address
WHEN I click on the GitHub username
THEN that GitHub profile opens in a new tab
WHEN I start the application
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
WHEN I enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated
```

### Links

- Solution URL: [Solution](https://github.com/lafflin/10-Team-Generator)
- Demo: [YouTube](https://youtu.be/v00h2SakNoI)
  ​

## My process

1. The first thing I did was get my file structure set up
2. Following this I created all of my classes. Afterwards I set up all of the tests for the classes.
3. Once all of this was done, I worked on getting inquirer working.
4. After this, I finished by getting the HTML rendering to work properly

### Built with

- NodeJS
- Inquirer
- Jest

### What I learned

- That I can create command line apps using node that can generate HTML code

### Continued development

- More work with Javascript, more specifically jest

### Useful resources

- Google, google, google, and google.

## Author

- Linkedin - [Max McLaughlin](https://www.linkedin.com/in/max-mcla/)

## Acknowledgments

- StackOverflow, TA's, and LA's- As helpful as always
