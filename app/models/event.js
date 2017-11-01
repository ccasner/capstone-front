import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  hidden: DS.attr('boolean'),
  location: DS.attr('string'),
  date: DS.attr('date'),
  time: DS.attr('time'),
  seats: DS.attr('integer'),
  body: DS.attr('text')
});
