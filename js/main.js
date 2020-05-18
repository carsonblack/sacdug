const countdown = document.querySelector('.countdown');

// Set launch date in milliseconds.
const launchDate = new Date('May 18, 2020 24:00:00').getTime();

//Update counter every second.
const intvl = setInterval(() => {
  // Get today's date and time in milliseconds.
  const now = new Date().getTime();

  // Distance from now to launch dateaxios.all([callback1,callback2])
  const distance = launchDate - now;

  // Time calculations
  const days = Math.floor(distance / (1000 * 60 * 60 *24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display result
  countdown.innerHTML = `
    <div class="bordered">${days} <span>Days</span></div>
    <div class="bordered">${hours} <span>Hours</span></div>
    <div class="bordered">${minutes} <span>Minutes</span></div>
    <div class="bordered">${seconds} <span>Seconds</span></div>
  `;

  // If the date is passed stop countdown
  if (distance < 0) {
    clearInterval(intvl);
    //Style output and set Launched text
    countdown.style.color = '#038542';
    countdown.innerHTML = 'Launched!';
  }
}, 1000);


