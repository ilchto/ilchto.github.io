function getChildElementIndex(node) {
  return Array.prototype.indexOf.call(node.parentNode.children, node);
}
function ISO8601_week_no(dt) {
   var tdt = new Date(dt.valueOf());
   var dayn = (dt.getDay() + 6) % 7;
   tdt.setDate(tdt.getDate() - dayn + 3);
   var firstThursday = tdt.valueOf();
   tdt.setMonth(0, 1);
   if (tdt.getDay() !== 4) {
     tdt.setMonth(0, 1 + ((4 - tdt.getDay()) + 7) % 7);
   }
   return 1 + Math.ceil((firstThursday - tdt) / 604800000);
}
function getDateOfISOWeek(w, y) {
  var simple = new Date(y, 0, 1 + (w - 1) * 7);
  var dow = simple.getDay();
  var ISOweekStart = simple;
  if (dow <= 4)
    ISOweekStart.setDate(simple.getDate() - simple.getDay() + 1);
  else
    ISOweekStart.setDate(simple.getDate() + 8 - simple.getDay());
  return ISOweekStart;
}
Date.prototype.addDays = function(days) {
  var date = new Date(this.valueOf());
  date.setDate(date.getDate() + days);
  return date;
}
Date.prototype.getISODay = function(){ return (this.getDay() + 6) % 7 + 1; }
function padTo2Digits(num) {
  return num.toString().padStart(2, '0');
}
function formatDate(date) {
  return [
    date.getFullYear(),
    padTo2Digits(date.getMonth() + 1),
    padTo2Digits(date.getDate()),

  ].join('-');
}
function getDaysInMonth(year, month) {
  return new Date(year, month, 0).getDate();
}
