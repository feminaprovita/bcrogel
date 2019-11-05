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

function countdownCopy(weddingDate) {
  if(countdown(weddingDate) > 2) {
    return `We are getting married in ${countdown(weddingDate)} days!`
  }
  else if(countdown(weddingDate) === 2) {
    return "We are getting married tomorrow!"
  }
  else if(countdown(weddingDate) <= 1) {
    return "Today's the day! We're getting married today!"
    // not sustainable, but will hold for now, until I figure this out
  }
  // else if(countdown(weddingDate) === -1) {
  //   return "We got married yesterday!"
  // }
  // else if(countdown(weddingDate) < -1) {
  //   return `We've been married for ${countdown(weddingDate) - 1} days!`
  // }
}

export default countdownCopy('07/05/2020 12:00:00 AM')
