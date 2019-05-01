import React from "react";
import { connect } from "react-redux";

import Player from "./player.js";

import * as actions from "../store/players-actions.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null,
      patch:false
    };
  }
  patchPlayer = id => {
    this.setState({ id })
    this.setstate({patch:true})  }
  deletePlayer = id => {
    this.props.handleDelete(id);
  };

  editPlayer = id => {
    this.setState({ id });
    this.setstate({patch:false})
  };
  newPlayer = () => {
    this.setState({ id: null })
    this.setstate
  }
  render() {
    return (
      <div>
        <h2>Players</h2>
        <ul>
          {this.props.players.map((player, idx) => (
            <li key={idx}>
              {player.name}
              <button onClick={() => this.editPlayer(idx)}>Edit</button>
              <button onClick={() => this.patchPlayer(idx)}>Patch</button>
              <button onClick={() => this.deletePlayer(idx)}>Delete</button>
            </li>
          ))}
        </ul>
        <button onClick={() => this.newPlayer(idx)}>New Player</button>
        <Player id={this.state.id} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  players: state.players
});

const mapDispatchToProps = (dispatch, getState) => ({
  handleDelete: id => dispatch(actions.destroy(id)),
  handleEdit: id => dispatch(actions.get(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);