import React from "react";
import { connect } from "react-redux";
import selectSong from "../actions/index";
function SongList(props) {
  const { songs } = props;
  return (
    <div>
      {songs.map((song) => (
        <div key={song.duration} className="song">
          {song.title}
        </div>
      ))}
    </div>
  );
}

const mapStateToProps = (state) => {
  return { songs: state.songs };
};

export default connect(mapStateToProps, { selectSong })(SongList);
