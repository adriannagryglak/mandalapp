import React from "react";
import MiddlePanel from "./MiddlePanel";
import DarkMode from './DarkMode';


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
                    <img className="logo"/>  
                    <h1>Hi its MANDALAPP</h1>
                    <p>you here will create something beautfil in your own way</p>
                    <h2>let's start</h2>
                </section>
                <main>
                    <div className="mandala-preview"></div>
                    <MiddlePanel />
                    <button>add layer +</button>
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
