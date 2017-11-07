import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    deleteEvent() {
      return this.sendAction('deleteEvent', this.get('event'))
    }
  }
});
