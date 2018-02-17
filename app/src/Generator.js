import React from 'react';
import { businessModels } from './BusinessModels';
import { nouns } from './Nouns';
import { technologies } from './Technologies';
const pluralize = require('pluralize');

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
            startupTextForComponent = (
                <div>
                    {startupText + ' '}<span role='img' aria-label='Cash money'>💸</span>
                </div>
            );
            return {
                startupText: startupText,
                startupTextForComponent: startupTextForComponent
            };
        case 1:
            startupText = randomThing(technologies) + ' for ' + pluralize(randomThing(nouns));
            startupText = startupText.charAt(0).toUpperCase() + startupText.slice(1);
            startupTextForComponent = (
                <div>
                    {startupText + ' '}<span role='img' aria-label='Cash money'>💸</span>
                </div>
            );
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
                    <div><span role='img' aria-label='Cash money'>💸</span></div>
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
            startupText = 'Loggly for errors';
            startupTextForComponent = (
                <div>
                    <div>Loggly for errors <span role='img' aria-label='Sorry about that'>😕</span></div>
                </div>
            );
            return {
                startupText: startupText,
                startupTextForComponent: startupTextForComponent
            };
    }
}