import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Slider from './components/Slider';
import Detail from './components/Detail';
import Products from './components/Products';
import Find from './components/Find';
import Client from './components/Client';
import Sign from './components/Sign';
import Info from './components/Info';
import Footer from './components/Footer';


function App() {
  return (
    <>
      <div className="hero_area">
        {/* header section strats */}
        <Header />
        {/* end header section */}
        {/* slider section */}
        <Slider />
        {/* end slider section */}
      </div>
      {/* detail section */}
      <Detail />
      {/* end detail section */}
      {/* products section */}
      <Products/>
        {/* end products section */}
        {/* find section */}
        <Find />
      {/* end find section */}
      {/* client section */}
      <Client/>
      {/* end client section */}
      {/* sign section */}
      <Sign/>
      {/* end sign section */}
      {/* info section */}
      <Info/>
      {/* end info section */}
      {/* footer section */}
      <Footer/>
    </>

  );
}

export default App;
