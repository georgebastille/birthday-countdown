document.addEventListener('DOMContentLoaded', function() {
    const auriCountdownElement = document.getElementById('auri-countdown');
    const willowCountdownElement = document.getElementById('willow-countdown');
    const catsCountdownElement = document.getElementById('cats-countdown');

    const auriBirthday = new Date('2016-09-05T00:00:00');
    const willowBirthday = new Date(new Date().getFullYear(), 10, 26); // Month is 0-indexed
    const catsBirthday = new Date(new Date().getFullYear(), 9, 6); // Month is 0-indexed

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

        // Auri's Countdown
        const nextAuriBirthday = getNextBirthday(today, auriBirthday);
        const auriDiff = nextAuriBirthday - today;
        const auriDays = Math.floor(auriDiff / (1000 * 60 * 60 * 24));
        auriCountdownElement.innerHTML = `<p>Only ${auriDays} days until your birthday!</p>`;

        // Willow's Countdown
        const nextWillowBirthday = getNextBirthday(today, willowBirthday);
        const willowDiff = nextWillowBirthday - today;
        const willowDays = Math.floor(willowDiff / (1000 * 60 * 60 * 24));
        willowCountdownElement.innerHTML = `<p>Willow's birthday is in ${willowDays} days!</p>`;

        // Cats' Countdown
        const nextCatsBirthday = getNextBirthday(today, catsBirthday);
        const catsDiff = nextCatsBirthday - today;
        const catsDays = Math.floor(catsDiff / (1000 * 60 * 60 * 24));
        catsCountdownElement.innerHTML = `<p>Coco and TeeTee's birthday is in ${catsDays} days!</p>`;
    }

    updateCountdown();
    setInterval(updateCountdown, 1000 * 60 * 60 * 24);
});
