function jourtravaille(inputDate) {
    const date = new Date(inputDate);
    if (isNaN(date.valueOf())) {
        console.error("Invalid date");
        return;
    }

    const holidays = [
        new Date(2020, 0, 1),
        new Date(2020, 3, 13),
        new Date(2020, 4, 1),
        new Date(2020, 4, 8),
        new Date(2020, 5, 1),
        new Date(2020, 6, 14),
        new Date(2020, 7, 15),
        new Date(2020, 10, 1),
        new Date(2020, 10, 11),
        new Date(2020, 11, 25),
    ];
    const options = { month: "long" };
    const month = new Intl.DateTimeFormat("fr-FR", options).format(date);
    for (const day of holidays) {
        if (day.getFullYear() == date.getFullYear() &&
         day.getMonth() == date.getMonth() &&
         day.getDate() == date.getDate()) {
            console.log(`Le ${date.getDate()} ${month} ${date.getFullYear()} est un jour férié`);
            return;
        }
    }
    if (date.getDay() == 0 || date.getDay() == 6) {
         console.log(`Non, ${date.getDate()} ${month} ${date.getFullYear()} est un week-end`);
    }
    else {
         console.log(`Oui, ${date.getDate()} ${month} ${date.getFullYear()} est un jour de travaille`);
    }
}
jourtravaille("August 19, 1975 23:15:30");
jourtravaille("December 25, 2020 23:15:30");
jourtravaille("June 25, 2022 23:15:30");
jourtravaille(new Date(2020, 3, 13));