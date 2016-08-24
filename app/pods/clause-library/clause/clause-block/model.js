import DS from 'ember-data';

export default DS.Model.extend({
  clause: DS.belongsTo('clause'),
  type: DS.attr('string'),
  menu: DS.attr('string'),
  staticText: DS.attr('string'),
  helpText: DS.attr('string'),
  defaultActive: DS.attr('boolean', { defaultValue: false }),
  toggleOn: DS.attr('boolean', { defaultValue: true }),
  orderNumber: DS.attr('number'),



});
