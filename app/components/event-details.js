import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    deleteEvent() {
      console.log(this.get('event'))
      return this.sendAction('deleteEvent', this.get('event'))
    }
  }
});