import React from "react";

import { Provider } from "react-redux";
import store from "./store";

import Header from "./components/Header";
import Search from "./components/Search";
import PokeWrapper from "./components/PokeWrapper";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Header />
        <Search />
        <PokeWrapper />
      </Provider>
    </div>
  );
}

export default App;
