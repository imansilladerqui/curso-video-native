import React from 'react';
import {useDispatch} from 'react-redux';
import MovieLayout from '../components/movie';
import Player from '../../player/containers/player';
import Close from '../../sections/components/close';
import Header from '../../sections/components/header';
import Details from '../../videos/components/details';

import {connect} from 'react-redux';

const Movie = (props) => {
  const dispatch = useDispatch();
  const closeVideo = () => {
    dispatch({
      type: 'SET_SELECTED_MOVIE',
      payload: null,
    });
  };
  return (
    <MovieLayout>
      <Header>
        <Close onPress={closeVideo} />
      </Header>
      <Player />
      <Details {...props.selectedMovie} />
    </MovieLayout>
  );
};

const mapStateToProps = (state) => {
  return {
    selectedMovie: state.selectedMovie,
  };
};

export default connect(mapStateToProps)(Movie);
