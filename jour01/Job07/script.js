function jourTravaille(date) {
    var holidays = ["1-1", "14-7", "15-8", "1-11", "11-11", "25-12"]; // list of holidays in format "dd-mm"
    var weekday = date.toLocaleString('fr', {weekday: 'long'});
    var day = date.getDate();
    var month = date.getMonth() + 1; // month is 0 indexed
    var dateString = day + "-" + month;
  
    if (holidays.includes(dateString)) {
      console.log("Le " + weekday + " " + day + " " + month + " " + date.getFullYear() + " est un jour férié");
    } else if (date.getDay() === 0 || date.getDay() === 6) {
      console.log("Non, " + weekday + " " + day + " " + month + " " + date.getFullYear() + " est un week-end");
    } else {
      console.log("Oui, " + weekday + " " + day + " " + month + " " + date.getFullYear() + " est un jour travaillé");
    }
  }
  jourTravaille(new Date(2020, 0, 1));  //Le 1 1 2020 est un jour férié
  jourTravaille(new Date(2020, 10, 14));  //Non, 6 1 2020 est un week-end
  jourTravaille(new Date(2020, 7, 7));  //Oui, 7 1 2020 est un jour travaillé