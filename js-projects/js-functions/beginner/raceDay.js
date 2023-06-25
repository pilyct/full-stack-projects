//----- JS Introduction: Conditionals

// Define variables
let raceNumber = Math.floor(Math.random() * 1000);
let registeredEarly = true;
let runnerAge = 18; // Here it is where you add your age choice

// Condition to check whether the runner is an adult and registered early
if (runnerAge > 18 && registeredEarly === true) {
  raceNumber += 1000; // Early adults receive a race number at or above 1000.
}

// Condition to ckeck runner age and registration time to determine race time.
if (runnerAge > 18 && registeredEarly === true) {
  console.log(`You'll race at 9:30 am with the following race number: ${raceNumber}`);
} else if (runnerAge > 18 && registeredEarly !== true) {
  console.log(`You'll race at 11:00 am with the following race number: ${raceNumber}`);
} else if (runnerAge < 18) {
  console.log(`You'll race at 12:30 am with the following race number: ${raceNumber}`);
} else {
  console.log(`You should see the registration desk.`); // For runners whose age = 18
}