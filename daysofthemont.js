const getLastDateOfTheMonth = (y, m, d) => {
    const date = new Date(y, m-1)
    let daysOfTheMonth = [];
   
    while (date.getDay() !== d) {
        date.setDate(date.getDate() + 1);
    }

    while (date.getMonth() === m - 1) {
        daysOfTheMonth.push(new Date(date.getTime()).toString());
        date.setDate(date.getDate() + 7);
    }

    return daysOfTheMonth[daysOfTheMonth.length - 1];
}
   