import React from 'react';
import './App.css';
import Header from "./components/header/Header";
import Main from "./components/main/main";
import Skills from "./components/skills/Skills";
import Projects from "./components/myProjects/Projects";
import DistanceWorkBlock from "./components/distanceWorkBlock/DistanceWorkBlock";
import Contacts from "./components/contacts/Contacts";
import Footer from "./components/footer/Footer";
import Sidebar from "./components/sidebar/Sidebar";


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
