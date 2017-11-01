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
      // this.set('newEvent.title', null)
    }
  }
});
