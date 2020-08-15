import React from 'react';
import {View, FlatList} from 'react-native';
import Empty from '../components/empty';
import Separator from '../../sections/components/horizontal-separator';
import Category from '../components/category';
import Layout from '../components/category-list-layout';
import {connect} from 'react-redux';

const CategoryList = (props) => {
  const keyExtractor = (item) => item.id.toString();
  const renderEmpty = () => <Empty text="No hay sugerencias :(" />;
  const itemSeparator = () => <Separator />;
  const renderItem = ({item}) => {
    return <Category {...item} />;
  };

  return (
    <Layout title="Categorias">
      <FlatList
        horizontal
        keyExtractor={keyExtractor}
        data={props.category}
        ListEmptyComponent={renderEmpty}
        ItemSeparatorComponent={itemSeparator}
        renderItem={renderItem}
      />
    </Layout>
  );
};

const mapStateToProps = (state) => {
  return {
    category: state.category,
  };
};

export default connect(mapStateToProps)(CategoryList);
