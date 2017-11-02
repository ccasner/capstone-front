import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
  return this.get('store').findRecord('event', params.event_id)
},
actions: {
  deleteEvent(events) {
    events.destroyRecord()
      .then(()=> this.transitionTo('events'))
  },
  editEvent(events) {
    events.save()
  }
}
});
