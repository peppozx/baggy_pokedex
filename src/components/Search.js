import React, { Component } from "react";
import "../styles/search.css";

import axios from "axios";

import { connect } from "react-redux";
import * as PokeActions from "../store/actions/pokedex";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemons: []
    };
  }
  getPokemons = () => {
    this.props.loadPokemons(true);
    return axios
      .get("http://desafiobagy.herokuapp.com/pokedex")
      .then(res => res.data)
      .then(data => {
        this.props.setPokemons(data);
        setTimeout(() => {
          this.props.loadPokemons(false);
        }, 1500);
      });
  };
  // componentDidMount() {
  //   this.getPokemons();
  // }
  render() {
    return (
      <div className="my-search">
        <div className="listar-pokemons" onClick={this.getPokemons}>
          <span>Listar</span>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  pokemons: state.pokedex.pokemons
});

const mapDispatchToProps = dispatch => ({
  setPokemons: pokelist => dispatch(PokeActions.setPokemons(pokelist)),
  loadPokemons: isLoading => dispatch(PokeActions.loadingPokemons(isLoading))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
