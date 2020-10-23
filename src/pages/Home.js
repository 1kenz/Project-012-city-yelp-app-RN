import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Button,
  FlatList,
  TouchableWithoutFeedback,
} from 'react-native';
import PostCard from '../component/RestorantCard';
import restaurant_data from './restaurant_data.json';

const Home = (props) => {
  const renderPostData = ({item}) => {
    return (
      <TouchableWithoutFeedback
        onPress={() =>
          props.navigation.navigate('SecondPage', {selectedRestaurant: item})
        }>
        <View>
          <View>
            <Text>{item.neighborhood}</Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  };

  return (
    <SafeAreaView>
      <View>
        <FlatList
          keyExtractor={(_, index) => index.toString()}
          data={restaurant_data}
          renderItem={renderPostData}
          ItemSeparatorComponent={() => (
            <View
              style={{
                borderWidth: 1,
                marginVertical: 5,
                borderColor: '#bdbdbd',
              }}
            />
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export {Home};
