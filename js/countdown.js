// Set launch date in milliseconds.
const launchDate = new Date('June 23, 2020 24:00:00').getTime();

// Take in the launch date and return the distance from right now in milliseconds.
function distance(launch) {
  // Get today's date and time in milliseconds.
  const now = new Date().getTime();
  // Distance from now to launch dateaxios.all([callback1,callback2])
  const distance = launch - now;
  // If the date is passed stop countdown
  if (distance < 0) {
    clearInterval();
  }
  return distance;
}

Vue.component('countdown', {
  template: `
    <div class="countdown">
      <div class="bordered">{{ days }} <span>Days</span></div>
      <div class="bordered">{{ hours }} <span>Hours</span></div>
      <div class="bordered">{{ minutes }} <span>Minutes</span></div>
      <div class="bordered">{{ seconds }} <span>Seconds</span></div>
    </div>
    `,
  data: () => {
    return {
      days: Math.floor(distance(launchDate) / (1000 * 60 * 60 * 24)),
      hours: Math.floor((distance(launchDate) % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((distance(launchDate) % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((distance(launchDate) % (1000 * 60)) / 1000),
    }
  },
  methods: {
    updateTimer: function () {
      setInterval(() => {
        this.days = Math.floor(distance(launchDate) / (1000 * 60 * 60 * 24));
        this.hours = Math.floor((distance(launchDate) % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        this.minutes = Math.floor((distance(launchDate) % (1000 * 60 * 60)) / (1000 * 60));
        this.seconds = Math.floor((distance(launchDate) % (1000 * 60)) / 1000);
      }, 1000);

    }
  },
  mounted() {
    this.updateTimer()
  },
})

new Vue({ el: '#countdownTimer' })
