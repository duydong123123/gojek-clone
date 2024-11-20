import { View, Text, ScrollView, StyleSheet } from 'react-native';
import React from 'react';
import {
  Feather,
  FontAwesome,
  MaterialIcons,
  Ionicons,
} from '@expo/vector-icons';

const Profile = () => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {/* Profile Header */}
        <View style={styles.profileHeader}>
          <View style={styles.avatar}>
            <FontAwesome name="user" size={30} color="white" />
          </View>
          <View style={styles.profileInfo}>
            <Text style={styles.profileName}>Lính Thủy Đánh Bia</Text>
            <Text style={styles.profileDetail}>dongdzpromax@gmail.com</Text>
            <Text style={styles.profileDetail}>0909798386</Text>
          </View>
          <View style={styles.editIcon}>
            <Feather name="edit" size={24} color="black" />
          </View>
        </View>

        {/* Account Section */}
        <Text style={styles.sectionHeader}>Tài Khoản</Text>
        {renderMenuItem('Rewards', <MaterialIcons name="stars" size={20} color="green" />)}
        {renderMenuItem('Gói hội viên', <FontAwesome name="id-card" size={20} color="blue" />)}
        {renderMenuItem('Thử thách', <Ionicons name="ios-trophy-outline" size={20} color="orange" />)}
        {renderMenuItem('Trợ giúp & yêu cầu hỗ trợ', <Feather name="help-circle" size={20} color="purple" />)}
        {renderMenuItem('Giới thiệu bạn bè', <Ionicons name="ios-people-outline" size={20} color="teal" />)}
        {renderMenuItem('Thông báo', <Feather name="bell" size={20} color="red" />)}
        {renderMenuItem('Bảo mật tài khoản', <Feather name="lock" size={20} color="gray" />)}
        {renderMenuItem('Quản lý tài khoản', <Feather name="settings" size={20} color="black" />)}

        {/* General Information Section */}
        <Text style={styles.sectionHeader}>Thông tin chung</Text>
        {renderMenuItem('Quy chế', <Feather name="file-text" size={20} color="black" />)}
        {renderMenuItem('Chính sách bảo mật', <Feather name="shield" size={20} color="green" />)}
        {renderMenuItem('Điều khoản dịch vụ', <Feather name="book" size={20} color="blue" />)}
        {renderMenuItem('Đánh giá ứng dụng Gojek', <Feather name="star" size={20} color="gold" />, '8.38.6')}

        {/* Spacer */}
        <View style={{ height: 20 }} />
      </ScrollView>
    </View>
  );
};

// Helper function to render each menu item
const renderMenuItem = (title, icon, rightText = null) => (
  <View style={styles.menuItem}>
    <View style={styles.menuLeft}>
      {icon}
      <Text style={styles.menuText}>{title}</Text>
    </View>
    {rightText && <Text style={styles.menuRightText}>{rightText}</Text>}
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  scrollView: {
    flex: 1,
    paddingHorizontal: 20,
  },
  profileHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileInfo: {
    flex: 1,
    marginLeft: 20,
  },
  profileName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  profileDetail: {
    fontSize: 14,
    color: 'gray',
    marginTop: 3,
  },
  editIcon: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginVertical: 10,
  },
  menuItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  menuLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuText: {
    fontSize: 16,
    marginLeft: 10,
    color: '#333',
  },
  menuRightText: {
    fontSize: 14,
    color: 'gray',
  },
});

export default Profile;
