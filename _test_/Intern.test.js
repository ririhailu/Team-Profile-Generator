const Employee = require('../lib/Employee');
const Intern = require('../lib/Intern');


test('creates an Intern object', () => {
    const intern = new Intern('Intern1');

    expect(typeof(intern)).toBe('object');
});

test("gets Intern's school", () => {
    const intern = new Intern('Intern1', '2', 'email', 'school1');

    expect(intern.school).toBe('school1');
});