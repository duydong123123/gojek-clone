import React, { useState } from "react";
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome5 } from "@expo/vector-icons";

const avatarMap = {
  "1": require("../assets/phobo.jpg"),
  "2": require("../assets/buncha.jpeg"),
  "3": require("../assets/goicuon.jpg"),
  "4": require("../assets/banhmi.jpg"),
  "5": require("../assets/chagio.jpg"),
  "6": require("../assets/comtam.jpg"),
};

export default function viewGrabFood({ route }) {
  const [quantity, setQuantity] = useState(1);
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
       <Pressable onPress={() => navigation.navigate("GoFood")} style={styles.backButton}>
          <FontAwesome5 name="arrow-left" size={20} color="rgb(0, 188, 212)" />
        </Pressable>
      {/* Image Section */}
      <View style={styles.imageContainer}>
      <Image style={styles.foodImage} source={avatarMap[route.params.id]} />
      </View>

      {/* Food Details */}
      <View style={styles.detailsContainer}>
        <Text style={styles.foodName}>{route.params?.name}</Text>
        <Text style={styles.foodDescription}>{route.params?.description}</Text>
        <Text style={styles.foodPrice}>$10{route.params?.price}</Text>
      </View>

      {/* Delivery Info and Quantity */}
      <View style={styles.deliveryContainer}>
        <View style={styles.deliveryInfo}>
          <Image
            source={require("../assets/clock.png")}
            style={styles.icon}
          />
          <Text style={styles.deliveryText}>Delivery in 30 min</Text>
        </View>
        <View style={styles.quantityContainer}>
          <Pressable
            onPress={() => setQuantity(Math.max(1, quantity - 1))}
            style={styles.quantityButton}
          >
            <Text style={styles.quantityButtonText}>-</Text>
          </Pressable>
          <TextInput
            keyboardType="numeric"
            style={styles.quantityInput}
            value={String(quantity)}
            onChangeText={(text) => setQuantity(Math.max(1, parseInt(text) || 1))}
          />
          <Pressable
            onPress={() => setQuantity(quantity + 1)}
            style={styles.quantityButton}
          >
            <Text style={styles.quantityButtonText}>+</Text>
          </Pressable>
        </View>
      </View>

      {/* Restaurant Info */}
      <View style={styles.restaurantInfo}>
        <Text style={styles.restaurantTitle}>Restaurant Info</Text>
        <Text style={styles.restaurantDescription}>
          {route.params?.moTa || "Thông tin nhà hàng chưa được cung cấp."}
        </Text>
      </View>

      {/* Order Button */}
      <View style={styles.orderButtonContainer}>
        <Pressable
          onPress={() => navigation.navigate("thanhcong")}
          style={styles.orderButton}
        >
          <Text style={styles.orderButtonText}>Đặt hàng</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  imageContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  foodImage: {
    width: 250,
    height: 250,
    borderRadius: 10,
  },
  detailsContainer: {
    marginBottom: 20,
  },
  foodName: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 5,
  },
  foodDescription: {
    fontSize: 16,
    color: "#666",
    marginBottom: 5,
  },
  foodPrice: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#009688",
  },
  deliveryContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  deliveryInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  deliveryText: {
    fontSize: 16,
    color: "#333",
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  quantityButton: {
    width: 40,
    height: 40,
    backgroundColor: "#009688",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  quantityButtonText: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
  },
  quantityInput: {
    width: 50,
    height: 40,
    textAlign: "center",
    fontSize: 16,
    marginHorizontal: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
  },
  restaurantInfo: {
    marginBottom: 30,
  },
  restaurantTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
  },
  restaurantDescription: {
    fontSize: 16,
    color: "#666",
  },
  orderButtonContainer: {
    alignItems: "center",
  },
  orderButton: {
    backgroundColor: "rgb(0, 188, 212)",
    paddingVertical: 15,
    paddingHorizontal: 80,
    borderRadius: 50,
  },
  orderButtonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
});
