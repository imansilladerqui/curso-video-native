import React from 'react';
import {FlatList} from 'react-native';
import Layout from '../components/category-list-layout';
import Empty from '../components/empty';
import Separator from '../../sections/components/horizontal-separator';
import Category from '../components/category';

const renderEmpty = () => {
  return <Empty text="No hay sugerencias" />;
};

const itemSeparator = () => {
  return <Separator />;
};

const renderItem = (item) => {
  return <Category {...item} />;
};

const keyExtractor = (item) => {
  return item.id.toString();
};

const CategoryList = (props) => {
  return (
    <Layout title="Categorias">
      <FlatList
        horizontal
        keyExtractor={(item) => keyExtractor(item)}
        data={props.list}
        ListEmptyComponent={() => renderEmpty()}
        ItemSeparatorComponent={() => itemSeparator()}
        renderItem={(item) => renderItem(item)}
      />
    </Layout>
  );
};
export default CategoryList;
