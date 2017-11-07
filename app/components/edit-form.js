import Ember from 'ember';

export default Ember.Component.extend({
  auth: Ember.inject.service(),

  user: Ember.computed.alias('auth.credentials.email'),
  isAuthenticated: Ember.computed.alias('auth.isAuthenticated'),
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
      this.set('event.location', this.get('event.location'))
      this.set('event.date', this.get('event.date'))
      this.set('event.time', this.get('event.time'))
      this.set('event.seats', this.get('event.seats'))
      this.set('event.body', this.get('event.body'))
      this.set('event.user', this.get('user'))
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
