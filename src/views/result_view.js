const PubSub = require('../helpers/pub_sub.js');

const ResultView = function(){

}

ResultView.prototype.bindEvents = function(){
  console.log("resultView log");

  PubSub.subscribe("InstrumentFamilies:instrument-all" , (event) =>{
  const instrumentDetails  = event.detail;
  console.log("has instrument family", instrumentDetails);
});
}

ResultView.prototype.displayInstrumentFamily = function(){
  console.log("hjj", );
}

module.exports = ResultView;
