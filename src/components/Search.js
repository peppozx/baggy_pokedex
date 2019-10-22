import React, { Component } from "react";
import "../styles/search.css";

import axios from "axios";

import { connect } from "react-redux";
import * as PokeActions from "../store/actions/pokedex";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemons: [],
      name: "",
      filterType: "name"
    };
  }
  getPokemons = () => {
    this.props.loadPokemons(true);
    this.props.setFilter(false);
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
  getFilteredPokemons = (name, type) => {
    this.props.setFilter(true);
    this.props.loadPokemons(true);
    this.props.filterPokemons(name, type);
    setTimeout(() => {
      this.props.loadPokemons(false);
    }, 1500);
  };
  setName = e => {
    this.setState({
      ...this.state,
      name: e.target.value
    });
  };
  // componentDidMount() {
  //   this.getPokemons();
  // }
  filterPokemonsByName = name => {
    this.props.loadPokemons(true);
    this.props.filterPokemons(this.state.name);
    setTimeout(() => {
      this.props.loadPokemons(false);
    }, 1000);
  };
  selectFilterType = e => {
    this.setState({
      ...this.state,
      filterType: e.target.value
    });
  };
  render() {
    return (
      <div className="my-search">
        <div className="listar-pokemons" onClick={this.getPokemons}>
          <span>Listar</span>
        </div>
        <div className="filtrar-nome">
          <select
            className="select-filter"
            onChange={this.selectFilterType}
            value={this.state.filterType}
          >
            <option value="name" selected>
              Name
            </option>
            <option value="type">Type</option>
          </select>
          <input
            type="text"
            placeholder="Name (English)"
            onChange={this.setName}
            value={this.state.name}
          />
          <div
            className="filtrar-button"
            onClick={() =>
              this.getFilteredPokemons(this.state.name, this.state.filterType)
            }
          >
            <span>Filtrar</span>
          </div>
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
  loadPokemons: isLoading => dispatch(PokeActions.loadingPokemons(isLoading)),
  filterPokemons: (name, type) =>
    dispatch(PokeActions.filterByName(name, type)),
  setFilter: is => dispatch(PokeActions.isFilteredPokemons(is))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
