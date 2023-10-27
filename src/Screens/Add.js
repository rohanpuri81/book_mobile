import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {add_book, del_book} from '../redux/BookSlice';

const Add = () => {
  const dispatch = useDispatch();

  const navigation = useNavigation();
  const books = useSelector(state => state.books.books);
  const [data, setData] = useState({
    title: '',
    author: '',
    link: '',
    id: books.length + 1,
  });
  return (
    <View style={style.main}>
      <Text style={style.h1}>Add Product</Text>
      <TextInput
        style={style.txtInp}
        placeholder="Enter Book Title"
        value={data.title}
        onChangeText={text => {
          setData({...data, title: text});
        }}
      />
      <TextInput
        style={style.txtInp}
        placeholder="Enter Book Author"
        value={data.author}
        onChangeText={text => {
          setData({...data, author: text});
        }}
      />
      <TextInput
        style={style.txtInp}
        placeholder="Enter Book Link"
        value={data.link}
        onChangeText={text => {
          setData({...data, link: text});
        }}
      />
      <TouchableOpacity
        style={{
          marginLeft: '40%',
          marginTop: '11%',
          backgroundColor: 'navy',
          width: 80,
          justifyContent: 'center',
          alignItems: 'center',
          height: 36,
        }}
        onPress={() => {
          dispatch(add_book(data));
          setData({
            title: '',
            author: '',
            link: '',
            id: books.length + 1,
          });
          navigation.navigate('Home');
        }}>
        <Text style={{color: 'white'}}>SUBMIT</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Add;

const style = StyleSheet.create({
  main: {
    backgroundColor: 'lightblue',
    height: '100%',
    width: '100%',
  },
  h1: {
    fontSize: 30,
    color: 'black',
    textAlign: 'center',
    marginTop: 20,
  },
  txtInp: {
    paddingHorizontal: 6,
    width: '82%',
    borderColor: 'black',
    borderWidth: 1,
    marginLeft: 33,
    marginTop: 13,
    backgroundColor: 'white',
  },
});
