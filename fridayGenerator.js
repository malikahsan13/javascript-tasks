function* generateFridays(startFriday) {
  // Convert the startFriday string to a Date object
  const startDate = new Date(startFriday);

  let currentDate = new Date(startDate);

  //   while (true) {
  //     (yield new Date(currentDate)) === 'start' ? currentDate = new Date(startDate) : currentDate.setDate(currentDate.getDate() + 7);
  //   }
  let lastGeneratedValue = null;
  let isFinished = false;

  while (!isFinished) {
    const signal = yield new Date(currentDate);

    if (signal === "start") {
      currentDate = new Date(startDate);
    } else if (signal === "end") {
      isFinished = true;
    } else {
      currentDate.setDate(currentDate.getDate() + 7);
      lastGeneratedValue = new Date(currentDate);
    }
  }

  return lastGeneratedValue;
}

// Example usage:
const startFriday = "2023-11-17"; // Replace with your desired start Friday date

const fridayGenerator = generateFridays(startFriday);

// Display the first generated value
console.log(fridayGenerator.next().value);
console.log(fridayGenerator.next().value);
console.log(fridayGenerator.next().value);
// Reset the generator to the start date
console.log(fridayGenerator.next("start").value);
console.log(fridayGenerator.next().value);

// Display the next generated value after resetting
console.log(fridayGenerator.next());

// Finish the generator and display the last generated value
console.log(fridayGenerator.next("end"));
console.log(fridayGenerator.next());
