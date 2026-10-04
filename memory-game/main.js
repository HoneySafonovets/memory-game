import makeBasicLayout from './js/makeBAsicLayout.js';
import makeBtnInHeader from './js/makeBtnInHeader.js';
import makeRenderCardImMain from './js/makeRenderCardInMain.js';
import renderCounts from './js/renderCounts.js';

function App() {
  makeBasicLayout();
  makeBtnInHeader();
  renderCounts();
  makeRenderCardImMain();
}

App();