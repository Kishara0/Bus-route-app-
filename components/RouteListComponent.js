import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

// Component to display each route's details
const RouteListComponent = ({ routes }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={routes}
        keyExtractor={(item, index) => index.toString()} // Use index as key if there's no unique id
        renderItem={({ item }) => (
          <View style={styles.routeContainer}>
            <Text style={styles.busNumber}>Bus Number: {item.busNumber}</Text>
            <Text>Start: {item.start}</Text>
            <Text>End: {item.end}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  routeContainer: {
    marginBottom: 20,
    padding: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
  },
  busNumber: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default RouteListComponent;
