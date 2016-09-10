import DS from 'ember-data';

export default DS.Model.extend({
  clauseBlock: DS.belongsTo('clause-block'),
  text: DS.attr('string'),
  title: DS.attr('string'),

});
