/*
lastDayDate - последнее число текущего месяца
lastDay - последний день текущего месяца в милисекундах
weekDayLD - день недели последнего дня месяца
weekDayFD - день недели первого дня месяца
calendar - календарь
month - месяц
year - год
*/
function createCalendar(id, year, month) {
  var lastDayDate = new Date(year,month+1,0).getDate(),
  lastDay = new Date(year,month,lastDayDate),
  weekDayLD = lastDay.getDay(),
  weekDayFD = new Date(lastDay.getFullYear(),lastDay.getMonth(),1).getDay(),
  calendar = '<tr>',
  month = document.querySelector('#'+id+' option[value="' + lastDay.getMonth() + '"]'),
  year = document.querySelector('#'+id+' input');

  var dd = new Date().getDate(),
  mm = new Date().getMonth()+1;
  yy = new Date().getFullYear();


  if (weekDayFD != 0) {
    for(var  i = 1; i < weekDayFD; i++) calendar += '<td>';
  }else{
    for(var  i = 0; i < 6; i++) calendar += '<td>';
  }

  for(var  i = 1; i <= lastDayDate; i++) {
    if (i == new Date().getDate() && lastDay.getFullYear() == new Date().getFullYear() && lastDay.getMonth() == new Date().getMonth()) {
      calendar += '<td class="today">' + i;
    }else{
      if (  // список официальных праздников
          (i == 1 && lastDay.getMonth() == 0 && ((lastDay.getFullYear() > 1897 && lastDay.getFullYear() < 1930) || lastDay.getFullYear() > 1947)) || // Новый год
          (i == 2 && lastDay.getMonth() == 0 && lastDay.getFullYear() > 1992) || // Новый год
          ((i == 3 || i == 4 || i == 5 || i == 6 || i == 8) && lastDay.getMonth() == 0 && lastDay.getFullYear() > 2004) || // Новый год
          (i == 7 && lastDay.getMonth() == 0 && lastDay.getFullYear() > 1990) || // Рождество Христово
          (i == 23 && lastDay.getMonth() == 1 && lastDay.getFullYear() > 2001) || // День защитника Отечества
          (i == 8 && lastDay.getMonth() == 2 && lastDay.getFullYear() > 1965) || // Международный женский день
          (i == 1 && lastDay.getMonth() == 4 && lastDay.getFullYear() > 1917) || // Праздник Весны и Труда
          (i == 9 && lastDay.getMonth() == 4 && lastDay.getFullYear() > 1964) || // День Победы
          (i == 12 && lastDay.getMonth() == 5 && lastDay.getFullYear() > 1990) || // День России (декларации о государственном суверенитете Российской Федерации ознаменовала окончательный Распад СССР)
          (i == 7 && lastDay.getMonth() == 10 && (lastDay.getFullYear() > 1926 && lastDay.getFullYear() < 2005)) || // Октябрьская революция 1917 года
          (i == 8 && lastDay.getMonth() == 10 && (lastDay.getFullYear() > 1926 && lastDay.getFullYear() < 1992)) || // Октябрьская революция 1917 года
          (i == 4 && lastDay.getMonth() == 10 && lastDay.getFullYear() > 2004)// День народного единства, который заменил Октябрьскую революцию 1917 года
          ) {
    calendar += '<td class="holiday">' + i;
  }

else if(i == 10 && lastDay.getMonth() == 0 && lastDay.getFullYear() == 2016) {
          //month = lastDay.getMonth()+1;
          calendar += '<td class="contest"><a href="/event-'+i+'-'+(lastDay.getMonth()+1)+'-'+lastDay.getFullYear()+'.html"'+ 'title="Кубок Новичка">' + i + '</a>';
        } else if (i == 30 && lastDay.getMonth() == 0 && lastDay.getFullYear() == 2016) {
          calendar += '<td class="contest"><a href="http://www.planeta-rostov.ru/post/view/id/1945"' + ' title="Кубок Чайника"' + 'target="_blank">' + i + '</a>';
        } else if (i == 31 && lastDay.getMonth() == 0 && lastDay.getFullYear() == 2016) {
          calendar += '<td class="contest"><a href="http://www.planeta-rostov.ru/post/view/id/1945"' + ' title="Кубок Античайника"' + 'target="_blank">' + i + '</a>';
        } else if (i == 28 && lastDay.getMonth() == 1 && lastDay.getFullYear() == 2016) {
          calendar += '<td class="contest"><a href="http://www.planeta-rostov.ru/post/view/id/1962"' + ' title="Соревнования по ледолазанию. Драйтулинг. Ростов."' + 'target="_blank">' + i + '</a>';
        } else if (i == 13 && lastDay.getMonth() == 2 && lastDay.getFullYear() == 2016) {
          calendar += '<td class="contest"><a /*href=""*/' + ' title="Соревнования по альпинизму. Перильная техника. Ростов"' + 'target="_blank">' + i + '</a>';
        } else if (i == 22 && lastDay.getMonth() == 3 && lastDay.getFullYear() == 2016) {
          calendar += '<td class="contest"><a /*href=""*/' + ' title="Чемпионат Юга России, скальный класс. Тырныауз."' + 'target="_blank">' + i + '</a>';
        } else if (i == 23 && lastDay.getMonth() == 3 && lastDay.getFullYear() == 2016) {
          calendar += '<td class="contest"><a /*href=""*/' + ' title="УТС «Спасение в горах». Цей."' + 'target="_blank">' + i + '</a>';
        } else if (i == 24 && lastDay.getMonth() == 3 && lastDay.getFullYear() == 2016) {
          calendar += '<td class="contest"><a /*href=""*/' + ' title="Открытые соревнования по ОФП. Ростов."' + 'target="_blank">' + i + '</a>';
        } else if (i == 30 && lastDay.getMonth() == 3 && lastDay.getFullYear() == 2016) {
          calendar += '<td class="contest"><a /*href=""*/' + ' title="Юношеский кубок Клуба «Планета», боулдеринг."' + 'target="_blank">' + i + '</a>';
        } else if (i == 2 && lastDay.getMonth() == 4 && lastDay.getFullYear() == 2016) {
          calendar += '<td class="contest"><a /*href=""*/' + ' title="Чемпионат Севастополя и Крымского федерального округа."' + 'target="_blank">' + i + '</a>';
        } else if (i == 5 && lastDay.getMonth() == 4 && lastDay.getFullYear() == 2016) {
          calendar += '<td class="contest"><a /*href=""*/' + ' title="Чемпионат России, скальный класс. Крым."' + 'target="_blank">' + i + '</a>';
        } else if (i == 29 && lastDay.getMonth() == 4 && lastDay.getFullYear() == 2016) {
          calendar += '<td class="contest"><a /*href=""*/' + ' title="Открытое занятие по скалолазанию. Ростов."' + 'target="_blank">' + i + '</a>';
        } else if (i == 5 && lastDay.getMonth() == 5 && lastDay.getFullYear() == 2016) {
          calendar += '<td class="contest"><a /*href=""*/' + ' title="УТС на скалах в Жирнове. Ростов."' + 'target="_blank">' + i + '</a>';
        } else if (i == 12 && lastDay.getMonth() == 5 && lastDay.getFullYear() == 2016) {
          calendar += '<td class="contest"><a /*href=""*/' + ' title="Открытый Кубок «Планеты» по скалолазанию-скорость."' + 'target="_blank">' + i + '</a>';
        } else if (i == 19 && lastDay.getMonth() == 5 && lastDay.getFullYear() == 2016) {
          calendar += '<td class="contest"><a /*href=""*/' + ' title="Соревнования по технике спасательных работ. Ростов."' + 'target="_blank">' + i + '</a>';
        } else if (i == 1 && lastDay.getMonth() == 6 && lastDay.getFullYear() == 2016) {
          calendar += '<td class="contest"><a /*href=""*/' + ' title="Чемпионат Юга России. Ярыдаг."' + 'target="_blank">' + i + '</a>';
        } else if (i == 8 && lastDay.getMonth() == 6 && lastDay.getFullYear() == 2016) {
          calendar += '<td class="contest"><a href="https://vk.com/alpclub_tagan_2016"' + ' title="УТС ФАиСТ. Уллу-Тау."' + 'target="_blank">' + i + '</a>';
        } else if (i == 29 && lastDay.getMonth() == 7 && lastDay.getFullYear() == 2016) {
          calendar += '<td class="contest"><a /*href=""*/' + ' title="Чемпионат мира, скальный класс. Алма-Ата."' + 'target="_blank">' + i + '</a>';
        } else if (i == 23 && lastDay.getMonth() == 8 && lastDay.getFullYear() == 2016) {
          calendar += '<td class="contest"><a /*href=""*/' + ' title="VIII этап Кубка России, скальный класс. Ростовская область."' + 'target="_blank">' + i + '</a>';
        } else if (i == 24 && lastDay.getMonth() == 8 && lastDay.getFullYear() == 2016) {
          calendar += '<td class="contest"><a /*href=""*/' + ' title="УТС «Спасение в горах». Цей."' + 'target="_blank">' + i + '</a>';
        } else if (i == 25 && lastDay.getMonth() == 8 && lastDay.getFullYear() == 2016) {
          calendar += '<td class="contest"><a /*href=""*/' + ' title="Кубок «Планеты» по скалолазанию."' + 'target="_blank">' + i + '</a>';
        } else if (i == 8 && lastDay.getMonth() == 9 && lastDay.getFullYear() == 2016) {
          calendar += '<td class="contest"><a /*href=""*/' + ' title="Чемпионат Крымского федерального округа, скальный класс."' + 'target="_blank">' + i + '</a>';
        } else if (i == 9 && lastDay.getMonth() == 9 && lastDay.getFullYear() == 2016) {
          calendar += '<td class="contest"><a /*href=""*/' + ' title="Открытое занятие по скалолазанию. Ростов."' + 'target="_blank">' + i + '</a>';
        } else if (i == 16 && lastDay.getMonth() == 9 && lastDay.getFullYear() == 2016) {
          calendar += '<td class="contest"><a /*href=""*/' + ' title="Соревнования по альпинизму. Связки. Ростов."' + 'target="_blank">' + i + '</a>';
        } else if (i == 30 && lastDay.getMonth() == 9 && lastDay.getFullYear() == 2016) {
          calendar += '<td class="contest"><a /*href=""*/' + ' title="Соревнования на горных дистанциях. Связки. Ростов."' + 'target="_blank">' + i + '</a>';
        } else if (i == 20 && lastDay.getMonth() == 10 && lastDay.getFullYear() == 2016) {
          calendar += '<td class="contest"><a /*href=""*/' + ' title="Соревнования по технике спасательных работ. Ростов."' + 'target="_blank">' + i + '</a>';
        } else if (i == 11 && lastDay.getMonth() == 11 && lastDay.getFullYear() == 2016) {
          calendar += '<td class="contest"><a /*href=""*/' + ' title="Кубок им. Антона Маналаки. Таганрог."' + 'target="_blank">' + i + '</a>';
        } else if (i == 18 && lastDay.getMonth() == 11 && lastDay.getFullYear() == 2016) {
          calendar += '<td class="contest"><a /*href=""*/' + ' title="Открытое первенство Клуба «Планета» по скалолазанию."' + 'target="_blank">' + i + '</a>';
        } else if (i == 31 && lastDay.getMonth() == 11 && lastDay.getFullYear() == 2016) {
          calendar += '<td class="contest"><a /*href=""*/' + ' title="Новогодний вечер ФАиСТ. Таганрог."' + 'target="_blank">' + i + '</a>';
        } 


        else{
          calendar += '<td>' + i;
        }
      }

      if (new Date(lastDay.getFullYear(),lastDay.getMonth(),i).getDay() == 0) {
        calendar += '<tr>';
      }
    }
    if(weekDayLD != 0){
      for(var  i = weekDayLD; i < 7; i++) calendar += '<td>&nbsp;';
    }
  
  dd = (dd >= 10) ? dd : ('0' + dd); 
  mm = (mm >= 10) ? mm : ('0' + mm);

  calendar += '<tr><td colspan="7">Сегодня ' + dd + '-' + mm + '-' + yy;
  calendar += '<tr><td colspan="7">Календарь в GoogleDocs ';
  document.querySelector('#'+id+' tbody').innerHTML = calendar;
  year.value = lastDay.getFullYear();
  month.selected = true;

/*if (document.querySelectorAll('#'+id+' tbody tr').length < 6) {
    document.querySelector('#'+id+' tbody').innerHTML += '<tr><td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;';
}
*/

document.querySelector('#'+id+' option[value="' + new Date().getMonth() + '"]').style.color = '#2D3F4A'; // в выпадающем списке выделен текущий месяц

}

createCalendar("calendar",new Date().getFullYear(),new Date().getMonth());

document.querySelector('#calendar').onchange = function Calendar() {
  createCalendar("calendar",document.querySelector('#calendar input').value,parseFloat(document.querySelector('#calendar select').options[document.querySelector('#calendar select').selectedIndex].value));
}
