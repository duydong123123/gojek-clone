import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import { SearchBar } from '@rneui/themed';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const windowWidth = Dimensions.get('window').width;

// Sample Data
const categories = [
  { id: 1, title: "GoFood Plus", icon: "plus" },
  { id: 2, title: "At Endow", icon: "gift" },
  { id: 3, title: "GoFood Pickup", icon: "truck-delivery" },
];

const promotions = [
  { id: 1, title: "FREESHIP 50%", image: require('../image/view-food3.png') },
  { id: 2, title: "11K Deal", image: require('../image/view-food4.png') },
];

const recommendedItems = [
  { id: 1, title: "Western Pancakes", distance: "0.1 km", rating: 4.2, image: require('../image/view-food1.png') },
  { id: 2, title: "Kho Nhu Spring Rolls", distance: "3.2 km", rating: 4.8, image: require('../image/view-food2.png') },
  { id: 3, title: "Kho Nhu Spring Rolls", distance: "3.2 km", rating: 4.8, image: require('../image/view-food2.png') },
  { id: 4, title: "Kho Nhu Spring Rolls", distance: "3.2 km", rating: 4.8, image: require('../image/view-food2.png') },
  { id: 5, title: "Kho Nhu Spring Rolls", distance: "3.2 km", rating: 4.8, image: require('../image/view-food2.png') },

];

const Gofood = () => {
  const [search, setSearch] = useState("");

  const updateSearch = (search) => {
    setSearch(search);
  };

  const renderCategory = ({ item }) => (
    <TouchableOpacity style={styles.category}>
      <MaterialCommunityIcons name={item.icon} size={30} color="red" />
      <Text style={styles.categoryText}>{item.title}</Text>
    </TouchableOpacity>
  );

  const renderPromotion = ({ item }) => (
    <TouchableOpacity style={styles.promotion}>
      <Image source={item.image} style={styles.promotionImage} />
      <Text style={styles.promotionText}>{item.title}</Text>
    </TouchableOpacity>
  );

  const renderRecommendedItem = ({ item }) => (
    <TouchableOpacity style={styles.recommendedItem}>
      <Image source={item.image} style={styles.itemImage} />
      <View style={styles.itemInfo}>
        <Text style={styles.itemTitle}>{item.title}</Text>
        <Text style={styles.itemDistance}>{item.distance}</Text>
        <Text style={styles.itemRating}>⭐ {item.rating} rating</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <SearchBar
        placeholder="Find services, delicious food, locations"
        onChangeText={updateSearch}
        value={search}
        platform="ios"
        containerStyle={styles.searchContainer}
      />

      {/* Categories */}
      <FlatList
        data={categories}
        renderItem={renderCategory}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        style={styles.categoryList}
        showsHorizontalScrollIndicator={false}
      />

      {/* Promotions */}
      <Text style={styles.sectionTitle}>Order delicious food delivered</Text>
      <FlatList
        data={promotions}
        renderItem={renderPromotion}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        style={styles.promotionList}
        showsHorizontalScrollIndicator={false}
      />

      {/* Recommended Items */}
      <Text style={styles.sectionTitle}>All the dishes you will love</Text>
      <FlatList
        data={recommendedItems}
        renderItem={renderRecommendedItem}
        keyExtractor={(item) => item.id.toString()}
        style={styles.recommendedList}
        showsVerticalScrollIndicator={false}
      />
    </ScrollView>
  );
};

export default Gofood;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  searchContainer: {
    margin: 10,
  },
  categoryList: {
    marginVertical: 10,
  },
  category: {
    width: 100,
    alignItems: 'center',
    marginHorizontal: 10,
  },
  categoryText: {
    marginTop: 5,
    fontSize: 14,
    color: 'black',
  },
  promotionList: {
    marginVertical: 10,
  },
  promotion: {
    width: 150,
    marginHorizontal: 10,
    alignItems: 'center',
  },
  promotionImage: {
    width: '100%',
    height: 80,
    borderRadius: 8,
  },
  promotionText: {
    marginTop: 5,
    fontSize: 14,
    color: 'black',
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 15,
    marginVertical: 10,
  },
  recommendedList: {
    marginVertical: 10,
  },
  recommendedItem: {
    flexDirection: 'row',
    marginHorizontal: 15,
    marginVertical: 8,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    overflow: 'hidden',
  },
  itemImage: {
    width: 80,
    height: 80,
  },
  itemInfo: {
    padding: 10,
    justifyContent: 'center',
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  itemDistance: {
    fontSize: 14,
    color: 'gray',
  },
  itemRating: {
    fontSize: 14,
    color: 'gray',
  },
});
