import React from 'react';
import { View, TextInput, Button } from 'react-native';
import styles from '../styles/styles';

export default function SearchComponent({ searchTerm, setSearchTerm, searchRoutes }) {
  return (
    <View style={styles.searchContainer}>
      <TextInput
        style={styles.input}
        placeholder="Search by route number or place"
        value={searchTerm}
        onChangeText={text => setSearchTerm(text)}
      />
      <Button title="Search" onPress={searchRoutes} />
    </View>
  );
}
