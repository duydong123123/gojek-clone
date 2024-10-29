import React, { useEffect, useState, Suspense } from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';
import { SearchBar } from '@rneui/themed';
import * as Location from 'expo-location';
import { MaterialCommunityIcons } from '@expo/vector-icons';

// Lazy load MapView and Marker
const MapView = React.lazy(() => import('react-native-maps').then(module => ({ default: module.MapView })));
const Marker = React.lazy(() => import('react-native-maps').then(module => ({ default: module.Marker })));

const DatGojek = () => {
  const [region, setRegion] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  const [search, setSearch] = useState("");
  const [locationPermission, setLocationPermission] = useState(false);

  const userLocation = async () => {
    try {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status === 'granted') {
        const location = await Location.getCurrentPositionAsync({});
        setRegion({
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        });
        setLocationPermission(true);
      } else {
        console.log('Permission to access location was denied');
      }
    } catch (error) {
      console.error("Error fetching location:", error);
    }
  };

  useEffect(() => {
    userLocation();
  }, []);

  const updateSearch = (search) => {
    setSearch(search);
  };

  return (
    <ImageBackground  style={styles.container}>
      {locationPermission && (
        <Suspense fallback={<Text>Loading Map...</Text>}>
          <View style={{ width: '100%', height: 200, borderRadius: 30 }}>
            <MapView style={styles.map} region={region}>
              <Marker coordinate={region} />
            </MapView>
          </View>
        </Suspense>
      )}
      <View style={{ width: '80%' }}>
        <SearchBar
          placeholder="Tìm địa điểm"
          onChangeText={updateSearch}
          value={search}
          platform="ios"
          searchIcon={{ size: 24 }}
        />
        <View style={styles.savedLocationsContainer}>
          <View style={styles.savedLocationButton}>
            <MaterialCommunityIcons name="home-circle" size={24} color="gray" />
            <Text style={styles.savedLocationText}>Lưu nhà riêng</Text>
          </View>
          <View style={styles.savedLocationButton}>
            <MaterialCommunityIcons name="home-circle-outline" size={26} color="gray" />
            <Text style={styles.savedLocationText}>Lưu nhà riêng</Text>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

export default DatGojek;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  map: {
    width: '100%',
    height: '100%',
  },
  savedLocationsContainer: {
    width: '100%',
    height: 40,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  savedLocationButton: {
    flexDirection: 'row',
    width: 150,
    height: '100%',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'gray',
  },
  savedLocationText: {
    marginLeft: 5,
    fontSize: 16,
    fontWeight: '500',
  },
});
