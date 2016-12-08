import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  userid: faker.random.number,
  title: faker.lorem.words,
  description: faker.lorem.sentence
});
