import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    createEvent(events){
      console.log(events)
      let newEvent = this.get('store').createRecord('event', events)
      newEvent.save()
      this.transitionTo('events')
    }
  }
});
