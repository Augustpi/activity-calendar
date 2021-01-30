function getDayName (dateStr, locale) {
  var date = new Date(dateStr);
  return date.toLocaleDateString(locale, { weekday: 'long' });
}

const uniqueElements = arr => [...new Set(arr)]

const activity = (day, arr) => {
  var dayEl = `<div class='a__day' day="${day}"></div>`; //${day}
  var days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  if (arr === undefined) dayEl = `<div class='a__day title'>${days[day].substr(0, 3)}</div>`;
  arr = uniqueElements(arr)

  if (arr.length > 0)
    for (var i = 0; i < arr.length; i++)
      if (arr[i] == day) dayEl = "<div class='a__selday item-danger'></div>";
  return dayEl;
}

function countMonthDays (month, year) {
  return new Date(year, month, 0).getDate();
}

function numberOfTheFirstDayOfTheMonth (day, month, year) {
  return [7, 1, 2, 3, 4, 5, 6][new Date(`${year}.${month}.${day}`).getDay()]
}

function activityCalendar (year, month, activeDays = []) {
  var months = [
    "Oca",
    "Şub",
    "Mar",
    "Nis",
    "May",
    "Haz",
    "Tem",
    "Ağu",
    "Eyl",
    "Eki",
    "Kas",
    "Ara",
  ];
  var endOftheMonthDay = numberOfTheFirstDayOfTheMonth(countMonthDays(month, year), month, year);
  var firstWeekGap = numberOfTheFirstDayOfTheMonth(1, month, year) - 1;
  var lastWeekGap = 7 - endOftheMonthDay;
  var wholeWeek = (countMonthDays(month, year) + firstWeekGap + lastWeekGap) / 7 - 2;
  var dayElSec = '<div class="a__selday"></div>';
  var dayOutsideOfTheMonth = '<div class="a__day is-outside-month"></div>';
  var monthNameEl = `<div class="a__label">  ${month ? months[month - 1] : 'm'} ${year.toString().substr(2, 2)} </div>`;
  var monthEl = '<div class="a__month"><div class="a__weeks">';
  var monthElEnd = '</div></div>';
  var weekEl = '<div class="a__week">';
  var endEl = '</div>';

  var firstWeekGaplerDiv = '',
    firstWeekFilllerDiv = '',
    lastWeekFilllerDiv = '',
    lastWeekGaplerDiv = '',
    addWeek = '',
    activityCalendar = '',
    dayOftheWeek = 0;

  if (year === 0 && month === 0) {
    addWeek += weekEl;
    [addWeek, dayOftheWeek] = createWeek(addWeek, 7, undefined)
    addWeek += endEl;
    const elm = [monthEl, weekEl, addWeek, endEl, monthNameEl, monthElEnd]
    activityCalendar = elm.join('');
  } else {

    // first week - gap..
    if (firstWeekGap > 0)
      for (var i = 0; i < firstWeekGap; i++)
        firstWeekGaplerDiv += dayOutsideOfTheMonth;

    [firstWeekFilllerDiv, dayOftheWeek] = createWeek(firstWeekFilllerDiv, 7 - firstWeekGap, activeDays)

    for (var i = 1; i <= wholeWeek; i++) {
      addWeek += weekEl;
      [addWeek, dayOftheWeek] = createWeek(addWeek, 7, activeDays)
      addWeek += endEl;
    }
    // Last week
    [lastWeekFilllerDiv, dayOftheWeek] = createWeek(lastWeekFilllerDiv, endOftheMonthDay, activeDays)

    // Last week gap
    if (lastWeekGap > 0) {
      for (var i = 0; i < lastWeekGap; i++)
        lastWeekGaplerDiv += dayOutsideOfTheMonth;
    }
    else if (lastWeekGap = 0)
      lastWeekGaplerDiv = '';
    const elm = [monthEl, weekEl, firstWeekGaplerDiv, firstWeekFilllerDiv, endEl, addWeek, weekEl, lastWeekFilllerDiv, lastWeekGaplerDiv, endEl, monthNameEl, monthElEnd]
    activityCalendar = elm.join('');
  }

  document.querySelector('#activityCalendar').innerHTML += activityCalendar

  function createWeek (el, loop, arr) {
    const getDate = new Date().getDate();
    const getMonth = new Date().getMonth() + 1;
    for (var i = 0; i < loop; i++) {
      dayOftheWeek += 1;
      getDate === dayOftheWeek && month === getMonth
        ? el += dayElSec
        : el += activity(dayOftheWeek, arr);
    }
    return [el, dayOftheWeek]
  }
}

// Aktivite Takvimi son 

const calendar = {
  2021: [
    { 1: [] },
    { 2: [2, 2, 4, , 4, 4, 4, 3, 5, 28, 29] },
    { 3: [1, 2, 3, 5, 6, 19, 20, 21, 22] },
    { 4: [] },
    { 5: [] },
    { 6: [4, 9, 10, 12, 22, 23, 24, 29] },
    { 7: [] },
    { 8: [] },
    { 9: [1, 4, 5, 6, 15, 16, 20] },
    { 10: [] },
    { 11: [] },
    { 12: [] }
  ]
}

activityCalendar(0, 0);

for (let i in calendar[2021])
  for (let m in calendar[2021][i])
    activityCalendar(2021, m, calendar[2021][i][m]);