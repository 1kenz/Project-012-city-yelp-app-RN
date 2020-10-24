import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Button,
  FlatList,
  TouchableWithoutFeedback,
} from 'react-native';

import restaurantData from '../restaurant_data.json';

const Home = (props) => {
  const renderListItem = ({ item }) =>  {
    return (
    <TouchableWithoutFeedback 
    onPress={() => {
      props.navigation.navigate('SecondPage', {selectedRestaurant: item})}} >
        <View>
          <View style={{margin: 2, padding: 5, alignSelf:"center"}}>
            <Text>{item.neighborhood}</Text>
          </View>
        </View>)
    </TouchableWithoutFeedback>
  }

  return (
    <SafeAreaView>
      <View>
              <TextInput
                placeholder="Ürün ara..."
                // onChangeText={(value) => setSearchValue(value)}
              />
      </View>
      <FlatList
          keyExtractor={(_, index) => index.toString()}
          data={restaurantData}
          renderItem={renderPostData}
          ItemSeparatorComponent={() => (
            <View
              style={{
                borderWidth: 1,
                marginVertical: 5,
                borderColor: '#bdbdbd',
              }}>
            </View>)}
      />
  </SafeAreaView>
);
};

export {Home};
