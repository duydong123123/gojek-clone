import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ActivityIndicator,
} from "react-native";

const url = "https://6704d4ebab8a8f892734ff45.mockapi.io/ACTION";

const Actions = () => {
  const [data, setData] = useState([]); // State để lưu dữ liệu API
  const [loading, setLoading] = useState(true); // Trạng thái loading

  useEffect(() => {
    // Gọi API
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        setData(json); // Cập nhật dữ liệu vào state
        setLoading(false); // Dừng loading
      })
      .catch((error) => {
        console.error("Error fetching data:", error); // Xử lý lỗi
        setLoading(false); // Dừng loading trong trường hợp lỗi
      });
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Hoạt động gần đây</Text>
      {loading ? (
        <ActivityIndicator size="large" color="green" />
      ) : data.length > 0 ? (
        <FlatList
          data={data}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <View style={styles.row}>
                <Text style={styles.label}>Mã:</Text>
                <Text style={styles.value}>{item.id}</Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.label}>ID người dùng:</Text>
                <Text style={styles.value}>{item.userId}</Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.label}>Loại:</Text>
                <Text style={styles.value}>{item.type}</Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.label}>Mô tả:</Text>
                <Text style={styles.value}>{item.description}</Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.label}>Số tiền:</Text>
                <Text style={styles.value}>
                  {item.amount} {item.currency}
                </Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.label}>Thời gian:</Text>
                <Text style={styles.value}>{item.timestamp}</Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.label}>Trạng thái:</Text>
                <Text
                  style={[
                    styles.value,
                    item.status === "success"
                      ? styles.statusSuccess
                      : styles.statusFailed,
                  ]}
                >
                  {item.status}
                </Text>
              </View>
            </View>
          )}
        />
      ) : (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>Không có dữ liệu hoạt động.</Text>
        </View>
      )}
    </View>
  );
};

export default Actions;

// Định nghĩa styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f8f8",
    padding: 10,
  },
  header: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 10,
    color: "#333",
  },
  item: {
    backgroundColor: "#ffffff",
    marginVertical: 8,
    padding: 15,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
  },
  label: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#555",
  },
  value: {
    fontSize: 14,
    color: "#333",
  },
  statusSuccess: {
    color: "green",
    fontWeight: "bold",
  },
  statusFailed: {
    color: "red",
    fontWeight: "bold",
  },
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  emptyText: {
    fontSize: 16,
    color: "#888",
  },
});
