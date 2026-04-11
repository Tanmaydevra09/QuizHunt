const quizData = [
  {
    question: "Who invented Java Programming?",
    a: "Guido van Rossum",
    b: "James Gosling",
    c: "Dennis Ritchie",
    d: "Bjarne Stroustrup",
    correct: "b",
    explanation: "The correct answer is option b. This is a fundamental concept."
  },
  {
    question: "Which statement is true about Java?",
    a: "Java is a sequence-dependent programming language",
    b: "Java is a code dependent programming language",
    c: "Java is a platform-dependent programming language",
    d: "Java is a platform-independent programming language",
    correct: "d",
    explanation: "The correct answer is option d. This is a fundamental concept."
  },
  {
    question:
      "Which component is used to compile, debug and execute the java programs?",
    a: "JRE",
    b: "JIT",
    c: "JDK",
    d: "JVM",
    correct: "c",
    explanation: "The correct answer is option c. This is a fundamental concept."
  },
  {
    question: "Which of these cannot be used for a variable name in Java?",
    a: "identifier & keyword",
    b: "identifier",
    c: "keyword",
    d: "none of the mentioned",
    correct: "c",
    explanation: "The correct answer is option c. This is a fundamental concept."
  },
  {
    question: "Which of the following is not an OOPS concept in Java?",
    a: "Compilation",
    b: "Inheritance",
    c: "Polymorphism",
    d: "Encapsulation",
    correct: "a",
    explanation: "The correct answer is option a. This is a fundamental concept."
  },
  {
    question: "What is not the use of “this” keyword in Java?",
    a: "Referring to the instance variable when a local variable has the same name",
    b: "Passing itself to the method of the same class",
    c: "Passing itself to another method",
    d: "Calling another constructor in constructor chaining",
    correct: "b",
    explanation: "The correct answer is option b. This is a fundamental concept."
  },
  {
    question:
      "Which of the following is a type of polymorphism in Java Programming?",
    a: "Multiple polymorphism",
    b: "Compile time polymorphism",
    c: "Multilevel polymorphism",
    d: "Execution time polymorphism",
    correct: "b",
    explanation: "The correct answer is option b. This is a fundamental concept."
  },
  {
    question: "WWhat is the extension of compiled java classes?",
    a: ".txt",
    b: ".js",
    c: ".class",
    d: ".java",
    correct: "c",
    explanation: "The correct answer is option c. This is a fundamental concept."
  },
  {
    question: "Which exception is thrown when java is out of memory?",
    a: "MemoryError",
    b: "OutOfMemoryError",
    c: "MemoryOutOfBoundsException",
    d: "MemoryFullException",
    correct: "b",
    explanation: "The correct answer is option b. This is a fundamental concept."
  },
  {
    question: "What is the size of float and double in java?",
    a: "32 and 64",
    b: "32 and 32",
    c: "64 and 64",
    d: "64 and 32",
    correct: "a",
    explanation: "The correct answer is option a. This is a fundamental concept."
  },
  {
    question: "What is Java?",
    a: "A type of coffee",
    b: "A programming language",
    c: "A type of car",
    d: "A brand of computer",
    correct: "b",
    explanation: "The correct answer is option b. This is a fundamental concept."
  },
  {
    question: "Who developed Java?",
    a: "Steve Jobs",
    b: "Bill Gates",
    c: "James Gosling",
    d: "Mark Zuckerberg",
    correct: "c",
    explanation: "The correct answer is option c. This is a fundamental concept."
  },
  {
    question: "What year was Java first released?",
    a: "1991",
    b: "1995",
    c: "1999",
    d: "2003",
    correct: "b",
    explanation: "The correct answer is option b. This is a fundamental concept."
  },
  {
    question: "What is the main feature of Java?",
    a: "Platform independence",
    b: "Compatibility with Microsoft Windows",
    c: "Speed",
    d: "Ease of use",
    correct: "a",
    explanation: "The correct answer is option a. This is a fundamental concept."
  },
  {
    question: "What is the name of the Java virtual machine?",
    a: "JVM",
    b: "JRE",
    c: "JDK",
    d: "JSE",
    correct: "a",
    explanation: "The correct answer is option a. This is a fundamental concept."
  },
  {
    question: "What does JDK stand for?",
    a: "Java Development Kernel",
    b: "Java Development Kit",
    c: "Java Development Language",
    d: "Java Development System",
    correct: "b",
    explanation: "The correct answer is option b. This is a fundamental concept."
  },
  {
    question: "What does JRE stand for?",
    a: "Java Runtime Environment",
    b: "Java Running Engine",
    c: "Java Runtime Engine",
    d: "Java Resource Editor",
    correct: "a",
    explanation: "The correct answer is option a. This is a fundamental concept."
  },
  {
    question: "What does IDE stand for?",
    a: "Integrated Development Environment",
    b: "Integrated Developer's Edition",
    c: "Interactive Development Environment",
    d: "Interactive Developer's Edition",
    correct: "a",
    explanation: "The correct answer is option a. This is a fundamental concept."
  },
  {
    question: "What is the name of the most popular Java IDE?",
    a: "Eclipse",
    b: "IntelliJ IDEA",
    c: "NetBeans",
    d: "Visual Studio Code",
    correct: "a",
    explanation: "The correct answer is option a. This is a fundamental concept."
  },
  {
    question: "What is a package in Java?",
    a: "A group of classes and interfaces",
    b: "A file format",
    c: "A type of comment",
    d: "A type of variable",
    correct: "a",
    explanation: "The correct answer is option a. This is a fundamental concept."
  },
  {
    question: "What is a class in Java?",
    a: "A type of method",
    b: "A type of variable",
    c: "A group of related methods and variables",
    d: "A type of loop",
    correct: "c",
    explanation: "The correct answer is option c. This is a fundamental concept."
  },
  {
    question: "What is an interface in Java?",
    a: "A type of class",
    b: "A type of method",
    c: "A group of related classes and interfaces",
    d: "A type of comment",
    correct: "a",
    explanation: "The correct answer is option a. This is a fundamental concept."
  },
  {
    question: "What is an abstract class in Java?",
    a: "A type of class that cannot be instantiated",
    b: "A class that can only have one instance",
    c: "A class that can be instantiated but not extended",
    d: "A class that can be extended but not instantiated",
    correct: "a",
    explanation: "The correct answer is option a. This is a fundamental concept."
  },
  {
    question: "What is the difference between a method and a function in Java?",
    a: "There is no difference, they are the same thing.",
    b: "A function returns a value, while a method does not.",
    c: "A method is a member of a class, while a function is not.",
    d: "A method can only be used in one program, while a function can be used in multiple programs.",
    correct: "c",
    explanation: "The correct answer is option c. This is a fundamental concept."
  },
  {
    question: "What is the syntax for declaring a variable in Java?",
    a: "var myVar = 10;",
    b: "let myVar = 10;",
    c: "const myVar = 10;",
    d: "int myVar = 10;",
    correct: "d",
    explanation: "The correct answer is option d. This is a fundamental concept."
  },
  {
    question:
      "What is the difference between a primitive data type and an object in Java?",
    a: "There is no difference, they are the same thing.",
    b: "A primitive data type is a built-in data type, while an object is user-defined.",
    c: "A primitive data type cannot be used in calculations, while an object can.",
    d: "An object is a built-in data type, while a primitive data type is user-defined.",
    correct: "b",
    explanation: "The correct answer is option b. This is a fundamental concept."
  },
  {
    question: "What is the purpose of the final keyword in Java?",
    a: "To declare a constant variable.",
    b: "To declare a variable that cannot be changed.",
    c: "To declare a variable that is only accessible within its class.",
    d: "To declare a variable that is automatically initialized to a default value.",
    correct: "b",
    explanation: "The correct answer is option b. This is a fundamental concept."
  },
  {
    question: "What is a constructor in Java?",
    a: "A method that is used to create an instance of a class.",
    b: "A method that is used to destroy an instance of a class.",
    c: "A method that is used to initialize the static variables of a class.",
    d: "A method that is used to declare the variables of a class.",
    correct: "a",
    explanation: "The correct answer is option a. This is a fundamental concept."
  },
  {
    question: "What is the difference between a class and an object in Java?",
    a: "There is no difference, they are the same thing.",
    b: "A class is a blueprint for creating objects, while an object is an instance of a class.",
    c: "A class can be used to declare variables, while an object cannot.",
    d: "A class is a user-defined data type, while an object is a built-in data type.",
    correct: "b",
    explanation: "The correct answer is option b. This is a fundamental concept."
  },
  {
    question: "What is the purpose of the static keyword in Java?",
    a: "To declare a variable that is automatically initialized to a default value.",
    b: "To declare a variable that can only be accessed within its class.",
    c: "To declare a variable that cannot be changed after initialization.",
    d: "To declare a variable that is shared by all instances of a class.",
    correct: "d",
    explanation: "The correct answer is option d. This is a fundamental concept."
  },
  {
    question: "What is the purpose of the break statement in a loop in Java?",
    a: "To exit the loop immediately.",
    b: "To skip the current iteration of the loop.",
    c: "To continue to the next iteration of the loop.",
    d: "To restart the loop from the beginning.",
    correct: "a",
    explanation: "The correct answer is option a. This is a fundamental concept."
  },
  {
    question: "What is a package in Java?",
    a: "A group of related classes and interfaces.",
    b: "A type of data structure used to store elements in a specific order.",
    c: "A keyword used to declare a variable that cannot be changed after initialization.",
    d: "A type of loop that is used to iterate over the elements of an array.",
    correct: "a",
    explanation: "The correct answer is option a. This is a fundamental concept."
  },
  {
    question: "What is the purpose of the this keyword in Java?",
    a: "To declare a new instance of a class.",
    b: "To refer to the current instance of a class.",
    c: "To declare a static variable.",
    d: "To declare a variable that cannot be changed after initialization.",
    correct: "b",
    explanation: "The correct answer is option b. This is a fundamental concept."
  },
  {
    question: "What is the purpose of the super keyword in Java?",
    a: "To refer to the current instance of a class.",
    b: "To refer to the parent class of a subclass.",
    c: "To declare a new instance of a class.",
    d: "To declare a static variable.",
    correct: "b",
    explanation: "The correct answer is option b. This is a fundamental concept."
  },
  {
    question: "What is the purpose of the try-catch block in Java?",
    a: "To declare a new instance of a class.",
    b: "To declare a variable that can only be accessed within its class.",
    c: "To handle exceptions that may occur during program execution.",
    d: "To declare a variable that cannot be changed after initialization.",
    correct: "c",
    explanation: "The correct answer is option c. This is a fundamental concept."
  },
  {
    question: "What is the purpose of the java.lang package in Java?",
    a: "To provide classes and interfaces for handling input and output operations.",
    b: "To provide classes and interfaces for mathematical operations.",
    c: "To provide fundamental classes and interfaces that are automatically imported.",
    d: "To provide classes and interfaces for networking operations.",
    correct: "c",
    explanation: "The correct answer is option c. This is a fundamental concept."
  },
  {
    question: "What is the difference between a class and an object in Java?",
    a: "There is no difference, they are the same thing.",
    b: "A class is a template for creating objects, while an object is an instance of a class.",
    c: "A class and an object are not related to each other in Java.",
    d: "An object is a template for creating classes, while a class is an instance of an object.",
    correct: "b",
    explanation: "The correct answer is option b. This is a fundamental concept."
  },
  {
    question: "What is polymorphism in Java?",
    a: "The ability of a subclass to inherit properties from its parent class.",
    b: "The ability to create objects from a class.",
    c: "The ability of an object to take on many forms.",
    d: "The ability to access methods and properties of an object.",
    correct: "c",
    explanation: "The correct answer is option c. This is a fundamental concept."
  },
  {
    question: "What is inheritance in Java?",
    a: "The ability of a subclass to inherit properties from its parent class.",
    b: "The ability to create objects from a class.",
    c: "The ability of an object to take on many forms.",
    d: "The ability to access methods and properties of an object.",
    correct: "a",
    explanation: "The correct answer is option a. This is a fundamental concept."
  },
  {
    question: "What is encapsulation in Java?",
    a: "The ability of a subclass to inherit properties from its parent class.",
    b: "The ability to create objects from a class.",
    c: "The ability of an object to take on many forms.",
    d: "Hiding the implementation details and exposing only the necessary methods.",
    correct: "d",
    explanation: "The correct answer is option d. This is a fundamental concept."
  },
  {
    question: "What is the purpose of the instanceof operator in Java?",
    a: "To create a new instance of a class.",
    b: "To compare two objects to see if they are equal.",
    c: "To determine if an object is an instance of a specific class or interface.",
    d: "To declare a variable that cannot be changed after initialization.",
    correct: "c",
    explanation: "The correct answer is option c. This is a fundamental concept."
  },
  {
    question: "What is the purpose of the break keyword in Java?",
    a: "To exit a loop or switch statement.",
    b: "To continue to the next iteration of a loop.",
    c: "To create a new instance of a class.",
    d: "To declare a variable that cannot be changed after initialization.",
    correct: "a",
    explanation: "The correct answer is option a. This is a fundamental concept."
  },
  {
    question: "What is the purpose of the continue keyword in Java?",
    a: "To exit a loop or switch statement.",
    b: "To continue to the next iteration of a loop.",
    c: "To create a new instance of a class.",
    d: "To declare a variable that cannot be changed after initialization.",
    correct: "b",
    explanation: "The correct answer is option b. This is a fundamental concept."
  },
  {
    question: "What is the purpose of the try-catch block in Java?",
    a: "To handle exceptions that may occur in a program.",
    b: "To define a block of code that can be executed asynchronously.",
    c: "To compare two objects to see if they are equal.",
    d: "To declare a variable that cannot be changed after initialization.",
    correct: "a",
    explanation: "The correct answer is option a. This is a fundamental concept."
    },
    {
    question: "What is an exception in Java?",
    a: "A runtime error that occurs during program execution.",
    b: "A syntax error that occurs during program compilation.",
    c: "A logical error that occurs during program execution.",
    d: "An error that occurs when a class is not found in the classpath.",
    correct: "a",
    explanation: "The correct answer is option a. This is a fundamental concept."
    },
    {
    question: "What is a checked exception in Java?",
    a: "An exception that must be caught or declared in a method signature.",
    b: "An exception that is not checked by the compiler.",
    c: "An exception that occurs during program execution.",
    d: "An exception that occurs during program compilation.",
    correct: "a",
    explanation: "The correct answer is option a. This is a fundamental concept."
    },
    {
    question: "What is an unchecked exception in Java?",
    a: "An exception that is not checked by the compiler.",
    b: "An exception that must be caught or declared in a method signature.",
    c: "An exception that occurs during program execution.",
    d: "An exception that occurs during program compilation.",
    correct: "a",
    explanation: "The correct answer is option a. This is a fundamental concept."
    },
    {
    question: "What is the purpose of the finally block in Java?",
    a: "To execute code that must be run regardless of whether an exception occurs or not.",
    b: "To handle exceptions that may occur in a program.",
    c: "To declare a variable that cannot be changed after initialization.",
    d: "To exit a loop or switch statement.",
    correct: "a",
    explanation: "The correct answer is option a. This is a fundamental concept."
    },
    {
    question: "What is a static method in Java?",
    a: "A method that can be called on an instance of a class.",
    b: "A method that cannot be called on an instance of a class.",
    c: "A method that is called automatically when an instance of a class is created.",
    d: "A method that is used to create a new instance of a class.",
    correct: "b",
    explanation: "The correct answer is option b. This is a fundamental concept."
    },
  
];
