import { businessModels } from './BusinessModels';
import { nouns } from './Nouns';
const pluralize = require('pluralize');

function randomThing(things) {
    return things[Math.floor(Math.random() * things.length)];
}

export function generateStartup() {
    return randomThing(businessModels) + ' for ' + pluralize(randomThing(nouns)) + ' 💸';
}