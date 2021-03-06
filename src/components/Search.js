import React, { Component } from "react";
import "../styles/search.css";

import pokemons from '../pokemons';

import { connect } from "react-redux";
import * as PokeActions from "../store/actions/pokedex";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemons: [],
      name: "",
      filterType: "name",
      nameCompletions: []
    };
    this.types = [
      "Grass",
      "Bug",
      "Flying",
      "Poison",
      "Normal",
      "Electric",
      "Ground",
      "Fairy",
      "Fire",
      "Water",
      "Fighting",
      "Psychic",
      "Rock",
      "Ice",
      "Ghost",
      "Dragon"
    ];
  }
  componentDidMount() {
    this.getPokemons();
  }
  getPokemons = () => {
    this.props.loadPokemons(true);
    this.props.setFilter(false);
    this.props.setPokemons(pokemons);
    this.props.loadPokemons(false);
  };
  getFilteredPokemons = (name, type) => {
    this.setState({
      ...this.state,
      nameCompletions: []
    });
    this.props.setFilter(true);
    this.props.loadPokemons(true);
    this.props.filterPokemons(name, type);
    setTimeout(() => {
      this.props.loadPokemons(false);
    }, 1500);
  };
  getPossibleNames = name => {
    let names = [];
    if (this.state.filterType === "name") {
      let possibleNames = this.props.pokemons.filter(
        pokemon =>
          pokemon.name
            .substring(0, this.state.name.length)
            .toUpperCase() === this.state.name.toUpperCase()
      );
      possibleNames.forEach(pokemon => {
        names.push(pokemon.name);
      });
    } else if (this.state.filterType === "type") {
      let possibleNames = this.types.filter(
        type =>
          type.substring(0, this.state.name.length).toUpperCase() ===
          this.state.name.toUpperCase()
      );
      names = possibleNames;
    }
    return names;
  };
  updateName = name => {
    this.setState(
      {
        ...this.state,
        name: name
      },
      () => {
        this.setState({
          ...this.state,
          nameCompletions: []
        });
      }
    );
  };
  setName = e => {
    this.setState(
      {
        ...this.state,
        name: e.target.value
      },
      () => {
        this.setState({
          ...this.state,
          nameCompletions: this.getPossibleNames(this.state.name)
        });
      }
    );
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
      filterType: e.target.value,
      name: ""
    });
  };
  render() {
    const completionsStyle = {
      display:
        this.state.nameCompletions.length >= 1 && this.state.name.length >= 1
          ? "flex"
          : "none"
    };
    return (
      <div className="my-search">
        <div className="listar-pokemons" onClick={this.getPokemons}>
          <span>Load</span>
        </div>
        <div className="filtrar-nome">
          <select
            className="select-filter"
            onChange={this.selectFilterType}
            value={this.state.filterType}
          >
            <option value="name">Name</option>
            <option value="type">Type</option>
          </select>
          <input
            type="text"
            placeholder="Name (English)"
            onChange={this.setName}
            value={this.state.name}
          />
          <div className="name-completions" style={completionsStyle}>
            {this.state.name.length >= 1
              ? this.state.nameCompletions.map(name => (
                  <span value={name} onClick={() => this.updateName(name)}>
                    {name}
                  </span>
                ))
              : ""}
          </div>
          <div
            className="filtrar-button"
            onClick={() =>
              this.getFilteredPokemons(this.state.name, this.state.filterType)
            }
          >
            <span>Filter</span>
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
