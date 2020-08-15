import React, {useState} from 'react';
import {TextInput, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import {searchMovie} from '../../store/actions/actions';

const Search = (props) => {
  const [text, setText] = useState('');

  const handleSubmit = () => {
    props.searchMovie(text);
  };
  const handleChangeText = (text) => {
    setText(text);
  };

  console.log(props.selectedMovie);

  return (
    <TextInput
      placeholder="Busca tu película favorita"
      autoCorrent={false}
      autoCapitalize="none"
      underlineColorAndroid="transparent"
      onSubmitEditing={() => handleSubmit()}
      onChangeText={(e) => handleChangeText(e)}
      style={styles.input}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    padding: 15,
    fontSize: 15,
    borderWidth: 1,
    borderColor: '#eaeaea',
  },
});

export default connect(null, {
  searchMovie,
})(Search);
