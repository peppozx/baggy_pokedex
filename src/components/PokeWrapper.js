import React, { Component } from "react";
import "../styles/pokewrapper.css";
import spinner from "../icons/my-spinner.gif";
import PokeItem from "./PokeItem.js";

import { connect } from "react-redux";
import * as PokeActions from "../store/actions/pokedex";

class PokeWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  listPokemons() {
    return this.props.pokemons.map(pokemon => (
      <PokeItem key={pokemon.id} pokemon={pokemon} />
    ));
  }
  listFilteredPokemons() {
    return this.props.filteredPokemons.map(pokemon => (
      <PokeItem key={pokemon.id} pokemon={pokemon} />
    ));
  }
  loadNormalPokemons() {
    return this.props.loadingPokemons ? (
      <img src={spinner} />
    ) : (
      this.listPokemons()
    );
  }
  loadFilteredPokemons() {
    return this.props.loadingPokemons ? (
      <img src={spinner} />
    ) : (
      this.listFilteredPokemons()
    );
  }
  render() {
    return (
      <div className="my-wrapper">
        {!this.props.isFilteredPokemons
          ? this.loadNormalPokemons()
          : this.loadFilteredPokemons()}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  pokemons: state.pokedex.pokemons,
  loadingPokemons: state.pokedex.loadingPokemons,
  isFilteredPokemons: state.pokedex.isFilteredPokemons,
  filteredPokemons: state.pokedex.filteredPokemons
});

const mapDispatchToProps = dispatch => ({
  setPokemons: pokelist => dispatch(PokeActions.setPokemons(pokelist))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PokeWrapper);
