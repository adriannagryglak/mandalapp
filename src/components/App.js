import React from "react";

import DarkMode from './DarkMode';
import MandalaControl from "./MandalaControl.js";
import logoImg from "../images/logo.jpg";


export default class App extends React.Component{

    constructor(props){
        super(props);
        this.state={
            isDark: false,
        }
    };

    handleClickDarkMode(){
        this.setState({isDark: !this.state.isDark});
    };

    render(){
        return (
                <>
                <section className="hero"> 
                    <DarkMode caption="it cannot always be" 
                              isDark={this.state.isDark} 
                              onClick={()=>{this.handleClickDarkMode()}}
                    />
                    <img className="logo" alt="logo-img" src={logoImg}/>  
                    <h1>together we'll create magic</h1>
                    <p>welcome and lets create your own mandala</p>
                    <h2>let's start</h2>
                </section>
                <main>
                    <div className="mandala-preview"></div>
                    <MandalaControl />
                    <h2>let's show</h2>
                </main>
                <section className="mandala-display">
                    <div></div>
                    <button>downolad jpg file !</button>
                    <DarkMode isDark={this.state.isDark}
                              onClick={()=>{this.handleClickDarkMode()}}
                    />
                </section>
                <footer>adriana learning react process started here</footer>
                </>  
            );
    }
   
}
