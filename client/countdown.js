function countdown(endDate) {
  let days
  endDate = new Date(endDate).getTime();
  if (isNaN(endDate)) return
  setInterval(calculate, 1000);

  function calculate() {
    let startDate = new Date();
    startDate = startDate.getTime();

    let timeRemaining = parseInt((endDate - startDate) / 1000);

    if (timeRemaining >= 0) {
      days = parseInt(timeRemaining / 86400);
      timeRemaining = (timeRemaining % 86400);
      return days
    }
  }
  return calculate()
}

export default countdown('07/04/2020 12:00:00 AM')
