import makeBasicLayout from './js/makeBasicLayout.js';
import makeBtnInHeader from './js/makeBtnInHeader.js';
import makeRenderCardImMain from './js/makeRenderCardInMain.js';
import renderCounts from './js/renderCounts.js';
import modalWin from './js/modalWin.js';

function App() {
  makeBasicLayout();
  makeBtnInHeader();
  renderCounts();
  makeRenderCardImMain();
}

App();