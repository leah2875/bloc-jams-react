import React, { Component } from "react";
import albumData from "./../data/albums";

class Album extends Component {
  constructor(props) {
    super(props);

    const album = albumData.find(album => {
      return album.slug === this.props.match.params.slug;
    });

    this.state = {
      album: album,
    };
  }
  render() {
    return (
      <section className='album'>
        {this.props.match.params.slug} Album will go here
        <section id='album-info'>
          <img
            id='album-cover-art'
            src={this.state.album.albumCover}
            alt={this.state.album.title}
          />
          <div className='album-details'>
            <h1 id='album-title'>{this.state.album.title}</h1>
            <h2 className='artist'>{this.state.album.artist}</h2>
            <div id='release-info'>{this.state.album.releaseInfo}</div>
          </div>
        </section>
        <table id='song-list'>
        {this.state.albums.songs.map((songs, index) => (
        return (
          <colgroup>
            <col id='song-number-column' {this.state.album.songs.index}/>
            <col id='song-title-column' {this.state.album.songs.title}/>
            <col id='song-duration-column' {this.state.album.songs.duration}/>
          </colgroup>))}
          <tbody />
        </table>
      </section>
    );
  }
}

export default Album;
