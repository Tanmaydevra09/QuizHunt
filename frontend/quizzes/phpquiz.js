const quizData = [
  {
    question: "What is PHP?",
    a: "A database language",
    b: "A server-side scripting language",
    c: "A markup language",
    d: "A client-side scripting language",
    correct: "b",
    explanation: "The correct answer is option b. This is a fundamental concept."
  },
  {
    question: "What does PHP stand for?",
    a: "Personal Home Page",
    b: "Preprocessed Hypertext Processor",
    c: "PHP: Hypertext Preprocessor",
    d: "Public Hosting Platform",
    correct: "c",
    explanation: "The correct answer is option c. This is a fundamental concept."
  },
  {
    question: "Which of the following is not a PHP framework?",
    a: "Laravel",
    b: "CodeIgniter",
    c: "Django",
    d: "CakePHP",
    correct: "c",
    explanation: "The correct answer is option c. This is a fundamental concept."
  },
  {
    question: "What is the default file extension for PHP files?",
    a: ".php",
    b: ".html",
    c: ".js",
    d: ".css",
    correct: "a",
    explanation: "The correct answer is option a. This is a fundamental concept."
  },
  {
    question: "Which of the following is a valid PHP variable name?",
    a: "$my_var",
    b: "my-var",
    c: "MyVar",
    d: "My.Var",
    correct: "a",
    explanation: "The correct answer is option a. This is a fundamental concept."
  },
  {
    question: "What is the purpose of the 'echo' statement in PHP?",
    a: "To output text to the console",
    b: "To output text to the browser",
    c: "To store text in a variable",
    d: "To include a file",
    correct: "b",
    explanation: "The correct answer is option b. This is a fundamental concept."
  },
  {
    question: "What is the purpose of the 'include' statement in PHP?",
    a: "To output text to the console",
    b: "To output text to the browser",
    c: "To store text in a variable",
    d: "To include a file",
    correct: "d",
    explanation: "The correct answer is option d. This is a fundamental concept."
  },
  {
    question: "What is the difference between '==' and '===' in PHP?",
    a: "'==' compares values and types, while '===' compares values only",
    b: "'==' compares values only, while '===' compares values and types",
    c: "Both '==' and '===' compare values and types",
    d: "Both '==' and '===' compare values only",
    correct: "b",
    explanation: "The correct answer is option b. This is a fundamental concept."
  },
  {
    question: "What is the correct way to start a PHP block?",
    a: "<?php",
    b: "<php>",
    c: "<?php>",
    d: "<php",
    correct: "a",
    explanation: "The correct answer is option a. This is a fundamental concept."
  },
  {
    question: "What is the purpose of the 'if' statement in PHP?",
    a: "To loop through a block of code",
    b: "To execute a block of code if a condition is true",
    c: "To execute a block of code multiple times",
    d: "To include a file",
    correct: "b",
    explanation: "The correct answer is option b. This is a fundamental concept."
  },
  {
    question: "What is the purpose of the 'for' loop in PHP?",
    a: "To execute a block of code multiple times",
    b: "To loop through a block of code",
    c: "To execute a block of code if a condition is true",
    d: "To include a file",
    correct: "a",
    explanation: "The correct answer is option a. This is a fundamental concept."
  },
  {
    question: "What is the purpose of the 'strlen' function in PHP?",
    a: "To return the length of a string",
    b: "To convert a string to uppercase",
    c: "To replace characters in a string",
    d: "To search for a string within another string",
    correct: "a",
    explanation: "The correct answer is option a. This is a fundamental concept."
  },
  {
    question: "What is the purpose of the 'explode' function in PHP?",
    a: "To split a string into an array using a specified delimiter",
    b: "To join elements of an array into a string using a specified delimiter",
    c: "To sort an array in ascending order",
    d: "To add an element to the end of an array",
    correct: "a",
    explanation: "The correct answer is option a. This is a fundamental concept."
  },
  {
    question: "What is the purpose of the 'array_push' function in PHP?",
    a: "To remove the last element of an array",
    b: "To add an element to the beginning of an array",
    c: "To add one or more elements to the end of an array",
    d: "To sort an array in ascending order",
    correct: "c",
    explanation: "The correct answer is option c. This is a fundamental concept."
  },
  {
    question: "What is the purpose of the 'array_pop' function in PHP?",
    a: "To remove the first element of an array",
    b: "To remove the last element of an array",
    c: "To add an element to the beginning of an array",
    d: "To sort an array in ascending order",
    correct: "b",
    explanation: "The correct answer is option b. This is a fundamental concept."
  },
  {
    question: "What is the purpose of the 'array_shift' function in PHP?",
    a: "To remove the first element of an array",
    b: "To remove the last element of an array",
    c: "To add an element to the beginning of an array",
    d: "To sort an array in ascending order",
    correct: "a",
    explanation: "The correct answer is option a. This is a fundamental concept."
  },
  {
    question: "What is the purpose of the 'array_unshift' function in PHP?",
    a: "To remove the first element of an array",
    b: "To remove the last element of an array",
    c: "To add an element to the beginning of an array",
    d: "To sort an array in ascending order",
    correct: "c",
    explanation: "The correct answer is option c. This is a fundamental concept."
  },
  {
    question: "What is the purpose of the 'array_reverse' function in PHP?",
    a: "To reverse the order of elements in an array",
    b: "To sort an array in ascending order",
    c: "To remove duplicates from an array",
    d: "To merge two or more arrays",
    correct: "a",
    explanation: "The correct answer is option a. This is a fundamental concept."
  },
  {
    question: "What is the purpose of the 'array_merge' function in PHP?",
    a: "To reverse the order of elements in an array",
    b: "To sort an array in ascending order",
    c: "To remove duplicates from an array",
    d: "To merge two or more arrays",
    correct: "d",
    explanation: "The correct answer is option d. This is a fundamental concept."
  },
  {
    question: "What is the purpose of the 'date' function in PHP?",
    a: "To format a date and time string",
    b: "To get the current date and time",
    c: "To compare two dates",
    d: "To extract a portion of a date",
    correct: "a",
    explanation: "The correct answer is option a. This is a fundamental concept."
  },
  {
    question: "What is the purpose of the 'echo' statement in PHP?",
    a: "To display text or variables on the screen",
    b: "To assign a value to a variable",
    c: "To create a function",
    d: "To conditionally execute code",
    correct: "a",
    explanation: "The correct answer is option a. This is a fundamental concept."
  },
  {
    question: "What is the purpose of the 'print' statement in PHP?",
    a: "To display text or variables on the screen",
    b: "To assign a value to a variable",
    c: "To create a function",
    d: "To conditionally execute code",
    correct: "a",
    explanation: "The correct answer is option a. This is a fundamental concept."
  },
  {
    question: "What is the purpose of the 'isset' function in PHP?",
    a: "To check if a variable is set and is not NULL",
    b: "To convert a string to an integer",
    c: "To get the length of a string",
    d: "To sort an array in ascending order",
    correct: "a",
    explanation: "The correct answer is option a. This is a fundamental concept."
  },
  {
    question: "What is the purpose of the 'empty' function in PHP?",
    a: "To check if a variable is empty",
    b: "To convert a string to an integer",
    c: "To get the length of a string",
    d: "To sort an array in ascending order",
    correct: "a",
    explanation: "The correct answer is option a. This is a fundamental concept."
  },
  {
    question: "What is the purpose of the 'array_key_exists' function in PHP?",
    a: "To check if a value exists in an array",
    b: "To check if a key exists in an array",
    c: "To sort an array in ascending order",
    d: "To get the length of an array",
    correct: "b",
    explanation: "The correct answer is option b. This is a fundamental concept."
  },
  {
    question: "What is the purpose of the 'array_search' function in PHP?",
    a: "To search for a value in an array and return its key",
    b: "To search for a key in an array and return its value",
    c: "To sort an array in ascending order",
    d: "To get the length of an array",
    correct: "a",
    explanation: "The correct answer is option a. This is a fundamental concept."
  },
  {
    question: "What is the purpose of the 'array_unique' function in PHP?",
    a: "To remove duplicates from an array",
    b: "To sort an array in ascending order",
    c: "To merge two or more arrays",
    d: "To extract a portion of an array",
    correct: "a",
    explanation: "The correct answer is option a. This is a fundamental concept."
  },
  {
    question: "What is the purpose of the 'array_slice' function in PHP?",
    a: "To extract a portion of an array",
    b: "To sort an array in ascending order",
    c: "To remove duplicates from an array",
    d: "To merge two or more arrays",
    correct: "a",
    explanation: "The correct answer is option a. This is a fundamental concept."
  },
  {
    question: "What is the purpose of the 'array_splice' function in PHP?",
    a: "To remove a portion of an array and replace it with other elements",
    b: "To sort an array in ascending order",
    c: "To remove duplicates from an array",
    d: "To merge two or more arrays",
    correct: "a",
    explanation: "The correct answer is option a. This is a fundamental concept."
  },
  {
    question: "What is the purpose of the 'array_fill' function in PHP?",
    a: "To fill an array with a specified value",
    b: "To sort an array in ascending order",
    c: "To remove duplicates from an array",
    d: "To merge two or more arrays",
    correct: "a",
    explanation: "The correct answer is option a. This is a fundamental concept."
  },
  {
    question: "What is the purpose of the 'array_push' function in PHP?",
    a: "To add one or more elements to the end of an array",
    b: "To remove the last element from an array",
    c: "To sort an array in ascending order",
    d: "To reverse the order of the elements in an array",
    correct: "a",
    explanation: "The correct answer is option a. This is a fundamental concept."
  },
  {
    question: "What is the purpose of the 'array_pop' function in PHP?",
    a: "To remove the last element from an array",
    b: "To add one or more elements to the end of an array",
    c: "To sort an array in ascending order",
    d: "To reverse the order of the elements in an array",
    correct: "a",
    explanation: "The correct answer is option a. This is a fundamental concept."
  },
  {
    question: "What is the purpose of the 'array_shift' function in PHP?",
    a: "To remove the first element from an array",
    b: "To add one or more elements to the beginning of an array",
    c: "To sort an array in ascending order",
    d: "To reverse the order of the elements in an array",
    correct: "a",
    explanation: "The correct answer is option a. This is a fundamental concept."
  },
  {
    question: "What is the purpose of the 'array_unshift' function in PHP?",
    a: "To add one or more elements to the beginning of an array",
    b: "To remove the first element from an array",
    c: "To sort an array in ascending order",
    d: "To reverse the order of the elements in an array",
    correct: "a",
    explanation: "The correct answer is option a. This is a fundamental concept."
  },
  {
    question: "What is the purpose of the 'count' function in PHP?",
    a: "To get the number of elements in an array or the length of a string",
    b: "To sort an array in ascending order",
    c: "To remove duplicates from an array",
    d: "To merge two or more arrays",
    correct: "a",
    explanation: "The correct answer is option a. This is a fundamental concept."
  },
  {
    question: "What is the purpose of the 'sort' function in PHP?",
    a: "To sort an array in ascending order",
    b: "To remove duplicates from an array",
    c: "To merge two or more arrays",
    d: "To get the number of elements in an array or the length of a string",
    correct: "a",
    explanation: "The correct answer is option a. This is a fundamental concept."
  },
  {
    question: "What is the purpose of the 'rsort' function in PHP?",
    a: "To sort an array in descending order",
    b: "To remove duplicates from an array",
    c: "To merge two or more arrays",
    d: "To get the number of elements in an array or the length of a string",
    correct: "a",
    explanation: "The correct answer is option a. This is a fundamental concept."
  },
  {
    question: "What is the purpose of the 'explode' function in PHP?",
    a: "To split a string into an array",
    b: "To join two or more strings into one string",
    c: "To replace a substring in a string with another substring",
    d: "To convert a string to an integer",
    correct: "a",
    explanation: "The correct answer is option a. This is a fundamental concept."
  },
  {
    question: "What is the purpose of the 'implode' function in PHP?",
    a: "To join two or more strings into one string",
    b: "To split a string into an array",
    c: "To replace a substring in a string with another substring",
    d: "To convert a string to an integer",
    correct: "a",
    explanation: "The correct answer is option a. This is a fundamental concept."
  },
  {
    question: "What is the PHP extension for a PHP file?",
    a: ".php",
    b: ".html",
    c: ".css",
    d: ".js",
    correct: "a",
    explanation: "The correct answer is option a. This is a fundamental concept."
  },
  {
    question: "What is the PHP keyword for defining a constant?",
    a: "define",
    b: "const",
    c: "var",
    d: "let",
    correct: "a",
    explanation: "The correct answer is option a. This is a fundamental concept."
  },
  {
    question: "What is the PHP keyword for creating a new object?",
    a: "new",
    b: "create",
    c: "make",
    d: "object",
    correct: "a",
    explanation: "The correct answer is option a. This is a fundamental concept."
  },
  {
    question: "What is the PHP keyword for calling a parent class constructor?",
    a: "parent::__construct",
    b: "super::__construct",
    c: "parent()",
    d: "super()",
    correct: "a",
    explanation: "The correct answer is option a. This is a fundamental concept."
  },
  {
    question: "What is the PHP keyword for inheriting a class?",
    a: "extends",
    b: "implements",
    c: "inherits",
    d: "inheritsFrom",
    correct: "a",
    explanation: "The correct answer is option a. This is a fundamental concept."
  },
  {
    question: "What is the PHP keyword for implementing an interface?",
    a: "implements",
    b: "extends",
    c: "inherits",
    d: "implementsInterface",
    correct: "a",
    explanation: "The correct answer is option a. This is a fundamental concept."
  },
  {
    question: "What is the PHP function for writing output to the browser?",
    a: "echo",
    b: "print",
    c: "write",
    d: "output",
    correct: "a",
    explanation: "The correct answer is option a. This is a fundamental concept."
  },
  {
    question: "What is the PHP function for reading input from the user?",
    a: "fgets",
    b: "fread",
    c: "input",
    d: "readline",
    correct: "d",
    explanation: "The correct answer is option d. This is a fundamental concept."
  },
  {
    question: "What is the PHP function for checking if a file exists?",
    a: "file_exists",
    b: "file",
    c: "fopen",
    d: "fread",
    correct: "a",
    explanation: "The correct answer is option a. This is a fundamental concept."
  },
  {
    question: "What is the PHP function for opening a file for writing?",
    a: "fopen",
    b: "file",
    c: "fwrite",
    d: "readfile",
    correct: "a",
    explanation: "The correct answer is option a. This is a fundamental concept."
  },
  {
    question: "Which function is used to parse a string into variables in PHP?",
    a: "parse_str",
    b: "explode",
    c: "str_split",
    d: "set_parse",
    correct: "a",
    explanation: "The correct answer is option a. This is a fundamental concept."
  },
  {
    question: "How can you get the client's IP address in PHP?",
    a: "$_SERVER['REMOTE_ADDR']",
    b: "$_SERVER['CLIENT_IP']",
    c: "getClientIP()",
    d: "request.clientIP",
    correct: "a",
    explanation: "The correct answer is option a. This is a fundamental concept."
  },
  {
    question: "What does the 'var_dump' function do in PHP?",
    a: "Declares a variable",
    b: "Displays structured information about a variable",
    c: "Dumps content to a file",
    d: "Validates a variable's type",
    correct: "b",
    explanation: "The correct answer is option b. This is a fundamental concept."
  },
  {
    question: "Which of the following is the correct way to create a function in PHP?",
    a: "function newFunction() {}",
    b: "create newFunction() {}",
    c: "new Function() {}",
    d: "def newFunction() {}",
    correct: "a",
    explanation: "The correct answer is option a. This is a fundamental concept."
  },
  {
    question: "Which superglobal variable holds information about headers, paths, and script locations in PHP?",
    a: "$_GET",
    b: "$_POST",
    c: "$_SERVER",
    d: "$_ENV",
    correct: "c",
    explanation: "The correct answer is option c. This is a fundamental concept."
  },
  {
    question: "Which of the following methods can be used to send data to a PHP script using a form?",
    a: "GET",
    b: "POST",
    c: "Both a and b",
    d: "None of the above",
    correct: "c",
    explanation: "The correct answer is option c. This is a fundamental concept."
  },
  {
    question: "In PHP, what will the following statement return: is_null('')?",
    a: "True",
    b: "False",
    c: "Error",
    d: "NULL",
    correct: "b",
    explanation: "The correct answer is option b. This is a fundamental concept."
  },
  {
    question: "What is the purpose of the 'foreach' loop in PHP?",
    a: "To execute a block of code a specified number of times",
    b: "To loop through a block of code as long as the specified condition is true",
    c: "To execute a block of code for each element in an array",
    d: "To filter elements from an array",
    correct: "c",
    explanation: "The correct answer is option c. This is a fundamental concept."
  },
  {
    question: "Which function is used to send a raw HTTP header in PHP?",
    a: "set_header()",
    b: "http_header()",
    c: "header()",
    d: "send_header()",
    correct: "c",
    explanation: "The correct answer is option c. This is a fundamental concept."
  },
  {
    question: "What is the correct way to end a PHP statement?",
    a: ".",
    b: ";",
    c: ":",
    d: "'",
    correct: "b",
    explanation: "The correct answer is option b. This is a fundamental concept."
  },
  {
    question: "What is the correct syntax to start a session in PHP?",
    a: "session_start();",
    b: "start_session();",
    c: "begin_session();",
    d: "init_session();",
    correct: "a",
    explanation: "The correct answer is option a. This is a fundamental concept."
  },
  {
    question: "Which function in PHP is used to generate a unique identifier?",
    a: "uniqid()",
    b: "uuid()",
    c: "generate_id()",
    d: "unique_id()",
    correct: "a",
    explanation: "The correct answer is option a. This is a fundamental concept."
  }
];
