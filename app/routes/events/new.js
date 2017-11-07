import Ember from 'ember';

export default Ember.Route.extend({
  auth: Ember.inject.service(),
  flashMessages: Ember.inject.service(),

  user: Ember.computed.alias('auth.credentials.email'),
  isAuthenticated: Ember.computed.alias('auth.isAuthenticated'),

  activate () {
    if (!this.get('isAuthenticated')) {
      this.transitionTo('sign-in');
    }
  },
  actions: {
    createEvent(events){
      let newEvent = this.get('store').createRecord('event', events)
      newEvent.save()
      this.transitionTo('events')
        .then(() => this.get('flashMessages').success('Event Created!'))
        .catch(() => {
          this.get('flashMessages')
          .danger('There was a problem. Please try again.');
      })
    }
  }
});
