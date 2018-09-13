import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Lista de Músicas</h1>
        </header>
        <div className="Container">
          <div className="Card">
            <div className="Card-title">
              <span>Fácil</span>
            </div>
            <div className="Second-card">
              <div className="Card-body">
                  <div className="Music" >
                  <span className="Music-name">Tardei -</span> 
                  <span className="Music-author"><span> Rodrigo Amarante</span></span>
                  </div>
                  <ul className="Extras">
                    <li className="Extras-files">
                      <a className="Spotify-link" href="https://open.spotify.com/track/3TDjBlGmhlY4ZGdLDLzu2T?si=i3e2KHWpROmKnWe7y8oDQw" target="_blank">
                        Spotify
                      </a>
                    </li>
                    <li className="Extras-files"><a  className="Youtube-link">Youtube</a></li>
                    <li className="Extras-files"><a className="Chords-link">Cifra</a></li>
                  </ul>
              </div>
            </div>
            <div className="Second-card">
              <div className="Card-body">
                  <div className="Music" >
                  <span className="Music-name">Irene -</span> 
                  <span className="Music-author"><span> Rodrigo Amarante</span></span>
                  </div>
                  <ul className="Extras">
                    <li className="Extras-files">
                      <a className="Spotify-link" href="https://open.spotify.com/track/4vTwptJibfIVDIMftJT2ZE?si=K8QQlMiLSTWwI2GhItzWKQ" target="_blank">
                      Spotify
                      </a>
                    </li>
                    <li className="Extras-files">
                      <a  className="Youtube-link">
                        Youtube
                      </a>
                    </li>
                    <li className="Extras-files">
                      <a className="Chords-link">
                        Cifra
                      </a>
                    </li>
                  </ul>
              </div>
            </div>
            <div className="Second-card">
              <div className="Card-body">
                  <div className="Music" >
                  <span className="Music-name">Tonight You Belong to Me -</span> 
                  <span className="Music-author"><span> Eddie Vedder</span></span>
                  </div>
                  <ul className="Extras">
                    <li className="Extras-files">
                    <a className="Spotify-link" href="https://open.spotify.com/track/63m3fusWaHBnB3isFfAlRd?si=CIXSzjf1Q9yNDsedCgHs2w" target="_blank">
                      Spotify
                    </a>
                    </li>
                    <li className="Extras-files"><a  className="Youtube-link">Youtube</a></li>
                    <li className="Extras-files"><a className="Chords-link">Cifra</a></li>
                  </ul>
              </div>
            </div>
            <div className="Second-card">
              <div className="Card-body">
                  <div className="Music" >
                  <span className="Music-name">Can't Help Falling in Love -</span> 
                  <span className="Music-author"><span> Elvis Presley</span></span>
                  </div>
                  <ul className="Extras">
                    <li className="Extras-files">
                      <a className="Spotify-link" href="https://open.spotify.com/track/44AyOl4qVkzS48vBsbNXaC?si=aPStqbuQQVq4b7PZ9Y015w" target="_blank">
                        Spotify
                      </a>
                    </li>
                    <li className="Extras-files"><a  className="Youtube-link">Youtube</a></li>
                    <li className="Extras-files"><a className="Chords-link">Cifra</a></li>
                  </ul>
              </div>
            </div>
            <div className="Second-card">
              <div className="Card-body">
                  <div className="Music" >
                  <span className="Music-name">Ain't no Sunshine -</span> 
                  <span className="Music-author"><span> Bill Withers</span></span>
                  </div>
                  <ul className="Extras">
                    <li className="Extras-files">
                      <a className="Spotify-link" href="https://open.spotify.com/track/1k1Bqnv2R0uJXQN4u6LKYt?si=O0gIjmlJR5-8q41wfbOY4A" target="_blank">
                        Spotify
                      </a>
                    </li>
                    <li className="Extras-files"><a  className="Youtube-link">Youtube</a></li>
                    <li className="Extras-files"><a className="Chords-link">Cifra</a></li>
                  </ul>
              </div>
            </div>
          </div>
          
          <div className="Card">
          <div className="Card-title">
            <span>Médio</span>
            </div>
            <div className="Card-body">
                
            </div>
          </div> 
          <div className="Card">
          <div className="Card-title">
            <span>Difícil</span>
            </div>
            <div className="Card-body">
                
            </div>
          </div>  
        </div>
      </div>
    );
  }
}

export default App;
