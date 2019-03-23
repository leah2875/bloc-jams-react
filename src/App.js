import React, { Component } from "react";
import "./index.css";
import { Route, Link } from "react-router-dom";
import Landing from "./components/Landing";
import Library from "./components/Library";
import Album from "./components/Album";

class App extends Component {
  render() {
    return (
      <div className='App'>
        <h1 id='title'>
          <Link to='/'>Bloc Jams</Link>
        </h1>
        <div id='wrapper' />
        <div className='flex-wrapper'>
          <div className='container'>
            <main>
              <Route exact path='/' component={Landing} />
              <Route path='/library' component={Library} />
              <Route path='/album/:slug' component={Album} />
            </main>
          </div>
          <div id='footer-wrapper'>
            <div className='footer'>
              <p>
                {" "}
                <img src={"headphones.png"} alt='headphones' />
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
