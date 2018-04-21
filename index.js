#! /usr/bin/env node

//https://nodejs.org/api/readline.html#readline_example_tiny_cli

var sanitize = require("sanitize-filename");
 

// Sanitize the string to be safe for use as a filename. 
//var filename = sanitize(UNSAFE_USER_INPUT);
// -> "~.sshauthorized_keys" 



const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'Filemaker> '
});

rl.prompt();

rl.on('line', (line) => {
  switch (line.trim()) {
    case 'hello':
      console.log('world!');
      break;
    default:
     var filename = sanitize(line.trim(),{replacement: '-'});
      //console.log(`'${line.trim()}'`);
      console.log(filename);

      break;
  }
  rl.prompt();
}).on('close', () => {
  console.log('Have a great day!');
  process.exit(0);
});

