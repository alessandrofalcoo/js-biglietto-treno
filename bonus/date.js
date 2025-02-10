
const d = new Date()

const timeToNextHour = (60 - d.getMinutes());
console.log(timeToNextHour);

setInterval(alert(`to the next hour it remains: ${timeToNextHour} minutes`), 1000);