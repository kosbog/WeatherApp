export const capitalizeFirstLetter = (str) => {
    return str[0].toUpperCase() + str.slice(1);
}

export const getDate = (week, month) => {
    return {
        day: week[new Date().getDay()],
        date: new Date().getDate(),
        month: month[new Date().getMonth()]
    };
}

export const roundNumber = (numb) => {
    return Math.round(numb);
}