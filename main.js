// import {charactersBuilder} from './javascripts/components/characters.js';
import {getCharacters} from './javascripts/data/charactersData.js';
import {sortEvent} from './javascripts/components/characters.js';

const initializeApp = () => {
    sortEvent();
    getCharacters();
    // charactersBuilder();
}
initializeApp();