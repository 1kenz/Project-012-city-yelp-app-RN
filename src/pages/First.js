import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  FlatList,
  StyleSheet,
  Alert,
  TextInput,
  Button,
} from 'react-native';

import restaurant_data from '../restaurant_data.json';
// import {ProductCard, SearchBar} from './components';

export default function First(props) {
  const [cityName, setCityName] = useState('');
  const [onSearch, setOnSearch] = useState('');
  const sendValue = () => {
    props.getName(onSearch);

    const [displayList, setDisplayList] = useState([]);

    // const renderListItem = ({ item }) => <ProductCard product={item} />;
    //   setDisplayList(productData);
    // }, []);

    useEffect(() => {
      const filteredValue = productData.filter((item) => {
        const text = searchValue.toUpperCase();
        const productTitle = item.title.toUpperCase();
        return productTitle.indexOf(text) > -1;
      });
      setDisplayList(filteredValue);
    }, [searchValue]);
  };

  return (
    <View>
      <Text>Bir şehir seçiniz</Text>
      <TextInput
        value={onSearch}
        placeholder="Search city..."
        onChangeText={(val) => {
          setOnSearch(val);
          sendValue();
        }}
      />
      <FlatList
        keyExtractor={(_, index) => index.toString()}
        data={displayList}
        renderItem={renderListItem}
        numColumns={2}
      />

      <Button
        title="Second Page"
        onPress={() => props.navigation.navigate('SecondPage', {})}
      />
    </View>
  );
}
