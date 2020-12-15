import React from 'react';
import {Switch, Route} from "react-router-dom";
import {BrowserRouter as Router} from 'react-router-dom'
import {Header} from "./components/Header";
import {Footer} from "./components/Footer";
import './App.css';
import ListOfLocations from "./components/Locations/ListOfLocations";
import ListOfEpisodes from "./components/Episodes/ListOfEpisodes";
import urls from "./utils/urls";
import ListOfCharacters from "./components/Characters/ListOfCharacters";
import CharacterDetailed from "./components/Characters/CharacterDetailed";
import SearchForm from "./components/SearchForm/SearchForm";

const App = () => {
  return (
    <Router>
      <Header/>
      <SearchForm/>
      <Switch>
        <Route exact path={urls.character}>
          <ListOfCharacters path={urls.character}/>
        </Route>
        <Route path="/character/:id" render={ ({match}) => <CharacterDetailed match={match}/>}/>
        <Route  path={urls.location} render={() => (
          <ListOfLocations/>
        )}/>
        <Route path={'/episode'} render={() => (
          <ListOfEpisodes/>
        )}/>
      </Switch>
      <Footer/>
    </Router>
  );
};

export default App;
