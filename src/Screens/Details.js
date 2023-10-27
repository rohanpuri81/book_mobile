import {View, Text, Button, StyleSheet, Image} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const Details = ({route}) => {
  const navigation = useNavigation();
  return (
    <View style={style.main}>
      <Text>Title : {route.params.ele.title}</Text>
      <Text>Author : {route.params.ele.author}</Text>
      <Image
        source={{uri: route.params.ele.link}}
        style={{height: 100, width: 100}}
      />
      <Button
        title="bact to home"
        onPress={() => {
          navigation.navigate('Home');
        }}
      />
    </View>
  );
};

export default Details;

const style = StyleSheet.create({
  main: {
    backgroundColor: 'lightblue',
    height: '100%',
    width: '100%',
    paddingVertical: 50,
    paddingHorizontal: 60,
  },
});
