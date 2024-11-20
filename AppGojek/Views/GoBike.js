import {
    Pressable,
    StyleSheet,
    Text,
    View,
    Image,
    FlatList,
  } from "react-native";
  import React, { useEffect, useState } from "react";
  import { FontAwesome5 } from "@expo/vector-icons";
  
  const url = "https://673c30f796b8dcd5f3f8d48d.mockapi.io/gojekcarbike";
  
  const imageMap = {
    "1": require("../assets/nhaquan1.jpg"),
    "2": require("../assets/truso.jpg"),
    "3": require("../assets/congvien.jpg"),
  };
  
  const GoBike = () => {
    const [data, setData] = useState([]);
  
    useEffect(() => {
      fetch(url)
        .then((response) => response.json())
        .then((json) => setData(json))
        .catch((error) => console.error("Error fetching data:", error));
    }, []);
  
    return (
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
        <Pressable style={styles.backButton} onPress={() => navigation.navigate("Home")}>
            <FontAwesome5 name="arrow-left" size={20} color="white" />
          </Pressable>
          <View style={styles.headerContent}>
            <Text style={styles.headerText}>Di chuyển</Text>
            <Text style={styles.headerSubtitle}>
              Chúng tôi đưa bạn đến bất kỳ đâu!
            </Text>
            <Image
              source={require("../assets/bikeviewheader.jpg")}
              style={styles.headerImage}
            />
          </View>
        </View>
  
        {/* Search Bar */}
        <View style={styles.searchBar}>
          <Pressable style={styles.searchButton}>
            <FontAwesome5 name="map-marker" size={24} color="red" />
            <Text style={styles.searchText}>Đến đâu?</Text>
          </Pressable>
        </View>
  
        {/* Recent Destinations */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Điểm đến gần đây</Text>
          <FlatList
            data={data}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={styles.destinationCard}>
                <Image
                  style={styles.destinationImage}
                  source={imageMap[item.id]}
                />
                <View style={styles.destinationInfo}>
                  <Text style={styles.destinationTitle}>{item.Title}</Text>
                  <Text style={styles.destinationAddress}>{item.address}</Text>
                </View>
              </View>
            )}
          />
        </View>
  
        {/* Favorite Destinations */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Đến các địa điểm yêu thích</Text>
            <FontAwesome5 name="arrow-right" size={20} color="green" />
          </View>
          <View style={styles.favorites}>
            <View style={styles.favoriteItem}>
              <FontAwesome5 name="home" size={24} color="green" />
              <Text style={styles.favoriteText}>Nhà</Text>
            </View>
            <View style={styles.favoriteItem}>
              <FontAwesome5 name="briefcase" size={24} color="green" />
              <Text style={styles.favoriteText}>Cơ quan</Text>
            </View>
            <View style={styles.favoriteItem}>
              <FontAwesome5 name="plus" size={24} color="green" />
              <Text style={styles.favoriteText}>Mới</Text>
            </View>
          </View>
        </View>
      </View>
    );
  };
  
  export default GoBike;
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fffff",
    },
    header: {
      backgroundColor: "#009688",
      padding: 20,
      borderBottomLeftRadius: 20,
      borderBottomRightRadius: 20,
    },
    backButton: {
      width: 40,
      height: 40,
      justifyContent: "center",
      alignItems: "center",
      marginBottom: 10,
    },
    headerContent: {
      alignItems: "center",
    },
    headerText: {
      fontSize: 24,
      fontWeight: "700",
      color: "white",
    },
    headerSubtitle: {
      fontSize: 16,
      color: "white",
      marginVertical: 10,
    },
    headerImage: {
      width: 180,
      height: 120,
      borderRadius: 10,
    },
    searchBar: {
      marginTop: 20,
      alignItems: "center",
    },
    searchButton: {
      backgroundColor: "white",
      flexDirection: "row",
      alignItems: "center",
      padding: 12,
      borderRadius: 30,
      width: "90%",
      elevation: 3,
    },
    searchText: {
      color: "gray",
      fontSize: 16,
      marginLeft: 10,
    },
    section: {
      marginTop: 20,
      paddingHorizontal: 20,
    },
    sectionHeader: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 10,
    },
    sectionTitle: {
      fontSize: 18,
      fontWeight: "600",
      color: "#333",
    },
    destinationCard: {
      flexDirection: "row",
      backgroundColor: "white",
      borderRadius: 10,
      marginBottom: 10,
      padding: 10,
      elevation: 2,
    },
    destinationImage: {
      width: 50,
      height: 50,
      borderRadius: 25,
      marginRight: 10,
    },
    destinationInfo: {
      flex: 1,
    },
    destinationTitle: {
      fontSize: 16,
      fontWeight: "600",
    },
    destinationAddress: {
      fontSize: 14,
      color: "gray",
    },
    favorites: {
      flexDirection: "row",
      justifyContent: "space-around",
      marginTop: 10,
    },
    favoriteItem: {
      alignItems: "center",
    },
    favoriteText: {
      marginTop: 5,
      fontSize: 14,
      fontWeight: "600",
      color: "#333",
    },
  });
  