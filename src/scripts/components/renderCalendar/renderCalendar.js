const renderCalendar = ({ appElement, currentDate }) => {
  const calendarContainer = document.createElement("table");
  const calendarHead = document.createElement("thead");
  const calendarBody = document.createElement("tbody");
  const tr = document.createElement("tr");
  calendarContainer.prepend(calendarHead);// This element must contain tr > th*monthLength > <span>DayName</span> + <span>DayNum</span>
  calendarHead.prepend(tr); 
  calendarContainer.append(calendarBody); // This element must contain tr > td*monthLength
  appElement.append(calendarContainer);

  let date = new Date();
  let monthIndex = date.getMonth();
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  let [weekday, month, year, day] = date.toLocaleDateString('en-US', options).split(",");

  const calendarYear = document.querySelector(".year");
  calendarYear.innerHTML = year;

  const calendarMonth = document.querySelector(".month");
  let monthSplit = month.split(' ');
  calendarMonth.innerHTML = monthSplit[1];

  let lastDayOfMonth = function (year, month) {
    let date = new Date(year, month + 1, 0);
    return date.getDate();
  }

  for(let i = lastDayOfMonth(year, monthIndex); i >= 1; i--) {
    let dateForCalendar = new Date();
    dateForCalendar.setDate(i);

    let dayNumber = dateForCalendar.getDay();

    let [weekday, month, year, day] = dateForCalendar.toLocaleDateString('en-US', options).split(",");
    let brieflyDay = weekday.slice(0, 2);
    let th = document.createElement('th');
    if(dayNumber == 6 || dayNumber == 0) {
      th.classList.add("off-day");
    }
    th.innerHTML = `<span>${brieflyDay}</span><span>${i}</span>`;
    tr.prepend(th);
  }
};

export default renderCalendar;
