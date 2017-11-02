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
      this.set('event.title', this.get('newEvent.title'))
      this.set('event.location', this.get('newEvent.location'))
      this.set('event.date', this.get('newEvent.date'))
      this.set('event.time', this.get('newEvent.time'))
      this.set('event.seats', this.get('newEvent.seats'))
      this.set('event.body', this.get('newEvent.body'))
      this.sendAction('editEvent', this.get('event'))
      this.set('newEvent.title', null)
      this.set('newEvent.location', null)
      this.set('newEvent.date', null)
      this.set('newEvent.time', null)
      this.set('newEvent.seats', null)
      this.set('newEvent.body', null)
    }
  }
});
