import Ember from 'ember';

export default Ember.Route.extend({
  flashMessages: Ember.inject.service(),
  model(params) {
  return this.get('store').findRecord('event', params.event_id)
},
actions: {
  deleteEvent(events) {
    events.destroyRecord()
      .then(()=> this.transitionTo('events'))
      .then(() => this.get('flashMessages').success('Event Deleted!'))
      .catch(() => {
        this.get('flashMessages')
        .danger('There was a problem. Please try again.');
    })
  },
  editEvent(events) {
    events.save()
    .then(() => this.get('flashMessages').success('Event Updated!'))
    .catch(() => {
      this.get('flashMessages')
      .danger('There was a problem. Please try again.');
  })
  }
}
});
