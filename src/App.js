import React from 'react';
import {Switch, Route} from "react-router-dom";
import {Header} from "./components/Header";
import {Footer} from "./components/Footer";
import './App.css';
import ListOfLocations from "./components/Locations/ListOfLocations";
import ListOfEpisodes from "./components/Episodes/ListOfEpisodes";
import urls from "./utils/urls";
import ListOfCharacters from "./components/Characters/ListOfCharacters";
import CharacterDetailed from "./components/Characters/CharacterDetailed";

const App = () => {
  return (
    <>
      <Header/>

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
    </>
  );
};

export default App;
