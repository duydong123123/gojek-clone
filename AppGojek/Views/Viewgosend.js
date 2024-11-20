import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  Feather,
  FontAwesome5,
  AntDesign,
} from "@expo/vector-icons";

const ViewGoSend = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable onPress={() => navigation.navigate("GoSend")}>
        <FontAwesome5 name="arrow-left" size={20} color={"green"} />
        </Pressable>
        <Text style={styles.headerText}>Chi tiết đơn hàng</Text>
      </View>

      <View style={styles.card}>
        <View style={styles.row}>
          <View style={styles.circle}>
            <FontAwesome5 name="map-marker" size={10} color={"white"} />
          </View>
          <View style={styles.column}>
            <Text style={styles.boldText}>Tiệm Sửa Xe Đông</Text>
            <Text style={styles.greyText}>Nguyễn Đông - 8454142887</Text>
          </View>
        </View>

        <View style={styles.separator} />

        <View style={styles.row}>
          <FontAwesome5 name="map-marker" size={18} color={"red"} />
          <View style={styles.column}>
            <Text style={styles.boldText}>
              VinHomes Central Park, 208 Nguyễn Hữu Cả..
            </Text>
            <Text style={styles.blueText}>Thêm ngày nhận *</Text>
          </View>
        </View>

        <View style={styles.separator} />

        <View style={styles.row}>
          <FontAwesome5 name="map-marker" size={18} color={"#BBBBBB"} />
          <Text style={styles.boldText}>Thêm điểm giao</Text>
        </View>

        <View style={styles.separator} />

        <View style={styles.row}>
          <FontAwesome5 name="box" size={18} color={"red"} />
          <View style={styles.column}>
            <Text style={styles.boldText}>Lấy hàng ngay (trong vòng 15 phút)</Text>
            <View style={styles.row}>
              <Text style={styles.greyText}>Giao vào 21:45 - 1 tiếng </Text>
              <FontAwesome5 name="arrow-right" size={18} color={"red"} />
            </View>
          </View>
        </View>

        <View style={styles.separator} />

        <View style={styles.row}>
          <FontAwesome5 name="car" size={18} color={"red"} />
          <View style={styles.column}>
            <Text style={styles.boldText}>Xe Ô tô</Text>
            <View style={styles.row}>
              <Text style={styles.greyText}>
                Đề xuất dựa trên chi tiết món hàng 
              </Text>
              <FontAwesome5 name="arrow-right" size={18} color={"red"} />
            </View>
          </View>
        </View>

        <View style={styles.separator} />

        <View style={styles.row}>
          <FontAwesome5 name="box" size={18} color={"red"} />
          <View style={styles.column}>
            <Text style={styles.boldText}>Thêm chi tiết món hàng </Text>
            <View style={styles.row}>
              <Text style={styles.greyText}>
                Delivery Guarantee - 1 Tiêu chuẩn 
              </Text>
              <FontAwesome5 name="arrow-right" size={18} color={"red"} />
            </View>
          </View>
        </View>
      </View>

      <View style={styles.additionalServices}>
        <Text style={styles.sectionTitle}>Áp dụng ưu đãi</Text>
        <View style={styles.row}>
          <FontAwesome5 name="percent" size={15} color={"red"} />
          <Text style={styles.serviceText}>
            Áp dụng ưu đãi để được giảm giá
          </Text>
          <FontAwesome5 name="arrow-right" size={18} color={"red"} />
        </View>

        <Text style={styles.sectionTitle}>Dịch vụ thêm</Text>
        <View style={styles.row}>
          <Text style={styles.serviceText}>Thu tiền hộ (COD)</Text>
          <FontAwesome5 name="plus" size={18} color={"red"} />
        </View>
        <View style={styles.row}>
          <Text style={styles.serviceText}>Giao hàng tận tay</Text>
          <FontAwesome5 name="plus" size={18} color={"red"} />
        </View>
        <View style={styles.row}>
          <Text style={styles.serviceText}>Ba gác bóc dỡ hàng</Text>
          <FontAwesome5 name="plus" size={18} color={"red"} />
        </View>
        <View style={styles.row}>
          <Text style={styles.serviceText}>
            Giao hàng cỡ lớn (lên đến 50kg, 60x70x60cm)
          </Text>
          <FontAwesome5 name="plus" size={18} color={"red"} />
        </View>
      </View>

      <View style={styles.footer}>
        <View style={styles.footerRow}>
          <Text style={styles.boldText}>Tổng cộng</Text>
          <Text style={styles.boldText}>143.000đ</Text>
        </View>
        <View style={styles.footerRow}>
          <View style={styles.saveButton}>
            <FontAwesome5 name="save" size={18} color={"red"} />
          </View>
          <View style={styles.checkoutButton}>
            <Text style={styles.boldText}>Kiểm tra đơn hàng</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ViewGoSend;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 10,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#99FFCC",
    padding: 10,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "700",
    marginLeft: 20,
  },
  card: {
    backgroundColor: "#DDDDDD",
    borderRadius: 5,
    padding: 10,
    marginVertical: 10,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
  },
  column: {
    marginLeft: 10,
  },
  boldText: {
    fontSize: 14,
    fontWeight: "700",
  },
  greyText: {
    fontSize: 12,
    color: "#888888",
  },
  blueText: {
    fontSize: 12,
    color: "blue",
  },
  separator: {
    height: 1,
    backgroundColor: "#BBBBBB",
    marginVertical: 5,
  },
  circle: {
    width: 15,
    height: 15,
    borderRadius: 15 / 2,
    backgroundColor: "blue",
    justifyContent: "center",
    alignItems: "center",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "700",
    marginTop: 20,
  },
  serviceText: {
    flex: 1,
    marginLeft: 10,
    fontSize: 14,
  },
  additionalServices: {
    marginVertical: 10,
  },
  footer: {
    backgroundColor: "#DDDDDD",
    padding: 10,
    marginTop: 20,
    borderRadius: 5,
  },
  footerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 5,
  },
  saveButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  checkoutButton: {
    flex: 1,
    marginLeft: 10,
    borderRadius: 25,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    height: 50,
  },
});
