import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';

const Card = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: props.image }} style={styles.image} />
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{props.name}</Text>
        <Text style={styles.description}>{props.description}</Text>
        <View style={styles.statusContainer}>
          <Text style={styles.status}>{props.status}</Text>
          <Text style={styles.price}>{props.price}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#F5B7B1',
    marginVertical: 10,
    marginHorizontal: 20,
    padding: 10,
    backgroundColor: '#FFF',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 10,
  },
  infoContainer: {
    flex: 2,
    paddingLeft: 10,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  description: {
    fontSize: 16,
    marginBottom: 10,
  },
  statusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  status: {
    backgroundColor: '#F5B7B1',
    color: '#FFF',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 5,
    marginRight: 10,
    fontWeight: 'bold',
  },
  price: {
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default Card;