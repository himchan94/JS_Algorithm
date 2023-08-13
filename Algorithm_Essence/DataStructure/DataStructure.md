# Data Structure

### What do they do?

- Data Structures are collections of values, the relationships among them, and the functions or operations that can be applied to the data

### Why so many?

- Different data structures excel at different things. Some are highly specialized, while others (like arrays) are more generally used.

### Why care?

- The more time you spend as a developer, the more likely you'll need to use one of these data structures.

# Class

### What is a class?

- blueprint for creating objects with pre-defined properties and methods.

### the syntax

```js
class Student {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

let firstStudent = new Student("Colt", "Steele");

let secondStudent = new Student("Blue", "Steele");
```

### Instance Methods

```js
class Student {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.tardies = 0;
    this.score = [];
  }
  fullName() {
    return `Your full name is ${this.firstName} ${this.lastName}`;
  }
  markLate() {
    this.tardies += 1;
    if (this.tardies >= 3) return "You are expelled!!";

    return `Your full name is ${this.firstName} ${this.lastName} has been late ${this.tardies}`;
  }
  addScore(score) {
    this.scores.push(score);
    return this.scores;
  }
  calculateAverage() {
    let sum = this.scores.reduce(function (a, b) {
      return a + b;
    });
    return sum / this.scores.length;
  }
}
```

### Class methods

```js
class Student {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  fullName() {
    return `Your full name is ${this.firstName} ${this.lastName}`;
  }
  static enrollStudents(...students) {
    // maybe send an email here
  }
}

let firstStudent = new Student("Colt", "Steele");

let secondStudent = new Student("Blue", "Steele");

Student.enrollStudents([firstStudent, secondStudent]);
```

- static 키워드를 사용하면 class에 종속된 메서드를 만들 수 있다.
  **_firstStudent.enrollStudents를 할 수 없다!!_**

### Recap

- Classes are blueprints that when created make objects known as instances
- Classes are created with the new keyword
- The constructor function is a special function that gets run when the class is instantiated
- Instance methods can be added to classes similar to methods in objects
- Class methods can be added using the static keyword
