import './App.scss';
import RouteTree from './Routes';
import Footer from './Layouts/Footer/Footer';
import Header from './Layouts/Header/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <RouteTree/>
      <Footer/>
    </div>
  );
}

export default App;
