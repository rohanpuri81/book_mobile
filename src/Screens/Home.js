import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  ScrollView,
  Image,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {add_book, del_book} from '../redux/BookSlice';

const Home = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const books = useSelector(state => state.books.books);
  const [bks, setBks] = useState([...books]);
  const [search, setSearch] = useState('');
  const [show, setShow] = useState(false);

  useEffect(() => {
    setBks([...books]);
  }, []);
  return (
    <ScrollView>
      <View style={style.nav}>
        <TouchableOpacity
          style={style.btn}
          onPress={() => navigation.navigate('Add')}>
          <Text style={style.btnn}>Add Book</Text>
        </TouchableOpacity>
        <TextInput
          placeholder="Enter book name"
          style={{width: 200}}
          value={search}
          onChangeText={text => {
            setShow(true);
            setSearch(text);
            let b = books.filter(ele => ele.title.includes(text));
            console.warn(b);
            setBks([...b]);
            if (text == '') {
              setShow(false);
            }
          }}
        />
      </View>
      <View>
        {show
          ? bks.map((ele, ind) => {
              return (
                <View style={style.mView}>
                  <Text>Name : {ele.title}</Text>
                  <Text>Auther : {ele.author}</Text>
                  {/* <Text>Author : {ele.link}</Text> */}
                  <Image
                    source={{uri: ele.link}}
                    style={{width: '80%', height: '50'}}
                  />

                  <View
                    style={{
                      flexDirection: 'row',
                      gap: 40,
                    }}>
                    <TouchableOpacity
                      style={style.inBtn}
                      onPress={() => {
                        dispatch(del_book(ele.id));
                      }}>
                      <Text style={{color: 'white'}}>Delete</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={style.inBtn}
                      onPress={() => {
                        navigation.navigate('Details', {ele: {...ele}});
                      }}>
                      <Text style={{color: 'white'}}>Details</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              );
            })
          : books.map((ele, ind) => {
              return (
                <View style={style.mView}>
                  <Text>Name : {ele.title}</Text>
                  <Text>Auther : {ele.author}</Text>
                  {/* <Text>Author : {ele.link}</Text> */}
                  <Image
                    source={{uri: ele.link}}
                    style={{width: '80%', height: '50'}}
                  />

                  <View
                    style={{
                      flexDirection: 'row',
                      gap: 40,
                    }}>
                    <TouchableOpacity
                      style={style.inBtn}
                      onPress={() => {
                        dispatch(del_book(ele.id));
                      }}>
                      <Text style={{color: 'white'}}>Delete</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={style.inBtn}
                      onPress={() => {
                        navigation.navigate('Details', {ele: {...ele}});
                      }}>
                      <Text style={{color: 'white'}}>details</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              );
            })}
      </View>
    </ScrollView>
  );
};

export default Home;

const style = StyleSheet.create({
  nav: {
    backgroundColor: 'lightblue',
    color: 'white',
    height: 50,
    // flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 40,
  },
  mView: {
    height: 150,
    width: '100%',
    paddingHorizontal: 80,
    paddingVertical: 30,
    gap: 6,
    backgroundColor: 'salmon',
    marginVertical: 12,
    marginHorizontal: 17,
    marginRight: 17,
  },
  inBtn: {backgroundColor: 'navy', paddingVertical: 10, paddingHorizontal: 40},
  btn: {
    width: 100,
    height: 38,
    backgroundColor: 'navy',
    color: 'white',
    paddingHorizontal: '10',

    justifyContent: 'center',
    alignItems: 'center',
  },
  btnn: {
    color: 'white',
  },
});
