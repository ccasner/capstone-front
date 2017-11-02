import Ember from 'ember';

export default Ember.Component.extend({
  newEvent: {
    title: null,
    hidden: false,
    location: null
  },
  actions: {
    createEvent() {
      this.sendAction('createEvent', this.get('newEvent'))
      this.set('newEvent.title', null)
      this.set('newEvent.location', null)
      this.set('newEvent.date', null)
      this.set('newEvent.time', null)
      this.set('newEvent.seats', null)
      this.set('newEvent.body', null)
    }
  }
});
