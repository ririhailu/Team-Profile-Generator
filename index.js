// Packages
const fs = require('fs');
const inquirer = require('inquirer');
const generateHTML = require('./src/generateHtmlPage');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');

// Class containing all questions
class Prompt{
    constructor() {
        this.teamArray = [];
    }

    /**
     * @returns the array of all Employee objects
     */

    getTeamArray() {
        return this.teamArray;
    }