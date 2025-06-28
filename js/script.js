const countdownElement = document.getElementById('countdown');

const birthday = new Date('2016-09-05T00:00:00');

function getNextBirthday(today, birthDate) {
    const birthMonth = birthDate.getMonth();
    const birthDay = birthDate.getDate();
    const currentYear = today.getFullYear();

    let nextBirthday = new Date(currentYear, birthMonth, birthDay);

    if (today > nextBirthday) {
        nextBirthday.setFullYear(currentYear + 1);
    }

    return nextBirthday;
}

function updateCountdown() {
    const today = new Date();
    const nextBirthday = getNextBirthday(today, birthday);
    const diff = nextBirthday - today;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));

    countdownElement.innerHTML = `
        <p>${days} days until your birthday!</p>
    `;
}

updateCountdown();
setInterval(updateCountdown, 1000 * 60 * 60 * 24);
