import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  Image,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Feather, FontAwesome5 } from "@expo/vector-icons";

const url = "https://6704d4ebab8a8f892734ff45.mockapi.io/gojek";

const avatarMap = {
  "1": require("../assets/phobo.jpg"),
  "2": require("../assets/buncha.jpeg"),
  "3": require("../assets/goicuon.jpg"),
  "4": require("../assets/banhmi.jpg"),
  "5": require("../assets/chagio.jpg"),
  "6": require("../assets/comtam.jpg"),
};

const GoFood = () => {
  const navigation = useNavigation();
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
        <Text style={styles.headerTitle}>Giao Món Ngon</Text>
        <Text style={styles.headerSubtitle}>Chọn món ăn yêu thích và chúng tôi sẽ giao ngay!</Text>
      </View>

      {/* Search Bar */}
      <View style={styles.searchBar}>
        <Feather name="search" size={24} color="#888" />
        <TextInput
          placeholder="Bạn đang thèm gì nào?"
          style={styles.searchInput}
        />
      </View>

      {/* Main Content */}
      <ScrollView style={styles.content}>
        {data.map((item) => (
          <View key={item.id} style={styles.card}>
            <Image style={styles.cardImage} source={avatarMap[item.id]} />
            <View style={styles.cardContent}>
              <Text style={styles.cardTitle}>{item.name}</Text>
              <View style={styles.ratingRow}>
                <FontAwesome5 name="star" size={20} color="gold" />
                <Text style={styles.ratingText}>{item.gold || "Chưa có đánh giá"}</Text>
              </View>
              <View style={styles.priceRow}>
                <Text style={styles.priceText}>
                  {item.price || ""}
                </Text>
                <Pressable
                  onPress={() => navigation.navigate("viewGoFood", item)}
                  style={styles.orderButton}
                >
                  <Text style={styles.orderButtonText}>Đặt Ngay</Text>
                </Pressable>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default GoFood;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  header: {
    backgroundColor: "#009688",
    paddingVertical: 25,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  backButton: {
    position: "absolute",
    top: 20,
    left: 15,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
  },
  headerSubtitle: {
    fontSize: 16,
    color: "white",
    textAlign: "center",
    marginTop: 10,
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 30,
    paddingHorizontal: 15,
    marginHorizontal: 15,
    marginTop: 5,
    elevation: 3,
  },
  searchInput: {
    fontSize: 16,
    color: "#555",
    flex: 1,
    marginLeft: 10,
  },
  content: {
    marginTop: 15,
    paddingHorizontal: 15,
  },
  card: {
    flexDirection: "row",
    backgroundColor: "white",
    borderRadius: 10,
    marginBottom: 15,
    padding: 10,
    elevation: 2,
  },
  cardImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginRight: 15,
  },
  cardContent: {
    flex: 1,
    justifyContent: "space-between",
  },
  cardTitle: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 5,
    color: "#333",
  },
  ratingRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  ratingText: {
    marginLeft: 5,
    fontSize: 14,
    color: "#555",
  },
  priceRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  priceText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  orderButton: {
    backgroundColor: "#00bcd4",
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 5,
  },
  orderButtonText: {
    color: "white",
    fontWeight: "bold",
  },
});
