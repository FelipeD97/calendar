let calendar = document.querySelector('.calendar')

const month_names = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

// CHECKS IF IT IS A LEAP YEAR
isLeapYear = (year) => {
    return (year % 4 === 0 && year % 100 !== 0 && year % 400 !== 0) || (year % 100 === 0 && year % 400 === 0)
}
// RETURNS CORRECT NUMBER OF DAYS IN FEB IF A LEAP YEAR
getFebDays = (year) => {
    return isLeapYear(year) ? 29 : 28
}
//CREATES CALENDAR
generateCalendar = (month, year) => {
    let calendar_days = calendar.querySelector('.calender-days')
    
}