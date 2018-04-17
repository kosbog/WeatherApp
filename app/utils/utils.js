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
    const weekendArr = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const monthArr = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    const currDate = new Date(elem),
        date = currDate.getDate().toString(),
        day = weekendArr.filter((day, index) => index === currDate.getDay()).toString(),
        month = monthArr.filter((month, index) => index + 1 === currDate.getMonth()).toString();

    return {
        day: day,
        month: month,
        date: date
    };
}