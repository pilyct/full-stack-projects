//----- JS Introduction: Functions

// Define a function that returns any given night’s number of hours of rest. The function should accept a day as an argument and return the number of hours you slept that night.
const getSleepHours = day => 
((day === 'Monday') || (day === 'Tuesday') || (day === 'Wednesday') || (day === 'Thursday')) ? 8 : ((day === 'Friday') || (day === 'Saturday') || (day === 'Sunday')) ? 9 : console.log('Sorry pal, that isn\'t a day.');


// Define a function that returns the total sleep hours that you actually slept
const getActualSleepHours = () => getSleepHours('Monday') + getSleepHours('Tuesday') + getSleepHours('Wednesday') + getSleepHours('Thursday') + getSleepHours('Friday') + getSleepHours('Saturday') + getSleepHours('Sunday');


// Define a function that returns the ideal sleep hours that you would prefer.
const getIdealSleepHours = idealHours => idealHours * 7; // You’ll add 'idealHours' as a parameter so everyone can choose their preferred time and want to multiply by 7 to get the total hours you prefer per week


// Now that we can get the actual sleep hours and the ideal sleep hours, it’s time to calculate sleep debt.
const calculateSleepDebt = idealHours => {
  let actualSleepHours = getActualSleepHours();
  let idealSleepHours = getIdealSleepHours(idealHours);
  let hoursDiff = actualSleepHours - idealSleepHours;

  (actualSleepHours === idealSleepHours) ? console.log(`Sleep Difference: ${hoursDiff} hours. Well done, pal! You got the perfect amount of sleep.`) : ((actualSleepHours > idealSleepHours) ? console.log(`Sleep Difference: +${hoursDiff} hours. Aaaaallright, I can see who is feeling sleepy lately.`) : console.log(`Sleep Difference: ${hoursDiff} hours. OK, this isn\'t good, pal. You need to get some rest.`));

};

calculateSleepDebt(8);