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
    let type = randomThing([0, 1, 2]);
    let startupText = '';
    let startupTextForComponent = '';
    switch(type) {
        case 0:
            startupText = randomThing(businessModels) + ' for ' + pluralize(randomThing(nouns));
            startupTextForComponent = startupText + ' 💸';
            return {
                startupText: startupText,
                startupTextForComponent: startupTextForComponent
            };
        case 1:
            startupText = randomThing(technologies) + ' for ' + pluralize(randomThing(nouns));
            startupText = startupText.charAt(0).toUpperCase() + startupText.slice(1);
            startupTextForComponent = startupText + ' 💸';
            return {
                startupText: startupText,
                startupTextForComponent: startupTextForComponent
            };
        case 2:
            let randomNoun = randomThing(nouns);
            let randomNounLowercase = randomNoun;
            let randomNounCapitalized = randomNoun.charAt(0).toUpperCase() + randomNoun.slice(1);
            startupText = randomNounCapitalized + 'Coin: Blockchain for ' + pluralize(randomNounLowercase);
            startupTextForComponent = (
                <div>
                    <div>{randomNounCapitalized + 'Coin:'}</div>
                    <div>Blockchain for {pluralize(randomNounLowercase)}</div>
                    <div>💸</div>
                </div>
            );
            return {
                startupText: startupText,
                startupTextForComponent: startupTextForComponent
            };
        // case 3:
        //     let firstRandomTechnology = randomThing(technologies);
        //     let secondRandomTechnology = firstRandomTechnology;
        //     while (secondRandomTechnology === firstRandomTechnology) {
        //         secondRandomTechnology = randomThing(technologies);
        //     }
        //     firstRandomTechnology = firstRandomTechnology.charAt(0).toUpperCase() + firstRandomTechnology.slice(1);
        //     secondRandomTechnology = secondRandomTechnology.charAt(0).toUpperCase() + secondRandomTechnology.slice(1);
        //     startupText = firstRandomTechnology + ' + ' + secondRandomTechnology;
        //     startupTextForComponent = (
        //         <div>
        //             <div>{firstRandomTechnology}</div>
        //             <div>+</div>
        //             <div>{secondRandomTechnology}</div>
        //             <div>💸</div>
        //         </div>
        //     );
        //     return {
        //         startupText: startupText,
        //         startupTextForComponent: startupTextForComponent
        //     };
        default:
            return 'Error 😕';
    }
    
}