export const capitalizeFirstLetter = (str) => {
    return str[0].toUpperCase() + str.slice(1);
}

export const roundNumber = (numb) => {
    return Math.round(numb);
}

export const reloadPage = () => {
    window.location.reload();
}

export const parseDate = (elem) => {
<<<<<<< HEAD
    let tempDay = new Date(elem).toDateString(),
        dateArr = tempDay.split(' '),
        firstNumber = dateArr[2][0],
        secondNumber = dateArr[2][1],
        date;

    date = firstNumber === '0' ? secondNumber : dateArr[2];

    return {
        name: dateArr[0],
        month: dateArr[1],
=======
    const weekendArr = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const monthArr = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    const currDate = new Date(elem),
        date = currDate.getDate().toString(),
        day = weekendArr.filter((day, index) => index === currDate.getDay()).toString(),
        month = monthArr.filter((month, index) => index + 1 === currDate.getMonth()).toString();

    return {
        day: day,
        month: month,
>>>>>>> e28ff84c6f0cb74a89740313cdf88b6b637e70e6
        date: date
    };
}