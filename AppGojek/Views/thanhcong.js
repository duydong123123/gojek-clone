import React from "react";
import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome5 } from "@expo/vector-icons";

export default function ThanhCong() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Success Icon */}
      <View style={styles.iconContainer}>
        <View style={styles.iconWrapper}>
          <FontAwesome5 name="check" size={50} color="white" />
        </View>
      </View>

      {/* Success Message */}
      <Text style={styles.successMessage}>Đặt hàng thành công</Text>

      {/* Back to Home Button */}
      <Pressable
        style={({ pressed }) => [
          styles.button,
          pressed && { backgroundColor: "#28A745" },
        ]}
        onPress={() => navigation.navigate("GoFood")}
      >
        <Text style={styles.buttonText}>Quay lại</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(0, 188, 212)",
    justifyContent: "center",
    alignItems: "center",
  },
  iconContainer: {
    marginBottom: 30,
  },
  iconWrapper: {
    width: 100,
    height: 100,
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 10,
  },
  successMessage: {
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    marginBottom: 40,
  },
  button: {
    backgroundColor: "#28A745",
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 30,
    elevation: 5,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
});
