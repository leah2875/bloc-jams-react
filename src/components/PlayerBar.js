import React, { Component } from "react";

class PlayerBar extends Component {
  render() {
    return (
      <section className='player-bar'>
        <section id='buttons'>
          <button id='previous' onClick={this.props.handlePrevClick}>
            <span className='icon ion-md-skip-backward' />
          </button>
          <button id='play-pause' onClick={this.props.handleSongClick}>
            <span className={this.props.isPlaying ? "icon ion-md-pause" : "icon ion-md-play"} />
          </button>
          <button id='next' onClick={this.props.handleNextClick}>
            <span className='icon ion-md-skip-forward' />
          </button>
        </section>
        <section id='time-control'>
          <div className='current-time'>–:––</div>
          <input type='range' className='seek-bar' value='0' />
          <div className='total-time'>–:––</div>
        </section>
        <section id='volume-control'>
          <div className='icon ion-volume-low' />
          <input type='range' className='seek-bar' value='80' />
          <div className='icon ion-volume-high' />
        </section>
      </section>
    );
  }
}

export default PlayerBar;