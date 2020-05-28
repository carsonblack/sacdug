
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

Vue.component('nextevent', {
  template: `
    <div class="block">
      <h2>Next Event</h2>
        <h3>{{title}}</h3>
        <div class="datetime">{{date}} {{time}}</div>
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
