const PubSub = require('../helpers/pub_sub.js');

const SelectedView  = function(){

};

SelectedView.prototype.bindEvents = function(){
  console.log("bananna1");

  const listOfInstruments = document.querySelector('#instrument-families');
  listOfInstruments.addEventListener('change', (event) => {
  const selectedInstrument = event.target.value;
  console.log("has instrument", selectedInstrument);
  PubSub.publish("SelectedView:selected-instrument", selectedInstrument);

  })
}

module.exports = SelectedView;
