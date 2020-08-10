import React from 'react';
import {FlatList} from 'react-native';
import Layout from '../components/suggestion-list-layout';
import Empty from '../components/empty';
import Separator from '../../sections/components/vertical-separator';
import Suggestion from '../components/suggestion';

const renderEmpty = () => {
  return <Empty text="No hay sugerencias" />;
};

const itemSeparator = () => {
  return <Separator />;
};

const renderItem = (item) => {
  return <Suggestion {...item} />;
};

const keyExtractor = (item) => {
  return item.id.toString();
};

const SuggestionList = (props) => {
  return (
    <Layout title="Recomendado para ti">
      <FlatList
        keyExtractor={(item) => keyExtractor(item)}
        data={props.list}
        ListEmptyComponent={() => renderEmpty()}
        ItemSeparatorComponent={() => itemSeparator()}
        renderItem={(item) => renderItem(item)}
      />
    </Layout>
  );
};
export default SuggestionList;
