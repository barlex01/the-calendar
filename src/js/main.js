const module = require("./module/firstModule.js");

(function () {
  let body = document.querySelector("body");
  let textDay = document.createElement("p");
  let dateText = document.createElement("p");
  let ul = document.createElement("ul");
  let table = document.createElement("div");

  let date = new Date();
  let date1 = new Date(2021, 11, 1);
  let date2 = new Date(2022,0 ,1);
  let date3 = Math.round((date2 - date1) / 1000 / 3600 / 24);

  let monthArr = [
    "Январь",
    "Февраль",
    "Март",
    "Апрель",
    "Май",
    "Июнь",
    "Июль",
    "Август",
    "Сентябрь",
    "Октябрь",
    "Ноябрь",
    "Декабрь",
  ];
  let daysArr = [
    "воскресенье",
    "понедельник",
    "вторник",
    "среда",
    "четверг",
    "пятница",
    "суббота",
  ];

  for (let i = 1; i <= date3; i++) {
    let li = document.createElement("li");
    li.classList.add("calendar__list");

    if (i == date.getDate()) {
      li.classList.add("active");
    }

    ul.appendChild(li);
    li.innerText = i;
  }
  body.appendChild(ul);
  ul.classList.add("linear");

  dateText.innerHTML = `${date.getFullYear()} год / ${
    monthArr[date.getMonth()]
  }`;
  textDay.innerText = daysArr[date.getDay()];

  body.insertAdjacentElement("beforeBegin", dateText);
  body.insertAdjacentElement("beforeBegin", textDay);
  body.insertAdjacentElement("afterEnd", table);

  dateText.classList.add("calendar__date-text");
  textDay.classList.add("text-day");
  table.classList.add("day__table");

  function addZero(num) {
    if (num >= 0 && num <= 9) {
      return "0" + num;
    } else {
      return num;
    }
  }
  let numb = 0;
  body.addEventListener("click", (e) => {
    numb = Number(e.target.innerHTML);
    console.log(e.target.tagName);

    if (e.target.tagName != "LI") {
      table.innerHTML = "";
    } else {
      let date2 = new Date(2022, 0, numb);
      let dayForTable = daysArr[date2.getDay()];

      table.innerHTML = dayForTable;
    }
  });
})();
