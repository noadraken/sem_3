console.log("Level 1")

number = 5;

if (number > 0) {
    console.log("Positive");
} else if (number < 0) {
    console.log("Negative");
} else {
    console.log("Zero");
}

let number_1 = 0;

if (number_1 %2 === 0) {
    console.log("Even");
}else {
    console.log("Odd");
}
console.log("\n Level 2");
grade = 80;
if (grade >= 80) {
    console.log("A");
}else if (grade >= 70 && grade < 80) {
    console.log("B");
}else if (grade >=  60 && grade < 70) {
    console.log("C");
}else if (grade >= 50 && grade < 60) {
    console.log("D");
}else{
    console.log("E");
}

a = 10;
b = 20;

if (a > b) {
    console.log(`${a} is greater than ${b}`);
} else if (a < b) {
    console.log(`${a} is less than ${b}`);
} else {
    console.log("Both numbers are equal");
}

console.log("\n Level 3");
username = "admin";
password = "12345";

if (username === "admin" && password === "12345") { 
    console.log("Login successful");
} else {
    if (username !== "admin") {
        console.log("Invalid username");
    }else if (password !== "12345") {
        console.log("Invalid password");
    }
}

score = 60;
attendance = 75;

if (score >= 60 && attendance >= 75) {
    console.log("Passed");
}else {
    console.log("Failed");
}

console.log("\n Level 4");

hours = 8;
fees = 0;
if (hours < 2){
    console.log("Fees = Rp 5000");
}else{
    fees = 5000 + (hours - 1) * 3000;
    if (fees > 20000) {
        console.log("Fees = Rp 20000");
    }else{
        console.log(`Fees = Rp ${fees}`);
    } 
}

score = 60;
attendance = 75;
totalAssignments = 100;
completedAssignments = 70;


assignmentPercentage = (completedAssignments / totalAssignments) * 100;


if (score >= 60 && attendance >= 75 && assignmentPercentage >= 80) {
    console.log("Passed");
} else {
    console.log("Failed due to the following reason(s):");
    
    if (score < 60) {
        console.log(`- Score is below 60 (Current: ${score})`);
    }
    if (attendance < 75) {
        console.log(`- Attendance is below 75% (Current: ${attendance}%)`);
    }
    if (assignmentPercentage < 80) {
        console.log(`- Completed assignments are below 80% (Current: ${assignmentPercentage.toFixed(1)}%)`);
    }
}