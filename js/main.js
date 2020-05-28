
// Set launch date in milliseconds.
const launchDate = new Date('June 23, 2020 24:00:00').getTime();

//Update counter every second.
const intvl = setInterval(() => {
  // Get today's date and time in milliseconds.
  const now = new Date().getTime();

  // Distance from now to launch dateaxios.all([callback1,callback2])
  const distance = launchDate - now;

  // If the date is passed stop countdown
  if (distance < 0) {
    clearInterval(intvl);
  }
  return distance;
}, 1000);

// Takes date object with date and time set and formats the time to something
// readable.
const formatTime = (dateString) => {
  const date = new Date(dateString);
  const timeOptions = {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true
  };
  return date.toLocaleTimeString('en-US', timeOptions);
};

Vue.component('countdown', {
  template: `<div class="countdown">
    <div v-if="launched" class="launched">Launched!</div>
    <span v-else>
      <div class="bordered">{{ days }} <span>Days</span></div>
      <div class="bordered">{{ hours }} <span>Hours</span></div>
      <div class="bordered">{{ minutes }} <span>Minutes</span></div>
      <div class="bordered">{{ seconds }} <span>Seconds</span></div>
    </span>
  </div>`,
  data() {
    return {
      launched: intvl <= 0 ? true : false,
      days: Math.floor(intvl / (1000 * 60 * 60 * 24)),
      hours: Math.floor((intvl % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((intvl % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((intvl % (1000 * 60)) / 1000),
    }
  }
})

new Vue({ el: '.landing-inner' })

Vue.component('nextevent', {
  template: `
    <div class="block">
      <h2>Next Event</h2>
        <div class="datetime">{{date}} {{time}}</div>
        <h3>{{title}}</h3>
        <div class="location">
          <div><strong>Where?:</strong> <a :href="location.link">{{location.title}}</a></div>
        </div>
    </div>`,
  data() {
    return {
      uuid: '1234',
      title: 'June 2020 Remote Meetup',
      date: new Date('May 23, 2020 18:00:00').toDateString(),
      time: formatTime('May 23, 2020 18:00:00'),
      location: {
        title: 'Zoom',
        link: 'https://ucdavisiet.zoom.us/j/95591625802'
      }
    }
  },
})

new Vue({ el: '#eventDisplay' })
