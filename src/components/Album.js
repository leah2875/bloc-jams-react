import React, { Component } from "react";
import albumData from "./../data/albums";
import PlayerBar from "./PlayerBar";
import albums from "./../data/albums";

class Album extends Component {
  constructor(props) {
    super(props);

    const album = albumData.find(album => {
      return album.slug === this.props.match.params.slug;
    });

    this.state = {
      album: album,
      currentSong: album.songs[0],
      currentTime: 0,
      duration: album.songs[0].duration,
      isPlaying: false,
      isHovered: false,
      currentVolume: 0,
    };

    this.audioElement = document.createElement("audio");
    this.audioElement.src = album.songs[0].audioSrc;
  }

  componentDidMount() {
    this.eventListeners = {
      timeupdate: e => {
        this.setState({ currentTime: this.audioElement.currentTime });
      },
      durationchange: e => {
        this.setState({ duration: this.audioElement.duration });
      },
      volumechange: e => {
        this.setState({ currentVolume: this.audioElement.currentVolume });
      },
    };
    this.audioElement.addEventListener("volumechange", this.eventListeners.volumechange);
    this.audioElement.addEventListener("timeupdate", this.eventListeners.timeupdate);
    this.audioElement.addEventListener("durationchange", this.eventListeners.durationchange);
  }

  componentWillUnmount() {
    this.audioElement.src = null;
    this.audioElement.removeEventListener("timeupdate", this.eventListeners.timeupdate);
    this.audioElement.removeEventListener("durationchange", this.eventListeners.durationchange);
    this.audioElement.removeEventListener("volumechange", this.eventListeners.volumechange);
  }

  play() {
    this.audioElement.play();
    this.setState({ isPlaying: true });
  }

  pause() {
    this.audioElement.pause();
    this.setState({ isPlaying: false });
  }

  setSong(song) {
    this.audioElement.src = song.audioSrc;
    this.setState({ currentSong: song });
  }

  handleSongClick(song) {
    const isSameSong = this.state.currentSong === song;
    if (this.state.isPlaying && isSameSong) {
      this.pause();
    } else {
      if (!isSameSong) {
        this.setSong(song);
      }
      this.play();
    }
  }

  onHover(index) {
    this.setState({ isHovered: index });
  }

  offHover() {
    this.setState({ isHovered: false });
  }

  hoverIcon(song, index) {
    const isSameSong = this.state.currentSong === song;
    if (this.state.isHovered === index) {
      return <span className='icon ion-md-play' />;
    } else if (this.state.isPlaying && isSameSong) {
      return <span className='icon ion-md-pause' />;
    } else {
      return <span className='song-number'>{index + 1}</span>;
    }
  }

  handlePrevClick() {
    const currentIndex = this.state.album.songs.findIndex(song => this.state.currentSong === song);
    const newIndex = Math.max(0, currentIndex - 1);
    const newSong = this.state.album.songs[newIndex];
    this.setSong(newSong);
    this.play();
  }

  handleNextClick() {
    const currentIndex = this.state.album.songs.findIndex(song => this.state.currentSong === song);
    const nextIndex = Math.min(this.state.album.songs.length, currentIndex + 1);
    const newSong = this.state.album.songs[nextIndex];
    if (!this.state.isPlaying) {
      return null;
    }
    if (!newSong) {
      return null;
    }
    this.setSong(newSong);
    this.play();
  }

  handleTimeChange(e) {
    const newTime = this.audioElement.duration * e.target.value;
    this.audioElement.currentTime = newTime;
    this.setState({ currentTime: newTime });
  }

  handleVolumeChange(e) {
    const newVolume = e.target.value;
    this.audioElement.volume = newVolume;
    this.setState({ currentVolume: newVolume });
  }

  formatTime(secondsTotal) {
    if (secondsTotal < 10) {
      return Math.floor(secondsTotal / 60) + ":0" + Math.floor(secondsTotal % 60);
    } else {
      return Math.floor(secondsTotal / 60) + ":" + Math.floor(secondsTotal % 60);
    }
  }

  render() {
    return (
      <section className='album'>
        <section id='album-info'>
          <img
            id='album-cover-art'
            src={this.state.album.albumCover}
            alt={this.state.album.title}
          />
          <table id='song-list'>
            <colgroup>
              <col id='song-number-column' />
              <col id='song-title-column' />
              <col id='song-duration-column' />
            </colgroup>
            <tbody>
              {this.state.album.songs.map((song, index) => (
                <tr
                  className='song'
                  key={index}
                  onClick={() => this.handleSongClick(song)}
                  onMouseEnter={() => this.onHover(index)}
                  onMouseLeave={() => this.offHover()}
                >
                  <td className='song-number'>{this.hoverIcon(song, index)}</td>
                  <td className='song-title'>{song.title}</td>
                  <td className='song-duration'>{this.formatTime(song.duration)}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className='album-details'>
            <h1 id='album-title'>{this.state.album.title}</h1>
            <h2 className='artist'>{this.state.album.artist}</h2>
            <div id='release-info'>{this.state.album.releaseInfo}</div>
          </div>
        </section>
        <div className='player-bar'>
          <PlayerBar
            isPlaying={this.state.isPlaying}
            currentSong={this.state.currentSong}
            currentTime={this.audioElement.currentTime}
            duration={this.audioElement.duration}
            handleSongClick={() => this.handleSongClick(this.state.currentSong)}
            handlePrevClick={() => this.handlePrevClick()}
            handleNextClick={() => this.handleNextClick()}
            handleTimeChange={e => this.handleTimeChange(e)}
            handleVolumeChange={e => this.handleVolumeChange(e)}
            formatTime={e => this.formatTime(e)}
          />
        </div>
      </section>
    );
  }
}

export default Album;
