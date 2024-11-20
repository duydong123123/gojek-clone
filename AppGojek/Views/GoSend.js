import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome5 } from "@expo/vector-icons";

const GoSend = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Pressable onPress={() => navigation.navigate("Home")} style={styles.backButton}>
          <FontAwesome5 name="arrow-left" size={20} color="green" />
        </Pressable>
        <Text style={styles.headerText}>
          Express Xin chào
          {"\n"}Dịch vụ giao nhận hàng mọi lúc
        </Text>
        <Image source={require("../assets/bikeviewheader.jpg")} style={styles.headerImage} />
      </View>

      {/* Address Section */}
      <View style={styles.addressContainer}>
        <Pressable style={styles.addressCard}>
          <View style={styles.addressRow}>
            <View style={styles.circle}>
              <FontAwesome5 name="map-marker" size={10} color="white" />
            </View>
            <Text style={styles.addressText}>Near 137/27 Alley 168 Hoang Minh Chanh</Text>
          </View>
          <View style={styles.addressRow}>
            <FontAwesome5 name="map-marker" size={18} color="red" />
            <Text style={styles.addressText}>VinHomes Central Park, 208 Nguyễn Hữu Cảnh</Text>
          </View>
        </Pressable>
      </View>

      {/* Options Section */}
      <View style={styles.optionsContainer}>
        <Pressable style={styles.optionButton}>
          <Text style={styles.optionText}>Giao Đến: VinHomes Central Park</Text>
        </Pressable>
        <Pressable style={styles.optionButton}>
          <Text style={styles.optionText}>Nhận Hàng: VinHomes Central Park</Text>
        </Pressable>
      </View>

      {/* Estimate Price Button */}
      <View style={styles.footer}>
        <Pressable
          onPress={() => navigation.navigate("ViewGoSend")}
          style={({ pressed }) => [
            styles.estimateButton,
            pressed && { backgroundColor: "#00A300" },
          ]}
        >
          <Text style={styles.estimateButtonText}>Xem giá ước tính</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default GoSend;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    padding: 20,
  },
  header: {
    backgroundColor: "#99FFCC",
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  backButton: {
    marginRight: 10,
  },
  headerText: {
    fontSize: 18,
    fontWeight: "600",
    color: "#333",
    flex: 1,
  },
  headerImage: {
    width: 100,
    height: 80,
    borderRadius: 10,
  },
  addressContainer: {
    marginBottom: 20,
  },
  addressCard: {
    backgroundColor: "#FFDAB9",
    padding: 15,
    borderRadius: 10,
    elevation: 2,
  },
  addressRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  circle: {
    width: 15,
    height: 15,
    borderRadius: 15 / 2,
    backgroundColor: "blue",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  addressText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#333",
  },
  optionsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  optionButton: {
    backgroundColor: "#DDDDDD",
    padding: 15,
    borderRadius: 10,
    width: "48%",
  },
  optionText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#333",
  },
  footer: {
    marginTop: "auto",
    alignItems: "center",
  },
  estimateButton: {
    backgroundColor: "#00CC00",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    elevation: 3,
  },
  estimateButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
});
