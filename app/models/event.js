import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  hidden: DS.attr('boolean'),
  location: DS.attr('string'),
  date: DS.attr('date'),
  time: DS.attr('date'),
  seats: DS.attr('number'),
  body: DS.attr('string'),
  user: DS.belongsTo('user')
});
