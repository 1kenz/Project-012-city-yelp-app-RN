import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Button,
  FlatList,
  Image,
  Dimensions,
  TouchableWithoutFeedback,
} from 'react-native';
import PostCard from '../component/RestorantCard';

const Restaurant = (props) => {
  const selectedRestaurant = props.route.params.selectedRestaurant;

  return (
    <SafeAreaView>
      <TouchableWithoutFeedback
        onPress={() =>
          props.navigation.navigate('ThirdPage', {restaurantDetail: item})
        }>
        <View>
          <Image
            source={{uri: selectedRestaurant.img}}
            style={{
              height: Dimensions.get('window').height / 2,
            }}
          />
          <Text style={{margin: 10, fontSize: 20, fontWeight: 'bold'}}>
            {postData.userName}
          </Text>
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

export {Restaurant};
