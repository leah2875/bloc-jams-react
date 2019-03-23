import React from "react";
import { Route, Link } from "react-router-dom";
import Library from "./Library";

const Landing = () => (
  <div className='App'>
    <div id='wrapper' />
    <div class='flex-wrapper'>
      <div class='container'>
        <section className='landing'>
          <Route path='/library' component={Library} />
          <div className='box'>
            <div className='landing-content'>
              <h1 className='hero-title'>Turn the music up!</h1>
              <br />
              <section className='selling-points'>
                <div className='point'>
                  <h2 className='point-title'>Choose your music</h2>
                  <p className='point-description'>
                    The world is full of music; why should you have to listen to music that someone
                    else chose?
                  </p>
                </div>
                <div className='point'>
                  <h2 className='point-title'>Unlimited, streaming, ad-free</h2>
                  <p className='point-description'>No arbitrary limits. No distractions.</p>
                </div>
                <div className='point'>
                  <h2 className='point-title'>Mobile enabled</h2>
                  <p className='point-description'>
                    Listen to your music on the go. This streaming service is available on all
                    mobile platforms.
                  </p>
                </div>
              </section>
            </div>
          </div>
          <div class='navbar'>
            <h1 class='nav-box'>
              <Link to='/library'>
                <div class='img-container'>
                  <div class='img1'>
                    <img
                      src='assets/bloc-jams-assets/images/album_covers/01.jpg'
                      title='Example Image Link'
                      width='150'
                      height='150'
                    />
                    <div class='middle'>
                      <div class='middle-text'>Library</div>
                    </div>
                  </div>
                </div>
              </Link>

              <Link to='/library'>
                <div class='img-container'>
                  <div class='img2'>
                    <img
                      src='assets/bloc-jams-assets/images/album_covers/02.jpg'
                      title='Example Image Link'
                      width='150'
                      height='150'
                    />
                    <div class='middle'>
                      <div class='middle-text'>Library</div>
                    </div>
                  </div>
                </div>
              </Link>
            </h1>
          </div>
        </section>
      </div>
    </div>
  </div>
);

export default Landing;
