const printToDom = (stringToPrint, divId) => {
    const selectedDiv = document.getElementById('characters');
    selectedDiv.innerHTML = `<h6>${stringToPrint}</h6>`;
};
export{printToDom};