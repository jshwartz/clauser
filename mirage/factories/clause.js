import { Factory } from 'ember-cli-mirage';

export default Factory.extend({
  name(i) {
    return `Clause ${i} descriptive name`;
  },
  title(i) {
    return `Clause ${i}`;
  },

});
