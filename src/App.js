import './App.css';
import Header from "./components/Header";
import Exchange from "./components/Exchange";
import News from "./components/News";
import Partners from "./components/Partners";
import About from "./components/About";
import Footer from "./components/Footer";

function App() {
    return (
        <div className="App">
            <Header/>
            <Exchange/>
            <News/>
            <Partners/>
            <About/>
            <Footer/>
        </div>
    );
}

export default App;
