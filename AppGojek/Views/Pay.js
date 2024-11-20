import { StyleSheet, Text, View, Image, TextInput, Pressable, fontSize } from "react-native";
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCreditCard } from '@fortawesome/free-solid-svg-icons';
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";


const Tab = createBottomTabNavigator();
const Pay = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Thanh toán</Text>
      </View>

      {/* Image Section */}
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../assets/thanhtoanview.jpg")}
        />
      </View>

      {/* Add Card Button */}
      <View style={styles.buttonContainer}>
        <Pressable style={[styles.button, styles.primaryButton]}>
          <FontAwesomeIcon icon={faCreditCard} size={20} color="white" />
          <Text style={styles.buttonText}>Thêm thẻ</Text>
        </Pressable>
      </View>

      {/* Action Buttons */}
      <View style={styles.actionContainer}>
        <Pressable style={[styles.button, styles.secondaryButton]}>
          <FontAwesomeIcon icon={faCreditCard} size={20} color="#333" />
          <Text style={styles.buttonTextSecondary}>Nạp tiền</Text>
        </Pressable>

        <Pressable style={[styles.button, styles.secondaryButton]}>
          <FontAwesomeIcon icon={faCreditCard} size={20} color="#333" />
          <Text style={styles.buttonTextSecondary}>Quét mã QR</Text>
        </Pressable>

        <Pressable style={[styles.button, styles.secondaryButton]}>
          <FontAwesomeIcon icon={faCreditCard} size={20} color="#333" />
          <Text style={styles.buttonTextSecondary}>Gửi</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Pay;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa",
    padding: 20,
  },
  header: {
    alignItems: "center",
    marginBottom: 20,
  },
  headerText: {
    fontSize: 28,
    fontWeight: "700",
    color: "#333",
  },
  imageContainer: {
    alignItems: "center",
    marginBottom: 30,
  },
  image: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
    borderRadius: 10,
  },
  buttonContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 15,
    width: "80%",
    marginBottom: 10,
  },
  primaryButton: {
    backgroundColor: "#333",
  },
  secondaryButton: {
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#333",
    width: "30%",
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "600",
    color: "white",
    marginLeft: 10,
  },
  buttonTextSecondary: {
    fontSize: 14,
    fontWeight: "600",
    color: "#333",
    marginLeft: 10,
  },
  actionContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});