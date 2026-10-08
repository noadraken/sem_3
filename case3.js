const studentName = "Siti";
const averageScore = 86;
const attendance = 92;
const familyIncome = 4000000;
const organizationMember = true;

const basicRequirements = averageScore >= 80 && attendance >= 90? "Passed" : "Failed";

const category = basicRequirements === "Passed" && familyIncome <= 3000000 && organizationMember ? "Category A" : basicRequirements === "Passed" && familyIncome <= 5000000 && organizationMember ? "Category B" : "Not Eligible";

const output = `
Student: ${studentName}
Average Score: ${averageScore}
Attendance: ${attendance}
Family Income: ${familyIncome}
Organization Member: ${organizationMember ? "Yes" : "No"}

Basic Requirements: ${basicRequirements}
Scholarship Category: ${category}
`.trim();

console.log(output);
