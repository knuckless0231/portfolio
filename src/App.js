import React from 'react';
import './App.css';
import Header from "./header/Header";
import Main from "./main/main";
import Skills from "./skills/Skills";
import Projects from "./myProjects/Projects";
import DistanceWorkBlock from "./distanceWorkBlock/DistanceWorkBlock";
import Contacts from "./contacts/Contacts";
import Footer from "./footer/Footer";


function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
            <Projects />
            <DistanceWorkBlock/>
            <Contacts/>
            <Footer/>
        </div>
    );
}

export default App;
