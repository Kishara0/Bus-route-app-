import React from 'react';
import { View, Text, FlatList } from 'react-native';
import styles from '../styles/styles';

export default function RouteScreen({ route }) {
  const { routes } = route.params;

  return (
    <View style={styles.container}>
      <FlatList
        data={routes}
        renderItem={({ item }) => (
          <View style={styles.routeContainer}>
            <Text style={styles.routeText}>Bus No: {item.busNumber}</Text>
            <Text style={styles.routeText}>Start: {item.start}</Text>
            <Text style={styles.routeText}>End: {item.end}</Text>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}
