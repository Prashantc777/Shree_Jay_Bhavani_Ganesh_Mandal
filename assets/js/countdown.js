// ==========================================
// Ganeshotsav Countdown
// ==========================================

console.log("Countdown JS Loaded");

// Ganesh Chaturthi 2026
const ganeshFestivalDate = new Date(2026, 8, 14);

// Today's Date
const today = new Date();
today.setHours(0, 0, 0, 0);

// Difference in Days
const difference = ganeshFestivalDate - today;
const daysLeft = Math.max(
    0,
    Math.ceil(difference / (1000 * 60 * 60 * 24))
);

// Countdown Element
const countdownElement = document.getElementById("days-left");

if (countdownElement) {

    // Marathi Numbers
    const marathiNumbers = ['०','१','२','३','४','५','६','७','८','९'];

    if (daysLeft > 0) {

        const marathiDays = daysLeft
            .toString()
            .split('')
            .map(digit => marathiNumbers[digit])
            .join('');

        countdownElement.textContent = marathiDays;
        console.log("Marathi Days:", marathiDays);

    } else {

        countdownElement.textContent = "आज";

    }

}