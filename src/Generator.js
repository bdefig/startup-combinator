import React from 'react';
import { businessModels } from './BusinessModels';
import { nouns } from './Nouns';
import { technologies } from './Technologies';
const pluralize = require('pluralize');
const ReactFitText = require('react-fittext');

function randomThing(things) {
    return things[Math.floor(Math.random() * things.length)];
}

export function generateStartup() {
    let type = randomThing([0, 1, 2, 3]);
    let startupText = '';
    switch(type) {
        case 0:
            startupText = randomThing(businessModels) + ' for ' + pluralize(randomThing(nouns)) + ' 💸';
            return startupText;
        case 1:
            startupText = randomThing(technologies) + ' for ' + pluralize(randomThing(nouns)) + ' 💸';
            startupText = startupText.charAt(0).toUpperCase() + startupText.slice(1);
            return startupText;
        case 2:
            let firstRandomTechnology = randomThing(technologies);
            let secondRandomTechnology = firstRandomTechnology;
            while (secondRandomTechnology === firstRandomTechnology) {
                secondRandomTechnology = randomThing(technologies);
            }
            firstRandomTechnology = firstRandomTechnology.charAt(0).toUpperCase() + firstRandomTechnology.slice(1);
            secondRandomTechnology = secondRandomTechnology.charAt(0).toUpperCase() + secondRandomTechnology.slice(1);
            return (
                <div>
                    <div>{firstRandomTechnology}</div>
                    <div>+</div>
                    <div>{secondRandomTechnology}</div>
                    <div>💸</div>
                </div>
            );
        case 3:
            let randomNoun = randomThing(nouns);
            let randomNounLowercase = randomNoun;
            let randomNounCapitalized = randomNoun.charAt(0).toUpperCase() + randomNoun.slice(1);
            // return randomNoun + 'Coin 💸';
            return (
                <div>
                    <div>{randomNounCapitalized + 'Coin:'}</div>
                    <div>Blockchain for {pluralize(randomNounLowercase)}</div>
                    <div>💸</div>
                </div>
            )
        default:
            return 'Error 😕';
    }
    
}