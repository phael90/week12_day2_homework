const PubSub = require('../helpers/pub_sub.js');

const ResultView = function(){

}

ResultView.prototype.bindEvents = function(){
  console.log("resultView log");

  PubSub.subscribe("InstrumentFamilies:instrument-all" , (event) =>{
    const instrumentFamilyDetails  = event.detail;
    this.displayDescription(instrumentFamilyDetails);
    this.displayListOfInstruments(instrumentFamilyDetails);
    console.log("has instrument family", instrumentFamilyDetails);
  });
}

ResultView.prototype.displayDescription = function(instrumentFamilyDetails){
  console.log('has instrumentFamilyDetails', instrumentFamilyDetails);
  const descriptionDetails = document.querySelector('#description-result');
  console.log("co to jest", descriptionDetails);
  descriptionDetails.textContent = `${instrumentFamilyDetails.description}`;
};

ResultView.prototype.displayListOfInstruments = function(instrumentFamilyDetails){
  console.log("has details", instrumentFamilyDetails);
  const instrumentsFamilyList = document.querySelector('#instruments-list');
  console.log("has something");

  const instruments = instrumentFamilyDetails.instruments;
  const listUl = document.querySelector('#instruments-list');

  while (listUl.firstChild){
    listUl.removeChild(listUl.firstChild);
  }

  for (let i = 0; i < instruments.length; i++) {
    let listItem = document.createElement('li');
    listItem.textContent = `${instruments[i]}`;
    listItem.classList.add("listItem");
    listUl.appendChild(listItem);
  }
};

module.exports = ResultView;
