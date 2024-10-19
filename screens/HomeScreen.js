import React, { useState } from 'react';
import { View, TextInput, Button, FlatList, Text, TouchableOpacity } from 'react-native';
import styles from '../styles/styles';
import SearchComponent from '../components/SearchComponent';
import busRoutes from '../database/busRoutes.json';

export default function HomeScreen({ navigation }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [previousSearches, setPreviousSearches] = useState([]);

  const searchRoutes = () => {
    if (searchTerm.length > 0) {
      const filteredRoutes = busRoutes.routes.filter(route =>
        route.busNumber.includes(searchTerm) ||
        route.start.toLowerCase().includes(searchTerm.toLowerCase()) ||
        route.end.toLowerCase().includes(searchTerm.toLowerCase())
      );

      setPreviousSearches([...previousSearches, searchTerm]);
      navigation.navigate('Route', { routes: filteredRoutes });
    }
  };

  return (
    <View style={styles.container}>
      <SearchComponent 
        searchTerm={searchTerm} 
        setSearchTerm={setSearchTerm} 
        searchRoutes={searchRoutes} 
      />
      <Text style={styles.previousSearchText}>Previous Searches</Text>
      <FlatList
        data={previousSearches}
        renderItem={({ item }) => <Text style={styles.searchItem}>{item}</Text>}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}
