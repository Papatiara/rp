import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Slider from './components/Slider';
import Banners from './components/Banners'
import Buttons from './components/Buttons'
import Indicators from './components/Indicators'



function App() {
    return (
        <div className="body">
            <div className="App" >
                <header className="App-header" >
                    <Navbar />
                </header>
                <div className="slides">
                    <Slider />
                    <Buttons />
                    <Banners />
                </div>
                <Indicators />
            </div>
        </div>
    );
}

export default App;