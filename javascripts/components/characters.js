import { printToDom } from "../helpers/util.js";

const characters = [
{name:"poiuy", house:"iyieue", imageUrl:"kljklk.jphj"},
{name:"reewse", house:"iyieue", imageUrl:"kljklk.jphj"},
{name:"wert", house:"iyieue", imageUrl:"kljklk.jphj"},
{name:"tyijh", house:"iyieue", imageUrl:"kljklk.jphj"},
];

const charactersBuilder = () => {
let domString = '';
characters.forEach((character) => {
    domString += `<h1>${character.name}</h1>`;
});
printToDom(domString)
};
export default{charactersBuilder};