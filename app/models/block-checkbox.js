import DS from 'ember-data';

export default DS.Model.extend({
  clauseBlock: DS.belongsTo('clause-block'),
  menuText: DS.attr('string'),
  orderNumber: DS.attr('number'),
  defaultTrue: DS.attr('boolean'),

});
