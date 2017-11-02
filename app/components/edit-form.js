import Ember from 'ember';

export default Ember.Component.extend({
  newEvent: {
    title: null,
    hidden: false,
    location: null,
    date: null,
    time: null,
    seats: null,
    body: null
  },
  actions: {
    editEvent() {
      this.set('event.title', this.get('event.title'))
      console.log(this.get('event.title'))
      this.set('event.location', this.get('event.location'))
      console.log(this.get('event.location'))
      this.set('event.date', this.get('event.date'))
      console.log(this.get('event.date'))
      this.set('event.time', this.get('event.time'))
      console.log(this.get('event.time'))
      this.set('event.seats', this.get('event.seats'))
      console.log(this.get('event.seats'))
      this.set('event.body', this.get('event.body'))
      console.log(this.get('event.body'))
      this.sendAction('editEvent', this.get('event'))
      // this.set('event.title', null)
      // this.set('event.location', null)
      // this.set('event.date', null)
      // this.set('event.time', null)
      // this.set('event.seats', null)
      // this.set('event.body', null)
    }
  }
});
