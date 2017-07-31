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
    let tempDay = new Date(elem).toDateString(),
        dateArr = tempDay.split(' '),
        firstNumber = dateArr[2][0],
        secondNumber = dateArr[2][1],
        date;

    date = firstNumber === '0' ? secondNumber : dateArr[2];

    return {
        name: dateArr[0],
        month: dateArr[1],
        date: date
    };
}