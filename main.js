// import {charactersBuilder} from './javascripts/components/characters.js';
import {getCharacters} from './javascripts/data/charactersData.js';

const initializeApp = () => {
    getCharacters();
    // charactersBuilder();
}
initializeApp();