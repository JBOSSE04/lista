// TASK 1: Person Class
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.stomach = [];
    }

    eat(food) {
        if (this.stomach.length < 10) {
            this.stomach.push(food);
        }
    }

    poop() {
        this.stomach = [];
    }

    toString() {
        return `${this.name}, ${this.age}`;
    }
}

// Example: Person
function runPersonExample() {
    let person = new Person("Mary", 50);
    person.eat("Apple");
    person.eat("Banana");
    document.getElementById("output").innerText = `${person} ate ${person.stomach.join(", ")}`;
    person.poop();
    document.getElementById("output").innerText += `\nAfter pooping: ${person.stomach.length} items in the stomach.`;
}


// TASK 2: Car Class  1 gallons = 3,78541 L
class Car {
    constructor(model, milesPerGallon) {
        this.model = model;
        this.milesPerGallon = milesPerGallon;
        this.tank = 0;
        this.odometer = 0;
    }

    fill(gallons) {
        this.tank += gallons;
    }

    drive(distance) {
        let maxDistance = this.tank * this.milesPerGallon;
        if (distance <= maxDistance) {
            this.odometer += distance;
            this.tank -= distance / this.milesPerGallon;
        } else {
            this.odometer += maxDistance;
            this.tank = 0;
            return `I ran out of fuel at ${this.odometer} miles!`;
        }
    }
}

// Example: Car
function runCarExample() {
    let car = new Car("Toyota", 25);
    car.fill(2); // Adds 2 gallons
    document.getElementById("output").innerText = `Car tank: ${car.tank} gallons, Odometer: ${car.odometer} miles.`;
    let message = car.drive(40); // Tries to drive 40 miles
    document.getElementById("output").innerText += `\n${message ? message : "Car drove successfully!"}`;
}


// TASK 3: Lambdasian Class
class Lambdasian {
    constructor(details) {
        this.name = details.name;
        this.age = details.age;
        this.location = details.location;
    }

    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}.`;
    }
}

// Example: Lambdasian
function runLambdasianExample() {
    let l1 = new Lambdasian({name: "Alex", age: 25, location: "NYC"});
    document.getElementById("output").innerText = l1.speak();
}


// TASK 4: Instructor Class
class Instructor extends Lambdasian {
    constructor(details) {
        super(details);
        this.specialty = details.specialty;
        this.favLanguage = details.favLanguage;
        this.catchPhrase = details.catchPhrase;
    }

    demo(subject) {
        return `Today we are learning about ${subject}`;
    }

    grade(student, subject) {
        return `${student.name} receives a perfect score on ${subject}`;
    }

    // Stretch Task: Method to randomly change a student's grade
    adjustGrade(student) {
        let points = Math.floor(Math.random() * 10) - 5; // Adjust grade by ±5 points randomly
        student.grade += points;
        return `${student.name}'s grade is adjusted by ${points} points. New grade: ${student.grade}`;
    }
}

// Example: Instructor
function runInstructorExample() {
    let instructor = new Instructor({
        name: "Alex", 
        age: 30, 
        location: "San Francisco", 
        specialty: "redux", 
        favLanguage: "Python", 
        catchPhrase: "Don't forget the homies."
    });
    document.getElementById("output").innerText = instructor.demo("JavaScript");
}


// TASK 5: Student Class
class Student extends Lambdasian {
    constructor(details) {
        super(details);
        this.previousBackground = details.previousBackground;
        this.className = details.className;
        this.favSubjects = details.favSubjects;
        this.grade = 70; // Stretch Task: Initialize grade to a value between 1-100
    }

    listSubjects() {
        return `Loving ${this.favSubjects.join(", ")}!`;
    }

    PRAssignment(subject) {
        return `${this.name} has submitted a PR for ${subject}`;
    }

    sprintChallenge(subject) {
        return `${this.name} has begun sprint challenge on ${subject}`;
    }

    // Method to check if student is ready to graduate
    graduate() {
        if (this.grade > 70) {
            return `${this.name} is ready to graduate!`;
        } else {
            return `${this.name} needs more grading to graduate!`;
        }
    }
}

// Example: Student
function runStudentExample() {
    let student = new Student({
        name: "Bob", 
        age: 24, 
        location: "LA", 
        previousBackground: "Marketing", 
        className: "CS132", 
        favSubjects: ["HTML", "CSS", "JavaScript"]
    });
    document.getElementById("output").innerText = student.listSubjects();
    document.getElementById("output").innerText += `\n${student.PRAssignment("JavaScript")}`;
}


// TASK 6: Project Manager Class
class ProjectManager extends Instructor {
    constructor(details) {
        super(details);
        this.gradClassName = details.gradClassName;
        this.favInstructor = details.favInstructor;
    }

    standUp(channel) {
        return `${this.name} announces to ${channel}, @channel standy times!`;
    }

    debugsCode(student, subject) {
        return `${this.name} debugs ${student.name}'s code on ${subject}`;
    }
}

// Example: Project Manager
function runProjectManagerExample() {
    let pm = new ProjectManager({
        name: "Sean", 
        age: 35, 
        location: "LA", 
        specialty: "React", 
        favLanguage: "JavaScript", 
        catchPhrase: "Keep learning!", 
        gradClassName: "CS1", 
        favInstructor: "Alex"
    });
    document.getElementById("output").innerText = pm.standUp("web_pt11");
}
