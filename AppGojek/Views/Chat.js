import { View, Text, StatusBar, SafeAreaView, FlatList, ActivityIndicator, StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';

export default function Chat() {
  const [messages, setMessages] = useState([]); // Lưu danh sách tin nhắn
  const [loading, setLoading] = useState(true); // Trạng thái loading

  // Gọi API từ MockAPI
  useEffect(() => {
    fetch('https://673c30f796b8dcd5f3f8d48d.mockapi.io/messenger')
      .then((response) => response.json())
      .then((data) => {
        setMessages(data); // Lưu dữ liệu tin nhắn vào state
        setLoading(false); // Tắt trạng thái loading
      })
      .catch((error) => {
        console.error('Error fetching messages:', error);
        setLoading(false); // Tắt trạng thái loading trong trường hợp lỗi
      });
  }, []);

  // Render mỗi tin nhắn
  const renderMessage = ({ item }) => (
    <View style={styles.messageContainer}>
      <Text style={styles.sender}>{item.nguoi_gui}</Text>
      <Text style={styles.content}>{item.noi_dung}</Text>
      <View style={styles.messageFooter}>
        <Text style={styles.time}>{item.thoi_gian}</Text>
        <Text style={styles.messageType}>{item.loai_tin_nhan}</Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Text style={styles.header}>Tin nhắn của bạn</Text>
      {loading ? (
        <ActivityIndicator size="large" color="blue" />
      ) : messages.length > 0 ? (
        <FlatList
          data={messages}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderMessage}
          contentContainerStyle={styles.messageList}
        />
      ) : (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>Bạn chưa có tin nhắn</Text>
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
    color: '#333',
  },
  messageList: {
    paddingHorizontal: 15,
  },
  messageContainer: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  sender: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  content: {
    fontSize: 14,
    color: '#555',
    marginBottom: 10,
  },
  messageFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  time: {
    fontSize: 12,
    color: 'gray',
  },
  messageType: {
    fontSize: 12,
    fontStyle: 'italic',
    color: 'blue',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 18,
    color: '#666',
  },
});
