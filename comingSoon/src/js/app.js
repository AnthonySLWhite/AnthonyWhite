// Update the count down every 1 second
const x = setInterval(() => {
  const countDownDate = new Date('Feb 01, 2019 17:00:00').getTime();

  // Get todays date and time
  const now = new Date().getTime();

  // Find the distance between now and the count down date
  const distance = countDownDate - now;
  // Time calculations for days, hours, minutes and seconds
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the elements
  document.getElementById('days').textContent = days;
  document.getElementById('hours').textContent = hours;
  document.getElementById('minutes').textContent = minutes;
  document.getElementById('seconds').textContent = seconds;

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById('demo').innerHTML = 'EXPIRED';
  }
}, 1000);
