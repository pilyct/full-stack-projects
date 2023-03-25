//----- JS Introduction: Built-in methods and variables

// Define today's forecast in Kelvin
const kelvin = 293; 

// Define today's forecast in Celsius
const celsius = kelvin - 273;

// Define the equation to calculate Fahrenheit. Convert from Celsius to Fahrenheit
let fahrenheit = celsius * (9/5) + 32;

// Round the value of the Fahrenheit equation
fahrenheit = Math.floor(fahrenheit);

/*
fahrenheit = Math.round(fahrenheit);

Unlike with Math.floor(), 
with Math.round() the values in min and max are underrepresented.
*/

// Run to check results
console.log(`The temperature is ${fahrenheit} degress Fahrenheit`);

// Define the equation to calculate Newton scale. Convert from Celsius to Newton
let newton = celsius * (33/100);

// Round the value of the Newton equation
newton = Math.floor(newton);

// Check results
console.log(`The temperature is ${newton} degress Newton scale`);