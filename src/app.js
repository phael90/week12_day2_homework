const SelectedView = require('./views/selected_view.js');
const InstrumentFamilies = require('./models/instrument_families.js');
const ResultView = require('./views/result_view.js');

document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');

  const selectedView = new SelectedView();
  selectedView.bindEvents();

  const instrumentFamilies = new InstrumentFamilies();
  instrumentFamilies.bindEvents();

  const resultView = new ResultView();
  resultView.bindEvents();
});
