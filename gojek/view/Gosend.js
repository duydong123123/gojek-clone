import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import { SearchBar } from '@rneui/themed';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const windowWidth = Dimensions.get('window').width;

// Sample Data
const deliveryOptions = [
  { id: 1, title: "Send Now", icon: "bike" },
  { id: 2, title: "Schedule", icon: "calendar-clock" },
];

const savedLocations = [
  { id: 1, name: "Home", icon: "home", address: "123 Main St" },
  { id: 2, name: "Work", icon: "office-building", address: "456 Business Rd" },
  { id: 3, name: "Friend's Place", icon: "account-group", address: "789 Social Ln" },
];

const popularDestinations = [
  { id: 1, name: "Central Park", distance: "2.5 km" },
  { id: 2, name: "Museum of Art", distance: "4.1 km" },
  { id: 3, name: "Shopping Mall", distance: "3.2 km" },
];

const Gosend = () => {
  const [search, setSearch] = useState("");

  const updateSearch = (search) => {
    setSearch(search);
  };

  const renderDeliveryOption = ({ item }) => (
    <TouchableOpacity style={styles.deliveryOption}>
      <MaterialCommunityIcons name={item.icon} size={30} color="green" />
      <Text style={styles.optionText}>{item.title}</Text>
    </TouchableOpacity>
  );

  const renderSavedLocation = ({ item }) => (
    <TouchableOpacity style={styles.savedLocation}>
      <MaterialCommunityIcons name={item.icon} size={24} color="gray" />
      <View style={styles.locationInfo}>
        <Text style={styles.locationName}>{item.name}</Text>
        <Text style={styles.locationAddress}>{item.address}</Text>
      </View>
    </TouchableOpacity>
  );

  const renderPopularDestination = ({ item }) => (
    <TouchableOpacity style={styles.popularDestination}>
      <Text style={styles.destinationName}>{item.name}</Text>
      <Text style={styles.destinationDistance}>{item.distance}</Text>
    </TouchableOpacity>
  );

  return (
    <ScrollView style={styles.container}>
      {/* Search Bar */}
      <SearchBar
        placeholder="Search for places, addresses"
        onChangeText={updateSearch}
        value={search}
        platform="ios"
        containerStyle={styles.searchContainer}
      />

      {/* Delivery Options */}
      <Text style={styles.sectionTitle}>Delivery Options</Text>
      <FlatList
        data={deliveryOptions}
        renderItem={renderDeliveryOption}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        style={styles.deliveryOptionsList}
        showsHorizontalScrollIndicator={false}
      />

      {/* Saved Locations */}
      <Text style={styles.sectionTitle}>Saved Locations</Text>
      <FlatList
        data={savedLocations}
        renderItem={renderSavedLocation}
        keyExtractor={(item) => item.id.toString()}
        style={styles.savedLocationsList}
        showsVerticalScrollIndicator={false}
      />

      {/* Popular Destinations */}
      <Text style={styles.sectionTitle}>Popular Destinations</Text>
      <FlatList
        data={popularDestinations}
        renderItem={renderPopularDestination}
        keyExtractor={(item) => item.id.toString()}
        style={styles.popularDestinationsList}
        showsVerticalScrollIndicator={false}
      />
    </ScrollView>
  );
};

export default Gosend;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  searchContainer: {
    margin: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 15,
    marginVertical: 10,
  },
  deliveryOptionsList: {
    marginVertical: 10,
  },
  deliveryOption: {
    width: 100,
    alignItems: 'center',
    marginHorizontal: 10,
  },
  optionText: {
    marginTop: 5,
    fontSize: 14,
    color: 'black',
  },
  savedLocationsList: {
    marginVertical: 10,
  },
  savedLocation: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 15,
    marginVertical: 8,
    padding: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
  },
  locationInfo: {
    marginLeft: 10,
  },
  locationName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  locationAddress: {
    fontSize: 14,
    color: 'gray',
  },
  popularDestinationsList: {
    marginVertical: 10,
  },
  popularDestination: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 15,
    marginVertical: 8,
    padding: 10,
    backgroundColor: '#f1f1f1',
    borderRadius: 8,
  },
  destinationName: {
    fontSize: 16,
    color: 'black',
  },
  destinationDistance: {
    fontSize: 14,
    color: 'gray',
  },
});
