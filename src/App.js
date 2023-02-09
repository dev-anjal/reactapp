import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import MainBody from './components/MainBody';

function App() {
  return (
 <>
 <Header />
 <div className="midsection">
  this is basic mid section of the body of first page
  <a href="header.jsx">pubg</a>
 </div>
 <MainBody />
 </>
  )
}

export default App;
