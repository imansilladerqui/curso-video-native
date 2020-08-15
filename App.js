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
import CategoryList from './src/videos/containers/category-list';
import {useDispatch} from 'react-redux';
import {getSuggestions, getCategories} from './src/store/actions/actions';
import Movie from './src/screens/containers/movie';
import {connect} from 'react-redux';
import {isEmpty} from 'lodash';
import Search from './src/sections/containers/search';

const App: () => React$Node = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSuggestions());
    dispatch(getCategories());
  });

  if (!isEmpty(props.selectedMovie)) {
    return <Movie />;
  } else {
    return (
      <Home>
        <Header />
        <Search />
        <CategoryList />
        <SuggestionList />
      </Home>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    selectedMovie: state.selectedMovie,
  };
};

export default connect(mapStateToProps)(App);
