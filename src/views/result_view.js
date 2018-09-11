const PubSub = require('../helpers/pub_sub.js');

const ResultView = function(){

}

ResultView.prototype.bindEvents = function(){
  console.log("resultView log");

  PubSub.subscribe("InstrumentFamilies:instrument-all" , (event) =>{
    const instrumentFamilyDetails  = event.detail;
    this.render(instrumentFamilyDetails);
    console.log("has instrument family", instrumentFamilyDetails);
  });
}

ResultView.prototype.render = function(instrumentFamilyDetails){
  console.log('has instrumentFamilyDetails', instrumentFamilyDetails);
  const descriptionList = document.querySelector('#result');
  console.log("co to jest", descriptionList);
  // const paragraph = document.createElement('p');
  descriptionList.textContent = `${instrumentFamilyDetails.description}`;
};

module.exports = ResultView;
