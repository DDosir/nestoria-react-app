import React from 'react';
import {Switch, Route} from "react-router-dom";
import {Header} from "./components/Header";
import {Footer} from "./components/Footer";
import './App.css';
import ListOfCharacters from "./components/Characters/ListOfCharacters";
import ListOfLocations from "./components/Locations/ListOfLocations";
import ListOfEpisodes from "./components/Episodes/ListOfEpisodes";
import CharacterDetailed from "./components/Characters/CharacterDetailed";
import urls from "./utils/urls";

const App = () => {
  return (
    <>
      <Header/>
      <Switch>
        <Route exact path={urls.character} render={() => (
          <ListOfCharacters  url={urls.character}/>
        )}/>
        <Route  path={urls.location} render={() => (
          <ListOfLocations/>
        )}/>
        <Route path={'/episode'} render={() => (
          <ListOfEpisodes/>
        )}/>
        <Route path={`${urls.character}/:id`} render={({match, history}) => (
          <CharacterDetailed path={`${urls.character}/${match.params.id}`}/>
        )}/>
      </Switch>
      <Footer/>
    </>
  );
};

export default App;
