// http://weeknumber.net/how-to/javascript
// Returns the ISO week of the date.
function getWeekNumber(date)
{
    var tempDate = new Date(date.getTime());
    tempDate.setHours(0, 0, 0, 0);
    // Thursday in current week decides the year.
    tempDate.setDate(tempDate.getDate() + 3 - (tempDate.getDay() + 6) % 7);
    // January 4 is always in week 1.
    var week1 = new Date(tempDate.getFullYear(), 0, 4);
    // Adjust to Thursday in week 1 and count number of weeks from date to week1.
    return 1 + Math.round(((tempDate.getTime() - week1.getTime()) / 86400000 - 3 + (week1.getDay() + 6) % 7) / 7);
}

function getWeekIndex(year, month, day)
{
    var date1 = getMondayOfFirstWeek(year);
    var date2 = getPrevMonday(year, month, day);
    var days = getDayDiff(date2, date1);
    //alert(date1+" "+date2+" "+days);
    return days / 7;
}

function getDayDiff(date1, date2)
{
    return (getUTC(date1) - getUTC(date2) ) / 86400000;
}

function getUTC(date)
{
    return Date.UTC(date.getFullYear(), date.getMonth(), date.getDate());
}

/**
 * Return monday of week
 * @param year
 * @param week
 * @returns {*}
 */
function getPrevMonday(year, month, day)
{
    var date = new Date(year, month, day);
    var day = date.getDay();
    if(day == 0)
        day = 7;
    date.setDate(date.getDate()-day+1);
    return date;
}

/**
 * Return monday of week
 * @param year
 * @param week
 * @returns {*}
 */
function getMondayOfWeek(year, weekIndex)
{
    var date = getMondayOfFirstWeek(year);
    date.setDate(date.getDate()+(weekIndex*7));
    return date;
}

/**
 * Return monday of first week of the year
 * @param year
 * @returns {*}
 */
function getMondayOfFirstWeek(year)
{
    var date = getPrevMonday(year, 0, 1);
    return date;
}

/**
 * Returns the number of days in a month
 * @param year
 * @param month
 * @returns {*}
 */
function getNumDay(year, month)
{
    var isLeapYear = ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0);
    return [31, (isLeapYear ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month];
}

function addDays(date, days)
{
    var result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
}