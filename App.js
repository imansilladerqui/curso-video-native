/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect} from 'react';
import Home from './src/screens/containers/home';
import Header from './src/sections/components/header';
import SuggestionList from './src/videos/containers/suggestion-list';
import Player from './src/player/containers/player';

// import {axiosGet} from './utils/axios';
import CategoryList from './src/videos/containers/category-list';
import dummyData from './utils/dummyData';
import dummyMovies from './utils/dummyMovie';

const App: () => React$Node = () => {
  // useEffect(() => {
  //   axiosGet('https://yts.mx/api/v2/movie_suggestions.json?movie_id=10')
  //     .then((response) => {
  //       console.log(response);

  //       return;
  //     })
  //     .catch((error) => {
  //       throw error;
  //     });

  //   axiosGet('https://yts.mx/api/v2/list_movies.json')
  //     .then((response) => {
  //       console.log(response);

  //       return;
  //     })
  //     .catch((error) => {
  //       throw error;
  //     });
  // }, []);

  return (
    <Home>
      <Header />
      <Player />
      <CategoryList list={dummyMovies.data.movies} />
      <SuggestionList list={dummyData.data.movies} />
    </Home>
  );
};
export default App;
