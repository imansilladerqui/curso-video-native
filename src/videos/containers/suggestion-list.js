import React from 'react';
import {useDispatch} from 'react-redux';
import {FlatList} from 'react-native';
import Layout from '../components/suggestion-list-layout';
import Empty from '../components/empty';
import Separator from '../components/vertical-separator';
import Suggestion from '../components/suggestion';
import {connect} from 'react-redux';

const SuggestionList = (props) => {
  const dispatch = useDispatch();
  const keyExtractor = (item) => item.id.toString();
  const renderEmtpy = () => <Empty text="No hay sugerencias :(" />;
  const itemSeparator = () => <Separator />;
  const viewMovie = (item) => {
    dispatch({
      type: 'SET_SELECTED_MOVIE',
      payload: item,
    });
  };
  const renderItem = ({item}) => {
    return <Suggestion {...item} onPress={() => viewMovie(item)} />;
  };
  return (
    <Layout title="Recomendado para ti">
      <FlatList
        keyExtractor={keyExtractor}
        data={props.suggestion}
        ListEmptyComponent={renderEmtpy}
        ItemSeparatorComponent={itemSeparator}
        renderItem={renderItem}
      />
    </Layout>
  );
};

const mapStateToProps = (state) => {
  return {
    suggestion: state.suggestion,
  };
};

export default connect(mapStateToProps)(SuggestionList);
