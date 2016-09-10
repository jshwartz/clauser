import { Model, belongsTo, hasMany } from 'ember-cli-mirage';

export default Model.extend({
  clause: belongsTo(),
  blockDropdowns: hasMany(),
  blockCheckboxes: hasMany(),
  blockCheckboxChoices: hasMany()
});
